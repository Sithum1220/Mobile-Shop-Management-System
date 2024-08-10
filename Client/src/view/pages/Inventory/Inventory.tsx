import * as React from 'react';
import { ManageForm } from "../../common/ManageForm/ManageForm";

const rows = [
    {
        id: 1,
        itemName:'Iphone 11',
        Supplier_Id:1,
        Description: 'Iphon 11 128Gb',
        Category: 'Iphone',

    },
    {
        id: 1,
        itemName:'Iphone 11',
        Supplier_Id:2,
        Description: 'Iphon 11 128Gb',
        Category: 'Iphone',

    },
    {
        id: 1,
        itemName:'Iphone 11',
        Supplier_Id:3,
        Description: 'Iphon 11 128Gb',
        Category: 'Iphone',

    },
    {
        id: 1,
        itemName:'Iphone 11',
        Supplier_Id:4,
        Description: 'Iphon 11 128Gb',
        Category: 'Iphone',

    }
]

const columns = ['id','Item Name',"Supplier Id", 'Description', 'Category'];

export function Inventory() {
    const handleEdit = (code: string) => {
        console.log("Edit hutta", code);
        // Implement edit functionality
    };

    const handleDelete = (code: string) => {
        console.log("Delete", code);
        // Implement delete functionality
    };

    return (
        <ManageForm
            columns={columns}
            rows={rows}
            onEdit={handleEdit}
            onDelete={handleDelete}
            title='Manage Inventory'
            active={false}
            itemActive={true}
            modalTitle={'Add New Item'}
            txt1={'Item Name'}
            txt2={'Description'}
            txt3={'Category'}
            txt4={'Supplier Id'}
            showActions={true}
        />
    );
}
