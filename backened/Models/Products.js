const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    product_id:{
        type: Number,
        required: true,
    },
    name: String,
    desc: String,
    thumbnail: String,
    quantity: Number,
    price: Number
})


module.exports = mongoose.model("Product", productSchema);