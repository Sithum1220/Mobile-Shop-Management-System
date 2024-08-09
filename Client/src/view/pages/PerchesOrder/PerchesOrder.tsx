import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import * as React from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

interface Column {
    id: 'name' | 'code' | 'population' | 'size' | 'density' | 'actions';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
        id: 'population',
        label: 'Population',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'Size\u00a0(km\u00b2)',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'density',
        label: 'Density',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toFixed(2),
    },
    {
        id: 'actions',
        label: 'Actions',
        minWidth: 100,
        align: 'right',
    },
];

interface Data {
    name: string;
    code: string;
    population: number;
    size: number;
    density: number;
}

function createData(
    name: string,
    code: string,
    population: number,
    size: number,
): Data {
    const density = population / size;
    return { name, code, population, size, density };
}

export function PerchesOrder() {
    const [rows, setRows] = React.useState([
        createData('India', 'IN', 1324171354, 3287263),
        createData('China', 'CN', 1403500365, 9596961),
        createData('Italy', 'IT', 60483973, 301340),
        createData('United States', 'US', 327167434, 9833520),
        createData('Canada', 'CA', 37602103, 9984670),
        createData('Australia', 'AU', 25475400, 7692024),
        createData('Germany', 'DE', 83019200, 357578),
        createData('Ireland', 'IE', 4857000, 70273),
        createData('Mexico', 'MX', 126577691, 1972550),
        createData('Japan', 'JP', 126317000, 377973),
        createData('France', 'FR', 67022000, 640679),
        createData('United Kingdom', 'GB', 67545757, 242495),
        createData('Russia', 'RU', 146793744, 17098246),
        createData('Nigeria', 'NG', 200962417, 923768),
        createData('Brazil', 'BR', 210147125, 8515767),
    ]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleDelete = (index: number) => {
        const newRows = [...rows];
        newRows.splice(index, 1);
        setRows(newRows);
    };

    return (
        <div className="mb-4">
            <div className="flex justify-center mt-10">
                <h1 className="font-bold text-4xl mb-2">Perches Order</h1>
            </div>
            <div className="mt-10 flex w-full justify-center items-center flex-row gap-10 ">
                <div className="flex flex-row gap-6">
                    <TextField
                        required
                        id="outlined-required"
                        label="Item Code"
                        defaultValue=""
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="QTY"
                        defaultValue=""
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Cash"
                        defaultValue=""
                    />
                </div>
            </div>

            <div className="flex flex-row gap-6 justify-center mt-10">
                <div className="flex flex-col items-start gap-5 border-2 border-gray-200 rounded-xl p-8 shadow-2xl">
                    <div className="flex flex-row gap-3 items-center">
                        <h1 className="text-3xl font-bold text-blue-600">Item Name: </h1>
                        <h1 className="text-2xl font-semibold">Iphone 11</h1>
                    </div>
                    <div className="flex flex-row gap-3 items-center">
                        <h1 className="text-3xl font-bold text-blue-600">Unit Price: </h1>
                        <h1 className="text-2xl font-semibold">00.00</h1>
                    </div>
                    <div className="flex flex-row gap-3 items-center">
                        <h1 className="text-3xl font-bold text-blue-600">QTY: </h1>
                        <h1 className="text-2xl font-semibold">100</h1>
                    </div>
                </div>

                <div className="flex flex-col  gap-5 border-2 border-gray-200 rounded-xl p-8 shadow-2xl">
                    <div className="flex flex-row gap-3 items-center">
                        <h1 className="text-3xl font-bold text-blue-600">Total Price: </h1>
                        <h1 className="text-2xl font-semibold">3500.00</h1>
                    </div>
                    <div className="flex flex-row gap-3 items-center">
                        <h1 className="text-3xl font-bold text-blue-600">Balance: </h1>
                        <h1 className="text-2xl font-semibold">00.00</h1>
                    </div>
                    <div className="flex justify-end items-end">
                        <Button variant="contained">Add To Cart</Button>
                    </div>
                </div>
            </div>

            <div>
                <div className="flex justify-end mt-10">
                    <Button variant="contained">Perches</Button>
                </div>

                <div className="mt-10 border-2 border-gray-200 rounded-xl p-8 shadow-2xl mb-6">
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column) => (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{ minWidth: column.minWidth }}
                                            >
                                                {column.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row, rowIndex) => (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                {columns.map((column) => {
                                                    if (column.id === 'actions') {
                                                        return (
                                                            <TableCell key={column.id} align={column.align}>
                                                                <IconButton aria-label="delete" onClick={() => handleDelete(rowIndex)}>
                                                                    <DeleteIcon />
                                                                </IconButton>
                                                            </TableCell>
                                                        );
                                                    }
                                                    const value = row[column.id];
                                                    return (
                                                        <TableCell key={column.id} align={column.align}>
                                                            {column.format && typeof value === 'number' ? column.format(value) : value}
                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                </div>
            </div>
        </div>
    );
}
