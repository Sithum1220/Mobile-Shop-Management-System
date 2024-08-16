import * as React from "react";
import {
    TextField,
    Button,
    Typography,
    Box,
    Grid,
    Paper,
    TableContainer,
    Table,
    TableHead,
    TableRow, TableCell, TableBody
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import Axios from "axios";

interface TableProps {
    columns: string[];
    rows: RowData[];
    showActions: boolean;
    onEdit: any;
    delete: any// Add this prop
}

interface RowData {
    id: number;

    [key: string]: string | number;
}

const columns = ['#', 'Item Code', 'Item Name', 'QTY', 'Total', 'Date'];
const rows = [
    {id: 1, item_code: 1, item_name: 'Iphon 11', qty: 2, total: 350000.00, date: '2024/08/10'},
    {id: 2, item_code: 1, item_name: 'Iphon 11', qty: 2, total: 350000.00, date: '2024/08/10'},
    {id: 3, item_code: 1, item_name: 'Iphon 11', qty: 2, total: 350000.00, date: '2024/08/10'},
    {id: 4, item_code: 1, item_name: 'Iphon 11', qty: 2, total: 350000.00, date: '2024/08/10'}
];

export function PerchesOrder() {
    const [itemCode, setItemCode] = React.useState<number>();
    const [itemName, setItemName] = React.useState<string>('');
    const [unitPrice, setUnitPrice] = React.useState<string>('');
    const [itemQty, setQty] = React.useState<string>('');

    const handleItemCode = (event: React.ChangeEvent<HTMLInputElement>) => {
        const code = event.target.value;
        setItemCode(Number(code));

        if (code) {
            Axios.get('http://localhost:4000/api/v1/getItemById/' + code)
                .then(res => {
                    setItemName(res.data.item_name);
                    setQty(res.data.qty);
                    setUnitPrice(res.data.sell_price);
                })
                .catch(error => console.log("Axios Error: " + error));
        } else {
            setItemName('');
            setQty('');
            setUnitPrice('');// Optionally clear the itemName if no valid code is entered
        }

    }

    return (
        <Box mb={4}>
            <Box textAlign="center" mb={4} mt={4}>
                <Typography variant="h4" component="h1" fontWeight="bold">Perches Order</Typography>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center" gap={2} mb={4}>
                <TextField
                    required
                    label="Item Code"
                    variant="outlined"
                    value={itemCode || ''}
                    onChange={handleItemCode}
                />
                <TextField required label="QTY"

                           variant="outlined"/>
                <TextField required label="Cash" variant="outlined"/>
            </Box>

            <Box display="flex" justifyContent="center" gap={4} mb={4}>
                <Paper elevation={3}
                       sx={{p: 3, borderRadius: 2, width: '20%', display: 'flex', flexDirection: 'column', gap: 4}}>
                    <Grid sx={{display: "flex", justifyContent: "start", alignItems: "center", gap: 2}}>
                        <Typography variant="h6" component="div" color="primary" fontWeight="bold">Item
                            Name:</Typography>
                        <Typography variant="h5" component="div">{itemName}</Typography>
                    </Grid>

                    <Grid sx={{display: "flex", justifyContent: "start", alignItems: "center", gap: 2}}>
                        <Typography variant="h6" component="div" color="primary" fontWeight="bold">Unit
                            Price:</Typography>
                        <Typography variant="h5" component="div">{unitPrice}</Typography>
                    </Grid>

                    <Grid sx={{display: "flex", justifyContent: "start", alignItems: "center", gap: 2}}>
                        <Typography variant="h6" component="div" color="primary" fontWeight="bold">QTY:</Typography>
                        <Typography variant="h5" component="div">{itemQty}</Typography>
                    </Grid>
                </Paper>

                <Paper elevation={3}
                       sx={{p: 3, borderRadius: 2, width: '20%', display: 'flex', flexDirection: 'column', gap: 4}}>
                    <Grid sx={{display: "flex", justifyContent: "start", alignItems: "center", gap: 2}}>
                        <Typography variant="h6" component="div" color="primary" fontWeight="bold">Total
                            Price:</Typography>
                        <Typography variant="h5" component="div">3500.00</Typography>
                    </Grid>

                    <Grid sx={{display: "flex", justifyContent: "start", alignItems: "center", gap: 2}}>
                        <Typography variant="h6" component="div" color="primary" fontWeight="bold">Balance:</Typography>
                        <Typography variant="h5" component="div">00.00</Typography>
                    </Grid>

                    <Box display="flex" justifyContent="flex-end" mt={2}>
                        <Button variant="contained">Add To Cart</Button>
                    </Box>
                </Paper>
            </Box>

            <Box textAlign="right" mb={4}>
                <Button variant="contained">Perches</Button>
            </Box>

            <Grid item xs={12} sx={{width: '100%', boxShadow: 3, border: 1, borderColor: 'grey.300'}}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {columns.map((column, index) => (
                                    <TableCell key={index} align="center">{column}</TableCell>
                                ))}
                                <TableCell align="center">Actions</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {rows.length > 0 ? (
                                rows.map((row: RowData) => (
                                    <TableRow key={row.id}>
                                        {Object.entries(row)
                                            .filter(([key, _]) => key !== '_id' && key !== '__v')
                                            .map(([key, value], index) => (
                                                <TableCell key={index} align="center">
                                                    {value}
                                                </TableCell>
                                            ))}
                                            <TableCell align="center">
                                                <Button onClick={() => {}}>
                                                    <DeleteIcon />
                                                </Button>
                                            </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={columns.length ? 1 : 0} align="center">
                                        No Data
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Box>
    );
}
