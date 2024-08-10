const Supplier = require("../model/supplier");
const getNextSequence = require('../utill/getNextId');

const getAllSupplier = (req, res, next) => {
    Supplier.find()
        .then(response => res.json(response))
        .catch(error => {
            res.json({error})
        });
}

const addSupplier = async (req, res, next) => {
    try {
        const newSupplierId = await getNextSequence('id');

        const newSupplier = new Supplier({
            id: newSupplierId,
            name: req.body.name,
            street: req.body.street,
            city: req.body.city,
            mobile: req.body.mobile,
        });

        const savedSupplier = await newSupplier.save();
        res.json(savedSupplier);
    } catch (error) {
        res.json({ error });
    }
};


const updateSupplier = async (req, res, next) => {
    const { id, name, street, city, mobile } = req.body;

    try {
        const result = await Supplier.updateOne(
            { id: id }, // filter condition
            { $set: { name, street, city, mobile } } // fields to update
        );

        if (result.modifiedCount === 0) {
            return res.status(404).json({ error: 'Supplier not found or no any changes' });
        }else {
            return res.status(200).json("Successfully updated Supplier");
        }

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const deleteSupplier =  (req, res, next) => {
    const supplierId = req.body.id;

    Supplier.deleteOne({id:supplierId})
        .then(response => res.json(response))
        .catch(error => {
            res.json({error})
        })
}
exports.getAllSupplier = getAllSupplier;
exports.addSupplier = addSupplier;
exports.updateSupplier = updateSupplier;
exports.deleteSupplier = deleteSupplier;