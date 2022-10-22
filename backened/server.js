require ('dotenv').config();
const cors = require('cors');
const path = require('path');
const express = require('express');
const port = process.env.PORT || 8000;
let stkPushRouter = express.Router()
const app = express();
const axios =require('axios');
var bodyParser = require('body-parser');
const request = require('request');
const session =require('express-session');
const flash = require('express-flash');
const bcrypt =require('bcrypt');


let build = 'build';
console.log(path.join(__dirname, '..',build))


//MIDDLEWARES...
app.use(cors({origin: true, credentials: true}));
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '..',build)));
app.use(bodyParser.json());
app.use(
    session({
        secret:"secret",
        resave:false,
        saveUninitialized:false
    })
)


//CONNECTING TO THE DATABASE...
const mongoose = require('mongoose');
const connectDB = require("./dbConn");
const Product = require('./Models/Products');
connectDB();
const db = mongoose.connection;
db.once("open", ()=>{
    console.log("Successfully connected to the mongoDB");
    
    app.listen(port,()=>{
        console.log(`Server Running on ${port}...`)

});
});

//REGISTERING NEW USERS...

//LOGIN USERS...



//FETCHING PRODUCTS FROM DATABASE...
app.get('/products', (req, res)=>{
let products = Product.find({},function(err,product){
    if (err){
        console.log(err)
    } else {
        res.json(products)
    }
})
})

//MPESA...
//middleware function to generate token
const generateToken = async (req,res,next) => {
    const secretKey = process.env.SECRET_KEY;
    const consumerKey = process.env.CONSUMER_KEY;

    const auth = new Buffer.from(`${consumerKey}:${secretKey}`).toString("base64");
    await axios.get("https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",{
        headers:{
            authorization: `Basic ${auth}`,
        },
    }
    ).then((response)=>{
        // console.log(response.data.access_token)
     token = response.data.access_token
        next();
    }).catch((err)=>{
        console.log(err);
        // res.status(400).json(err.message)
    })
}

//M-PESA ..phone number and amount implementation
app.post('/stk', generateToken, async(req,res)=>{
    const phoneNo=req.body.phoneNo.substring(1)
    const amount = req.body.amount

    const date = new Date();
    const timestamp = date.getFullYear()+
    ('0' + (date.getMonth() + 1)).slice(-2) +
    ("0" + date.getDate()).slice(-2) +
    ("0" + date.getHours()).slice(-2) +
    ("0" + date.getMinutes()).slice(-2) +
    ("0" + date.getSeconds()).slice(-2);
    const passkey=process.env.PASS_KEY;
    const shortcode = 174379;
    const password = new Buffer.from(shortcode + passkey + timestamp).toString('base64')
  
  await axios.post(
    "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
    {    
        "BusinessShortCode": shortcode,    
        "Password":password,
      "Timestamp": timestamp,    
      "TransactionType": "CustomerPayBillOnline",    
        "Amount": amount,    
       "PartyA":`254${phoneNo}`,    
        "PartyB":shortcode,    
      "PhoneNumber": `254${phoneNo}`,    
      "CallBackURL":"https://mydomain.com/pat",    
      "AccountReference":`254${phoneNo}`,    
      "TransactionDesc":"Test"
     },     
     {
        headers:{
            Authorization:`Bearer ${token}`
        },
     }
     ).then((data)=>{
        console.log(data.data)
        res.status(200).json(data.data)
     }).catch((err)=>{
        console.log(err.message)
        res.status(400).json(err.message)
     })


});

let fetchTransaction = function (req, res, next) {
    console.log('Fetch initial transaction request...')
    // Check validity of message
    if (!req.body) {
        mpesaFunctions.handleError(res, 'Invalid message received')
    }

    let query = LipaNaMpesa.findOne({
        'mpesaInitResponse.MerchantRequestID': req.body.Body.stkCallback.MerchantRequestID,
        'mpesaInitResponse.CheckoutRequestID': req.body.Body.stkCallback.CheckoutRequestID
    })

    // execute the query at a later time
    query.exec(function (err, lipaNaMPesaTransaction) {
        // handle error
        if (err || !lipaNaMPesaTransaction) {
            mpesaFunctions.handleError(res, 'Initial Mpesa transaction not found')
        }
        console.log('Initial transaction request found...')
        // Add transaction to req body
        req.lipaNaMPesaTransaction = lipaNaMPesaTransaction
        next()
    })
}

let updateTransaction = function (req, res, next) {
    console.log('update Transaction Callback...')

    let conditions = {
        'mpesaInitResponse.MerchantRequestID': req.body.Body.stkCallback.MerchantRequestID,
        'mpesaInitResponse.CheckoutRequestID': req.body.Body.stkCallback.CheckoutRequestID
    }

    let options = { multi: true }

    // Set callback request to existing transaction
    req.lipaNaMPesaTransaction.mpesaCallback = req.body.Body
    // Update existing transaction
    LipaNaMpesa.update(conditions, req.lipaNaMPesaTransaction, options,
        function (err) {
            if (err) {
                mpesaFunctions.handleError(res, 'Unable to update transaction', Ge)
            }
            next()
        })

}

/**
 * Fetch reference number from Mpesa callback 'Item' array
 * @param item
 * @returns {*}
 */
let fetchMpesaReferenceNumber = function (item) {
    if (item) {
        if (item.length) {
            for (let i = 0; i < item.length; i++) if (item[i].Name === 'MpesaReceiptNumber') return item[i].Value
        }
    }
    return ''
}

/**
 * Forward request to transaction initiator via callback
 * @param req
 * @param res
 * @param next
 */
let forwardRequestToRemoteClient = function (req, res, next) {
    console.log('Send request to originator..')
    // Forward request to remote server
    mpesaFunctions.sendCallbackMpesaTxnToAPIInitiator({
        url: req.lipaNaMPesaTransaction.mpesaInitRequest.CallBackURL,
        transaction: {
            status: req.lipaNaMPesaTransaction.mpesaCallback.stkCallback.ResultCode === 0 ? '00' : req.lipaNaMPesaTransaction.mpesaCallback.stkCallback.ResultCode,
            message: req.lipaNaMPesaTransaction.mpesaCallback.stkCallback.ResultDesc,
            merchantRequestId: req.lipaNaMPesaTransaction.merchantRequestId,
            checkoutRequestId: req.lipaNaMPesaTransaction.checkoutRequestId,
            mpesaReference: fetchMpesaReferenceNumber(req.lipaNaMPesaTransaction.mpesaCallback.stkCallback.CallbackMetadata.Item)
        }
    }, req, res, next)
}

stkPushRouter.post('/callback',
    fetchTransaction,
    updateTransaction,
    forwardRequestToRemoteClient,
    function (req, res) {
        res.json({
            ResultCode: 0,
            ResultDesc: 'The service request is processed successfully.'
        })
    })
