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
    const { id, name, street, city, mobile, nic, role } = req.body;

    try {
        const result = await Employee.updateOne(
            { id: id }, // filter condition
            { $set: { name, street, city, mobile, nic, role } } // fields to update
        );

        if (result.modifiedCount === 0) {
            return res.status(404).json({ error: 'Employee not found or no any changes' });
        }else {
            return res.status(200).json("Successfully updated Employee");
        }

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
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