import * as React from "react";
import { TextField, Button, Typography, Box, Grid, Paper } from "@mui/material";
import { TableComponent } from "../../common/Table/Table";

const rows = [
    { id: 1, item_code: 1, item_name: 'Iphon 11', qty: 2, total: 350000.00, date: '2024/08/10' },
    { id: 2, item_code: 1, item_name: 'Iphon 11', qty: 2, total: 350000.00, date: '2024/08/10' },
    { id: 3, item_code: 1, item_name: 'Iphon 11', qty: 2, total: 350000.00, date: '2024/08/10' },
    { id: 4, item_code: 1, item_name: 'Iphon 11', qty: 2, total: 350000.00, date: '2024/08/10' }
];

const columns = ['#','Item Code', 'Item Name', 'QTY', 'Total', 'Date'];

export function PerchesOrder() {

    return (
        <Box mb={4}>
            <Box textAlign="center" mb={4} mt={4}>
                <Typography variant="h4" component="h1" fontWeight="bold">Perches Order</Typography>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center" gap={2} mb={4}>
                <TextField required label="Item Code" variant="outlined" />
                <TextField required label="QTY" variant="outlined" />
                <TextField required label="Cash" variant="outlined" />
            </Box>

            <Box display="flex" justifyContent="center"  gap={4} mb={4}>
                <Paper elevation={3} sx={{ p: 3, borderRadius: 2, width: '20%',display: 'flex', flexDirection: 'column',gap:4}}>
                    <Grid sx={{display: "flex", justifyContent: "start", alignItems: "center", gap: 2}}>
                    <Typography variant="h6" component="div" color="primary" fontWeight="bold">Item Name:</Typography>
                    <Typography variant="h5" component="div">Iphone 11</Typography>
                    </Grid>

                    <Grid sx={{display: "flex", justifyContent: "start", alignItems: "center", gap: 2}}>
                    <Typography variant="h6" component="div" color="primary" fontWeight="bold">Unit Price:</Typography>
                    <Typography variant="h5" component="div">00.00</Typography>
                    </Grid>

                    <Grid sx={{display: "flex", justifyContent: "start", alignItems: "center", gap: 2}}>
                    <Typography variant="h6" component="div" color="primary" fontWeight="bold">QTY:</Typography>
                    <Typography variant="h5" component="div">100</Typography>
                    </Grid>
                </Paper>

                <Paper elevation={3} sx={{  p: 3, borderRadius: 2, width: '20%',display: 'flex', flexDirection: 'column',gap:4}}>
                    <Grid sx={{display: "flex", justifyContent: "start", alignItems: "center", gap: 2}}>
                    <Typography variant="h6" component="div" color="primary" fontWeight="bold">Total Price:</Typography>
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

            <TableComponent columns={columns} rows={rows} showActions={true} />
        </Box>
    );
}
