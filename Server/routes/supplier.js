const express = require('express');
const router = express.Router();
const supplierController = require('../controller/suppplierController');

router.get('/allSupplier',supplierController.getAllSupplier);
router.post('/creatSupplier',supplierController.addSupplier);
router.patch('/updateSupplier',supplierController.updateSupplier);
router.delete('/deleteSupplier/:id',supplierController.deleteSupplier);

module.exports = router;