const Inventory = require("../model/inventory");
const PurchaseOrder = require("../model/purchaseOrder");
const Supplier = require("../model/supplier");
const newInventory = require("debug");

const getAllOrder= (req, res, next) => {
    PurchaseOrder.find()
        .then(response => res.json(response))
        .catch(error => {
            res.json({error})
        });
}

const addOrders = async (req, res, next) => {
    const session = await PurchaseOrder.startSession();
    session.startTransaction();
    try {
        const total = req.body.total;
        // Find the last inventory id
        const lastOrder = await PurchaseOrder.findOne().sort({ _id: -1 }).exec();
        const newId = lastOrder ? lastOrder.id + 1 : 1;

        const newOrder = new PurchaseOrder({
            id: newId,
            items : req.body.items,
            item_name: req.body.item_name,
            date: Date.now(),
            total: total,
        });

        await newOrder.save({session})

        await updateInventory(session, req.body.items,res)
console.log("lalalalalalalalalalalalala");
        await session.commitTransaction();
        res.status(201).json(newOrder);
    } catch (error) {
        await session.abortTransaction()
        console.error(error); // Log the error for debugging
        return res.status(500).json({ error: 'Internal Server Error' });
    }finally {
        await session.endSession();
    }
};

async function updateInventory(session, items, res) {
    for (const item of items) {

        const product = await Inventory.findOne({ id: item.item_code }).session(session);

        if (!product) {
            throw new Error(`Product with ID ${item.item_code} not found`);

            // return res.status(404).json({ error: `Product with ID ${item.item_code} not found` });
        }

        if (product.qty < item.qty) {
            throw new Error(`Insufficient inventory for product ${item.item_name}`);

            // return res.status(500).json({ error: `Insufficient inventory for product ${product.item_name}`});

        }

        product.qty -= item.qty;
        await product.save({ session });
    }
}

exports.getAllOrder = getAllOrder;
exports.addOrders = addOrders;