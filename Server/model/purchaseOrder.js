const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const purchaseOrderSchema = new Schema({
    id: {type: Number, unique: true},
    item_name: String,
    items: [{
        item_code: Number,
        qty: Number,
    }],
    date: Date,
    total: Number,
})

const purchaseOrder = mongoose.model('Order', purchaseOrderSchema);

module.exports = purchaseOrder;