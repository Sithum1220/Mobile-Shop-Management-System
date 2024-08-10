const Employee = require("../model/employee");

const getAllEmployees = (req, res, next) => {
    Employee.find()
        .then(response => res.json(response))
        .catch(error => {
            res.json({error})
        });
}

const addEmployee = (req, res, next) => {
    const newEmployee = new Employee({
        id: req.body.id,
        name: req.body.name,
        street: req.body.street,
        city: req.body.city,
        mobile: req.body.mobile,
        nic: req.body.nic,
        role: req.body.role,
    });

    newEmployee.save()
        .then(response => res.json(response))
        .catch(error => {
            res.json({error})
        });
}

const updateEmployee = async (req, res, next) => {

};

const deleteEmployee =  (req, res, next) => {
    const employeeId = req.body.id;

    Employee.deleteOne({id:employeeId})
        .then(response => res.json(response))
        .catch(error => {
            res.json({error})
        })
}
exports.getAllEmployees = getAllEmployees;
exports.addEmployee = addEmployee;
exports.updateEmployee = updateEmployee;
exports.deleteEmployee = deleteEmployee;