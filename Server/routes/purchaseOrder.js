const express = require('express');
const router = express.Router();
const purchaseOrderController = require('../controller/purchaseOrderController');

router.get('/allOrder',purchaseOrderController.getAllOrder);
router.post('/creatOrder',purchaseOrderController.addOrders);
// router.patch('/updateSupplier',supplierController.updateSupplier);
// router.delete('/deleteSupplier',supplierController.deleteSupplier);

module.exports = router;