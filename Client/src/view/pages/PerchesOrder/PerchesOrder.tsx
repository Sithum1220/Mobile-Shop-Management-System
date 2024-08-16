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
    TableRow,
    TableCell,
    TableBody
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Axios from "axios";

interface RowData {
    id: number;
    item_code: number;
    item_name: string;
    qty: number;
    total: number;
    date: string;
}

const columns = ['#', 'Item Code', 'Item Name', 'QTY', 'Total', 'Date', 'Actions'];

export function PerchesOrder() {
    const [itemCode, setItemCode] = React.useState<number>();
    const [itemName, setItemName] = React.useState<string>('');
    const [unitPrice, setUnitPrice] = React.useState<number>(0);
    const [itemQty, setQty] = React.useState<number>(0);
    const [lblItemQty, setLblItemQty] = React.useState<number>(0);
    const [cart, setCart] = React.useState<RowData[]>([]);

    const handleItemCode = (event: React.ChangeEvent<HTMLInputElement>) => {
        const code = event.target.value;
        setItemCode(Number(code));

        if (code) {
            Axios.get('http://localhost:4000/api/v1/getItemById/' + code)
                .then(res => {
                    setItemName(res.data.item_name);
                    setLblItemQty(res.data.qty);
                    setUnitPrice(res.data.sell_price);
                })
                .catch(error => console.log("Axios Error: " + error));
        } else {
            setItemName('');
            setLblItemQty(0);
            setUnitPrice(0);
        }
    };

    const handleAddToCart = () => {
        if (itemCode && itemName && itemQty > 0) {
            const existingItemIndex = cart.findIndex(item => item.item_code === itemCode);

            if (existingItemIndex !== -1) {
                const updatedCart = cart.map((item, index) => {
                    if (index === existingItemIndex) {
                        const updatedQty = item.qty + itemQty;
                        return {
                            ...item,
                            qty: updatedQty,
                            total: updatedQty * unitPrice
                        };
                    }
                    return item;
                });

                setCart(updatedCart);
            } else {
                const newItem: RowData = {
                    id: cart.length + 1,
                    item_code: itemCode,
                    item_name: itemName,
                    qty: itemQty,
                    total: unitPrice * itemQty,
                    date: new Date().toISOString().split('T')[0]
                };
                setCart([...cart, newItem]);
            }

            setItemCode(0);
            setItemName('');
            setQty(0);
            setUnitPrice(0);
            setLblItemQty(0)
        }
    };



    const handleDelete = (id: number) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
    };

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
                <TextField
                    required
                    label="QTY"
                    variant="outlined"
                    value={itemQty || ''}
                    onChange={(e) => setQty(Number(e.target.value))}
                />
                <TextField required label="Cash" variant="outlined" />
            </Box>

            <Box display="flex" justifyContent="center" gap={4} mb={4}>
                <Paper elevation={3}
                       sx={{ p: 3, borderRadius: 2, width: '20%', display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <Grid sx={{ display: "flex", justifyContent: "start", alignItems: "center", gap: 2 }}>
                        <Typography variant="h6" component="div" color="primary" fontWeight="bold">Item Name:</Typography>
                        <Typography variant="h5" component="div">{itemName}</Typography>
                    </Grid>

                    <Grid sx={{ display: "flex", justifyContent: "start", alignItems: "center", gap: 2 }}>
                        <Typography variant="h6" component="div" color="primary" fontWeight="bold">Unit Price:</Typography>
                        <Typography variant="h5" component="div">{unitPrice}</Typography>
                    </Grid>

                    <Grid sx={{ display: "flex", justifyContent: "start", alignItems: "center", gap: 2 }}>
                        <Typography variant="h6" component="div" color="primary" fontWeight="bold">QTY:</Typography>
                        <Typography variant="h5" component="div">{lblItemQty}</Typography>
                    </Grid>
                </Paper>

                <Paper elevation={3}
                       sx={{ p: 3, borderRadius: 2, width: '20%', display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <Grid sx={{ display: "flex", justifyContent: "start", alignItems: "center", gap: 2 }}>
                        <Typography variant="h6" component="div" color="primary" fontWeight="bold">Total Price:</Typography>
                        <Typography variant="h5" component="div">{unitPrice * itemQty}</Typography>
                    </Grid>

                    <Grid sx={{ display: "flex", justifyContent: "start", alignItems: "center", gap: 2 }}>
                        <Typography variant="h6" component="div" color="primary" fontWeight="bold">Balance:</Typography>
                        <Typography variant="h5" component="div">00.00</Typography>
                    </Grid>

                    <Box display="flex" justifyContent="flex-end" mt={2}>
                        <Button variant="contained" onClick={handleAddToCart}>Add To Cart</Button>
                    </Box>
                </Paper>
            </Box>

            <Box textAlign="right" mb={4}>
                <Button variant="contained">Perches</Button>
            </Box>

            <Grid item xs={12} sx={{ width: '100%', boxShadow: 3, border: 1, borderColor: 'grey.300' }}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {columns.map((column, index) => (
                                    <TableCell key={index} align="center">{column}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {cart.length > 0 ? (
                                cart.map((row: RowData) => (
                                    <TableRow key={row.id}>
                                        <TableCell align="center">{row.id}</TableCell>
                                        <TableCell align="center">{row.item_code}</TableCell>
                                        <TableCell align="center">{row.item_name}</TableCell>
                                        <TableCell align="center">{row.qty}</TableCell>
                                        <TableCell align="center">{row.total}</TableCell>
                                        <TableCell align="center">{row.date}</TableCell>
                                        <TableCell align="center">
                                            <Button onClick={() => handleDelete(row.id)}>
                                                <DeleteIcon />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={columns.length} align="center">
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
