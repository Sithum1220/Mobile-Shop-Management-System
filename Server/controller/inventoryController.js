const Inventory = require("../model/inventory");
const Supplier = require("../model/supplier");
const getNextSequence = require('../utill/getNextId');

const getAllInventory = (req, res, next) => {
    Inventory.find()
        .then(response => res.json(response))
        .catch(error => {
            res.json({error})
        });
}

const addInventory = async (req, res, next) => {
    try {
        const newInventoryId = await getNextSequence('id');
        const supplierId = req.body.supplier_id;

        console.log(typeof supplierId)

        if (typeof supplierId !== "number") {
            return res.status(400).json({ error: 'Invalid supplier ID format' });
        }



        const supplierData = await Supplier.find({id:supplierId},undefined,undefined);



        if (supplierData.length > 0) {
            const newInventory = new Inventory({
                id: newInventoryId,
                item_name: req.body.item_name,
                description: req.body.description,
                category: req.body.category,
                supplier_id: supplierId,
                qty: req.body.qty,
                buy_price: req.body.buy_price,
                sell_price: req.body.sell_price,
            });

            const savedInventory = await newInventory.save();
            return res.status(201).json(savedInventory);
        } else {
            return res.status(404).json({ error: 'Supplier not found' });
        }
    } catch (error) {
        console.error(error); // Log the error for debugging
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};


const updateInventory = async (req, res, next) => {
    const {id, item_name, description, category, qty, buy_price, sell_price} = req.body;

    try {
        const result = await Inventory.updateOne(
            {id: id}, // filter condition
            {$set: {item_name, description, category, qty, buy_price, sell_price}} // fields to update
        );

        if (result.modifiedCount === 0) {
            return res.status(404).json({error: 'Inventory not found or no any changes'});
        } else {
            return res.status(200).json("Successfully updated Inventory");
        }

    } catch (error) {
        res.status(500).json({error: error.message});
    }
};


const deleteInventory = (req, res, next) => {
    const inventoryId = req.body.id;

    Inventory.deleteOne({id: inventoryId})
        .then(response => res.json(response))
        .catch(error => {
            res.json({error})
        })
}
exports.getAllInventory = getAllInventory;
exports.addInventory = addInventory;
exports.updateInventory = updateInventory;
exports.deleteInventory = deleteInventory;