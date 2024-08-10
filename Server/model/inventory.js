const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const InventorySchema = new Schema({
    id: {type: Number, unique: true},
    item_name: String,
    description: String,
    category: String,
    supplier_id: Number,
    qty: Number,
    buy_price: Number,
    sell_price: Number,
})

const Inventory = mongoose.model('Inventory', InventorySchema);

module.exports = Inventory;