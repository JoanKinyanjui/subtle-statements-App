const { ErrorOutlineSharp } = require('@mui/icons-material');
const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();

app.use(express());
var database

app.get('/',(req,res)=>{
    res.send('Welcome to MongoDb Api')
});
app.get('/api/users',(req,res)=>{
    database.collection('users').find({}).toArray((err,result)=>{
         if(err) throw err
         res.send(result)
    })

})
app.get('/api/products',(req,res)=>{
    database.collection('products').find({}).toArray((err,result)=>{
         if(err) throw err
         res.send(result)
    })

})
app.get('/api/orders',(req,res)=>{
    database.collection('orders').find({}).toArray((err,result)=>{
         if(err) throw err
         res.send(result)
    })

})
app.get('/api/payment',(req,res)=>{
    database.collection('payment').find({}).toArray((err,result)=>{
         if(err) throw err
         res.send(result)
    })

})
app.get('/api/payment-mpesa',(req,res)=>{
    database.collection('payment-mpesa').find({}).toArray((err,result)=>{
         if(err) throw err
         res.send(result)
    })

})

app.listen(8080,()=>{
    MongoClient.connect('mongodb://localhost:27017',{useNewUrlParser: true},(error,result)=>{
        if(error) throw error
        database = result.db('js-app')
        console.log('Connection Successful')
    })
})