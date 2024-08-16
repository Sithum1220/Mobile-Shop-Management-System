import * as React from 'react';
import { ManageForm } from "../../common/ManageForm/ManageForm";
import {useEffect, useState} from "react";
import Axios from "axios";

const columns = ['id','Name', 'Street', 'City', 'Mobile'];

export function Supplier() {
    const [suppliers, setSupplier] = useState([])
    const [submited, setSubmited] = useState(false)


    useEffect(() => {
        getSupplier();
    }, [])

    const getSupplier = () => {
        Axios.get('http://localhost:4000/api/v1/allSupplier')
            .then(res => {
                console.log(res.data)
                setSupplier(res?.data || []);
            })
            .catch(error => console.log("Axios Error: " + error))
    }

    const createSupplier = (data: any) => {
        setSubmited(true);
        const payLoad = {
            name: data.name,
            street: data.street,
            city: data.city,
            mobile: data.mobile,
        }
        Axios.post('http://localhost:4000/api/v1/creatSupplier', payLoad)
            .then(() => {
                getSupplier()
                setSubmited(false)
            })
            .catch(error => console.log(
                "Axios Error: " + error))
    }

    const updateSupplier = (data: any) => {
        setSubmited(true);
        const payLoad = {
            id: data.id,
            name: data.name,
            street: data.street,
            city: data.city,
            mobile: data.mobile,
        }
        Axios.patch('http://localhost:4000/api/v1/updateSupplier', payLoad)
            .then(() => {
                getSupplier()
                setSubmited(false)
            })
            .catch(error => console.log(
                "Axios Error: " + error))
    }

    const deleteSupplier = (id: number) => {
        if (window.confirm("Are you sure you want to delete this Supplier?")) {
            Axios.delete('http://localhost:4000/api/v1/deleteSupplier/' + id)
                .then(() => {
                    getSupplier();
                    setSubmited(false)
                })
                .catch(error => console.log(
                    "Axios Error: " + error))
        }

    }

    return (
        <ManageForm
            columns={columns}
            rows={suppliers}
            title="Manae Supplier"
            active={false}
            itemActive={false}
            otherFieldActive={true}
            modalTitle={'Supplier'}
            showActions={true}
            create={createSupplier}
            update={updateSupplier}
            delete={deleteSupplier}
            submited={submited}
            setSubmited={setSubmited}
            emFieldActive={false}
        />
    );
}
