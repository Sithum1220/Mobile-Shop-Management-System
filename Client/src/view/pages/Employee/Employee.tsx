import * as React from 'react';
import {ManageForm} from "../../common/ManageForm/ManageForm";
import Axios from "axios";
import {useEffect, useState} from "react";
import {isSet} from "node:util/types";

const columns = ['id', 'Name', 'Street', 'City', 'Mobile', 'NIC', 'Role'];

export function Employee() {

    const [employees, setEmployees] = useState([])
    const [submited, setSubmited] = useState(false)

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

    const deleteEmployee = (id: number) => {
        if (window.confirm("Are you sure you want to delete this Employee?")) {
            Axios.delete('http://localhost:4000/api/v1/deleteEmployee/' + id)
                .then(() => {
                    getEmployees()
                    setSubmited(false)
                })
                .catch(error => console.log(
                    "Axios Error: " + error))
        }

    }

    return (
        <ManageForm
            columns={columns}
            rows={employees}
            title='Manage Employee'
            active={true}
            itemActive={false}
            modalTitle={'Employee'}
            showActions={true}
            create={createEmployee}
            update={updateEmployee}
            delete={deleteEmployee}
            submited={submited}
            setSubmited={setSubmited}
            otherFieldActive={true}
            emFieldActive={true}
        />
    );
}
