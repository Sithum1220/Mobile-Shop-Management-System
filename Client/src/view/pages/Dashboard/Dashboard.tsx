import React from "react";
import {DetailsCard} from "../../common/DetailsCard/DetailsCard";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {TableComponent} from "../../common/Table/Table";

const rows = [
    { id: 1, item_code: 1, item_name: 'Iphon 11', qty: 2, total: 350000.00, date: '2024/08/10' },
    { id: 2, item_code: 1, item_name: 'Iphon 11', qty: 2, total: 350000.00, date: '2024/08/10' },
    { id: 3, item_code: 1, item_name: 'Iphon 11', qty: 2, total: 350000.00, date: '2024/08/10' },
    { id: 4, item_code: 1, item_name: 'Iphon 11', qty: 2, total: 350000.00, date: '2024/08/10' }
];

const columns = ['Item Code', 'Item Name', 'QTY', 'Total', 'Date'];

export function Dashboard() {

    return (
        <div>
            <div className="grid grid-rows-1 lg:grid-cols-3 grid-cols-1 flex-wrap w-full gap-5 lg:w-auto bg-white mt-[2%]">
                <DetailsCard title={"Total Employees"} data={'23'}/>
                <DetailsCard title={"Total Suppliers"} data={'56'}/>
                <DetailsCard title={"Today Orders"} data={'87'}/>
            </div>

            <div className="mt-16">
                <h1 className="text-5xl">Recent Orders</h1>

                <div className="mt-10 shadow-2xl border-2 border-gray-200 p-4 rounded-xl">
                    <TableComponent columns={columns} rows={rows} showActions={false}/>
                </div>
            </div>

        </div>
    );
}