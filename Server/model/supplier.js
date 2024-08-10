const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const supplierSchema = new Schema({
    id: {type: Number, unique: true},
    name: String,
    street: String,
    city: String,
    mobile: {type: String, unique: true},
})

const supplier = mongoose.model('Supplier', supplierSchema);

module.exports = supplier;