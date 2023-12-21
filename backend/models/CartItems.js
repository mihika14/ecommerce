const mongoose = require('mongoose')

const CartItemsSchema = new mongoose.Schema(
    {
        price: {type: Number}
    },

    {
        collection: "cart"
    }
)

module.exports = mongoose.model('cart' , CartItemsSchema)