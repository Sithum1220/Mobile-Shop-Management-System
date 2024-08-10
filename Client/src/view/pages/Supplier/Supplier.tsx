import * as React from 'react';
import { ManageForm } from "../../common/ManageForm/ManageForm";

const rows = [
    {
        id: 1,
        name:'Sithum Imesh',
        street: 'Duwagoda',
        city: 'Hikkaduwa',
        mobile: '+ 94 77 7524729',

    },
    {
        id: 2,
        name:'Sithum Imesh',
        street: 'Duwagoda',
        city: 'Hikkaduwa',
        mobile: '+ 94 77 7524729',

    },
    {
        id: 3,
        name:'Sithum Imesh',
        street: 'Duwagoda',
        city: 'Hikkaduwa',
        mobile: '+ 94 77 7524729',

    },
    {
        id: 4,
        name:'Sithum Imesh',
        street: 'Duwagoda',
        city: 'Hikkaduwa',
        mobile: '+ 94 77 7524729',
    }
]

const columns = ['id','Name', 'Street', 'City', 'Mobile'];

export function Supplier() {
    const handleEdit = (code: string) => {
        console.log("Edit", code);
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
            title="Manage Supplier"
            active={false}
            itemActive={false}
            modalTitle={'Add New Supplier'}
            txt1={'Name'}
            txt2={'Street'}
            txt3={'City'}
            txt4={'Mobile Number'}
            showActions={true}
        />
    );
}
