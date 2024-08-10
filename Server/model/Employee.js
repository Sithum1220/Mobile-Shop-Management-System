const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    id: {type: Number, unique: true},
    name: String,
    street: String,
    city: String,
    mobile: {type: String, unique: true},
    nic: {type: String, unique: true},
    role: String,
})

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;