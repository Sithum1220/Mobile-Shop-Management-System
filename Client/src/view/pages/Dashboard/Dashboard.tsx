import React, {useEffect, useLayoutEffect} from "react";
import { DetailsCard } from "../../common/DetailsCard/DetailsCard";
import { Box, Typography, Paper, Grid } from "@mui/material";
import { TableComponent } from "../../common/Table/Table";

const rows = [
    { id: 1, item_code: 1, item_name: 'Iphone 11', qty: 2, total: 350000.00, date: '2024/08/10' },
    { id: 2, item_code: 1, item_name: 'Iphone 11', qty: 2, total: 350000.00, date: '2024/08/10' },
    { id: 3, item_code: 1, item_name: 'Iphone 11', qty: 2, total: 350000.00, date: '2024/08/10' },
    { id: 4, item_code: 1, item_name: 'Iphone 11', qty: 2, total: 350000.00, date: '2024/08/10' }
];

const columns = ['Item Code', 'Item Name', 'QTY', 'Total', 'Date'];

export function Dashboard() {

    // useEffect(() => {
    //     console.log("Dashboard");
    // },[])
    return (
        <Box sx={{ p: 3, mt:3 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <DetailsCard title="Total Employees" data="23" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <DetailsCard title="Total Suppliers" data="56" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <DetailsCard title="Today Orders" data="87" />
                </Grid>
            </Grid>

            <Box sx={{ mt: 8 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Recent Orders
                </Typography>

                <Paper sx={{ mt: 6, boxShadow: 3 }}>
                    <TableComponent columns={columns} rows={rows} showActions={false} />
                </Paper>
            </Box>
        </Box>
    );
}
