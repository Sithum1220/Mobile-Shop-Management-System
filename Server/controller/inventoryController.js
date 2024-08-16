const Inventory = require("../model/inventory");
const Supplier = require("../model/supplier");

const getAllInventory = (req, res, next) => {
    Inventory.find()
        .then(response => res.json(response))
        .catch(error => {
            res.json({error})
        });
}

const addInventory = async (req, res, next) => {
    try {
        const supplierId = req.body.supplier_id;

        if (typeof supplierId !== "number") {
            return res.status(400).json({ error: 'Invalid supplier ID format' });
        }

        // Check if supplier exists
        const supplierData = await Supplier.findOne({ id: supplierId });
        if (!supplierData) {
            return res.status(404).json({ error: 'Supplier not found' });
        }

        // Find the last inventory id
        const lastInventory = await Inventory.findOne().sort({ _id: -1 }).exec();
        const newId = lastInventory ? lastInventory.id + 1 : 1;


        // Create a new inventory item
        const newInventory = new Inventory({
            id: newId,
            item_name: req.body.item_name,
            description: req.body.description,
            category: req.body.category,
            supplier_id: supplierId,
            qty: req.body.qty,
            buy_price: req.body.buy_price,
            sell_price: req.body.sell_price,
        });

        console.log('data')
        console.log(newInventory)
        // Save the new inventory item
        const savedInventory = await newInventory.save();
        return res.status(201).json(savedInventory);

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