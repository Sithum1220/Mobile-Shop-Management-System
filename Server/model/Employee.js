const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    id: Number,
    name: String,
    street: String,
    city: String,
    mobile: String,
    nic: String,
    role: String,
})

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;