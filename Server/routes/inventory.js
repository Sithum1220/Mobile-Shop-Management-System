const express = require('express');
const router = express.Router();
const inventoryController = require('../controller/inventoryController');

router.get('/allInventory',inventoryController.getAllInventory);
console.log("routers")
router.post('/creatInventory',inventoryController.addInventory);
router.patch('/updateInventory',inventoryController.updateInventory);
router.delete('/deleteInventory/:id',inventoryController.deleteInventory);

module.exports = router;