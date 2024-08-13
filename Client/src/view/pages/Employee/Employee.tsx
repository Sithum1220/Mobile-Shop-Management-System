import * as React from 'react';
import {ManageForm} from "../../common/ManageForm/ManageForm";
import Axios from "axios";
import {useEffect, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

const rows = [
    {
        id: 1,
        name: 'Sithum Imesh',
        street: 'Duwagoda',
        city: 'Hikkaduwa',
        mobile: '+ 94 77 7524729',
        NIC: '200212702212',
        Role: 'Salesmen'
    },
    {
        id: 2,
        name: 'Sithum Imesh',
        street: 'Duwagoda',
        city: 'Hikkaduwa',
        mobile: '+ 94 77 7524729',
        NIC: '200212702212',
        Role: 'Salesmen'
    },
    {
        id: 3,
        name: 'Sithum Imesh',
        street: 'Duwagoda',
        city: 'Hikkaduwa',
        mobile: '+ 94 77 7524729',
        NIC: '200212702212',
        Role: 'Salesmen'
    },
    {
        id: 4,
        name: 'Sithum Imesh',
        street: 'Duwagoda',
        city: 'Hikkaduwa',
        mobile: '+ 94 77 7524729',
        NIC: '200212702212',
        Role: 'Salesmen'
    }
]

const columns = ['id', 'Name', 'Street', 'City', 'Mobile', 'NIC', 'Role'];

export function Employee() {

    const [employees, setEmployees] = useState([])
    const [submited, setSubmited] = useState(false)

    useEffect(() => {
        getEmployees();
    }, [])

    const getEmployees = () => {
        Axios.get('http://localhost:4000/api/v1/allEmployees')
            .then(res => {
                console.log(res.data)
                setEmployees(res?.data || []);
            })
            .catch(error => console.log("Axios Error: " + error))
    }

    const createEmployee = (data:any) => {
        setSubmited(true);
        const payLoad = {
            name: data.name,
            street: data.street,
            city: data.city,
            mobile: data.mobile,
            nic: data.nic,
            role: data.role,
        }
        console.log("Payload", payLoad)
        Axios.post('http://localhost:4000/api/v1/creatEmployee',payLoad)
            .then(() => {
               getEmployees()
                setSubmited(false)
            })
            .catch(error => console.log(
                "Axios Error: " + error))
    }

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
            rows={employees}
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
            createEmployee={createEmployee}
            submited={submited}
            setSubmited={setSubmited}
        />
    );
}
