import * as React from 'react';
import { ManageForm } from "../../common/ManageForm/ManageForm";


const rows = [
    {
        id: 1,
        name:'Sithum Imesh',
        street: 'Duwagoda',
        city: 'Hikkaduwa',
        mobile: '+ 94 77 7524729',
        NIC: '200212702212',
        Role: 'Salesmen'
    },
    {
        id: 2,
        name:'Sithum Imesh',
        street: 'Duwagoda',
        city: 'Hikkaduwa',
        mobile: '+ 94 77 7524729',
        NIC: '200212702212',
        Role: 'Salesmen'
    },
    {
        id: 3,
        name:'Sithum Imesh',
        street: 'Duwagoda',
        city: 'Hikkaduwa',
        mobile: '+ 94 77 7524729',
        NIC: '200212702212',
        Role: 'Salesmen'
    },
    {
        id: 4,
        name:'Sithum Imesh',
        street: 'Duwagoda',
        city: 'Hikkaduwa',
        mobile: '+ 94 77 7524729',
        NIC: '200212702212',
        Role: 'Salesmen'
    }
]

const columns = ['id','Name', 'Street', 'City', 'Mobile', 'NIC', 'Role'];

export function Employee() {
    const handleEdit = (code: string) => {
        console.log("Edit", code);
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
            title='Manage Employee'
            active={true}
            itemActive={false}
            modalTitle={'Add New Employee'}
            txt1={'Name'}
            txt2={'Street'}
            txt3={'City'}
            txt4={'Mobile Number'}
            showActions={true}
        />
    );
}
