import * as React from 'react';
import { ManageForm } from "../../common/ManageForm/ManageForm";
import { useEffect, useState } from "react";
import Axios from "axios";

const columns = ['id', 'Item Name', 'Description', 'Category', "Supplier Id", "QTY", 'Buy Price', 'Sell Price'];

export function Inventory() {
    const [inventory, setInventory] = useState([]);
    const [submited, setSubmited] = useState(false);

    useEffect(() => {
        getInventory();
    }, []);

    const getInventory = () => {
        Axios.get('http://localhost:4000/api/v1/allInventory')
            .then(res => {
                console.log(res.data);
                setInventory(res?.data || []);
            })
            .catch(error => console.log("Axios Error: " + error));
    };

    const createInventory = (data: any) => {
        setSubmited(true);
        const payLoad = {
            item_name: data.itemName,
            description: data.description,
            category: data.category,
            supplier_id: parseInt(data.supplier_id),
            qty: parseInt(data.qty),
            buy_price: parseFloat(data.buyPrice),
            sell_price: parseFloat(data.sellPrice),
        };

        Axios.post('http://localhost:4000/api/v1/creatInventory', payLoad)
            .then(() => {
                getInventory();
                setSubmited(false);
            })
            .catch(error => console.log("Axios Error: " + error));
    };

    const updateInventory = (data: any) => {
        setSubmited(true);
        const payLoad = {
            id: data.id,
            item_name: data.itemName,
            description: data.description,
            category: data.category,
            supplier_id: parseInt(data.supplier_id),
            qty: parseInt(data.qty),
            buy_price: parseFloat(data.buyPrice),
            sell_price: parseFloat(data.sellPrice),
        };
        console.log(payLoad);

        Axios.patch('http://localhost:4000/api/v1/updateInventory', payLoad)
            .then(() => {
                getInventory();
                setSubmited(false);
            })
            .catch(error => console.log("Axios Error: " + error));
    };

    const deleteInventory = (id: number) => {
        if (window.confirm("Are you sure you want to delete this Inventory?")) {
            Axios.delete('http://localhost:4000/api/v1/deleteInventory/' + id)
                .then(() => {
                    getInventory();
                    setSubmited(false);
                })
                .catch(error => console.log("Axios Error: " + error));
        }
    };

    return (
        <ManageForm
            columns={columns}
            rows={inventory}
            title='Manage Inventory'
            active={false}
            itemActive={true}
            modalTitle={'Item'}
            showActions={true}
            create={createInventory}
            update={updateInventory}
            delete={deleteInventory}
            submited={submited}
            setSubmited={setSubmited}
            emFieldActive={false}
            otherFieldActive={false}
        />
    );
}
