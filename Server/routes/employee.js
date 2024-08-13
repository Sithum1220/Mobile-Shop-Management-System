const express = require('express');
const router = express.Router();
const employeeController = require('../controller/employeeController');

router.get('/allEmployees',employeeController.getAllEmployees);
router.post('/creatEmployee',employeeController.addEmployee);
router.patch('/updateEmployee',employeeController.updateEmployee);
router.delete('/deleteEmployee/:id',employeeController.deleteEmployee);

module.exports = router;