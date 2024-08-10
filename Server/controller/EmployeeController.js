const Employee = require("../model/Employee");

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
    try {
        const employeeId = req.body.id;

        const updatedEmployee = await Employee.findByIdAndUpdate(
            employeeId,
            {
                name: req.body.name,
                street: req.body.street,
                city: req.body.city,
                mobile: req.body.mobile,
                nic: req.body.nic,
                role: req.body.role,
            },
            { new: true }
        );

        if (!updatedEmployee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json(updatedEmployee);
    } catch (error) {
        next(error);
    }
};

const deleteEmployee =  (req, res, next) => {
    const employeeId = req.body.id;
   const deleteEmployee = Employee.findByIdAndDelete(employeeId)
    .then(response => res.json(response))
    .catch(error => {
        res.json({error})
    })

    if (!deleteEmployee) {
        return res.status(404).json({ message: 'Employee not found' });
    }
}
exports.getAllEmployees = getAllEmployees;
exports.addEmployee = addEmployee;
exports.updateEmployee = updateEmployee;
exports.deleteEmployee = deleteEmployee;