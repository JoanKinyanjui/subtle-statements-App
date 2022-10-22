const mongoose = require('mongoose');
 
const connectDB = async ()=>{
    try{
        await mongoose.connect("mongodb+srv://joank:Mysubtlestatementsdbpassword@subtle-statements.2voo017.mongodb.net/?retryWrites=true&w=majority",{
            useUnifiedTopology : true
        });
    }
    catch (err){
        console.error(err);
        }
}

module.exports = connectDB;