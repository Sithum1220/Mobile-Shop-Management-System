import * as React from 'react';
import {ManageForm} from "../../common/ManageForm/ManageForm";
import Axios from "axios";
import {useEffect, useState} from "react";
import {isSet} from "node:util/types";

const columns = ['id', 'Name', 'Street', 'City', 'Mobile', 'NIC', 'Role'];

export function Employee() {

    const [employees, setEmployees] = useState([])
    const [submited, setSubmited] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [selectedEmployee, setSelectedEmployee] = useState({})

    useEffect(() => {
        getEmployees();
    }, [])


    //api integration
    const getEmployees = () => {
        Axios.get('http://localhost:4000/api/v1/allEmployees')
            .then(res => {
                console.log(res.data)
                setEmployees(res?.data || []);
            })
            .catch(error => console.log("Axios Error: " + error))
    }

    const createEmployee = (data: any) => {
        setSubmited(true);
        const payLoad = {
            name: data.name,
            street: data.street,
            city: data.city,
            mobile: data.mobile,
            nic: data.nic,
            role: data.role,
        }
        Axios.post('http://localhost:4000/api/v1/creatEmployee', payLoad)
            .then(() => {
                getEmployees()
                setSubmited(false)
            })
            .catch(error => console.log(
                "Axios Error: " + error))
    }

    const updateEmployee = (data: any) => {
        setSubmited(true);
        const payLoad = {
            id: data.id,
            name: data.name,
            street: data.street,
            city: data.city,
            mobile: data.mobile,
            nic: data.nic,
            role: data.role,
        }
        Axios.patch('http://localhost:4000/api/v1/updateEmployee', payLoad)
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
            create={createEmployee}
            update={updateEmployee}
            submited={submited}
            setSubmited={setSubmited}
        />
    );
}
