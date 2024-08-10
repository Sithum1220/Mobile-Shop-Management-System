import * as React from 'react';
import {
    Button,
    Backdrop,
    Fade,
    Modal,
    TextField,
    Box,
    Typography,
    MenuItem,
    Grid
} from "@mui/material";
import { useState } from "react";
import {TableComponent} from "../Table/Table";

const roles = [
    { value: 'Salesmen', label: 'Salesmen' },
    { value: 'Cleaner', label: 'Cleaner' },
    { value: 'Other', label: 'Other' }
];

export function ManageForm(props: any) {
    const [page, setPage] = React.useState(0);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [isActive, setActive] = useState<boolean>(false);
    const [isItemActive, setItemActive] = useState<boolean>(false);

    const [name, setName] = useState<string>('');
    const [street, setStreet] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [mobile, setMobile] = useState<string>('');
    const[nic, setNic] = useState<string>('');
    const [role, setRole] = useState<string>('');
    const [qty, setQty] = useState<string>('');
    const [buyPrice, setBuyPrice] = useState<number>(0.0);
    const [sellPrice, setSellPrice] = useState<number>(0.0);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        setPage(0); // Reset to first page on search
    };

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleBuyPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBuyPrice(parseFloat(e.target.value));
    };

    const handleSellPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSellPrice(parseFloat(e.target.value));
    };

    return (
        <Box mt={5}>
            <Grid container direction="column" alignItems="center" spacing={2}>
                <Grid item>
                    <Typography variant="h4" component="h1" fontWeight="bold">
                        {props.title}
                    </Typography>
                </Grid>
                <Grid item sx={{width: '30%' }}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={handleSearch}
                        sx={{ mt: 2}}
                    />
                </Grid>
                <Grid item container justifyContent="flex-end" marginBottom={2}>
                    <Button
                        variant="contained"
                        onClick={() => {
                            handleOpen();
                            setActive(props.active);
                            setItemActive(props.itemActive);
                        }}
                    >
                        Add
                    </Button>
                </Grid>

                    <TableComponent
                    rows={props.rows}
                    columns={props.columns}
                    showActions={props.showActions}
                    />

            </Grid>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: { timeout: 500 },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography
                            id="transition-modal-title"
                            sx={{ fontWeight: 'bold', textAlign: 'center' }}
                            variant="h6"
                            component="h2"
                        >
                            {props.modalTitle}
                        </Typography>

                        <Box component="form" sx={{ mt: 2 }} noValidate autoComplete="off">
                            <Grid container spacing={2} mb={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="outlined-required"
                                        label={props.txt1}
                                        defaultValue=""
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="outlined-required"
                                        label={props.txt2}
                                        defaultValue=""
                                        value={street}
                                        onChange={e => setStreet(e.target.value)}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} mb={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="outlined-required"
                                        label={props.txt3}
                                        defaultValue=""
                                        value={city}
                                        onChange={e => setCity(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="outlined-required"
                                        label={props.txt4}
                                        defaultValue=""
                                        value={mobile}
                                        onChange={e => setMobile(e.target.value)}
                                    />
                                </Grid>
                            </Grid>
                            {isActive && (
                                <Grid container spacing={2} mb={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="outlined-required"
                                            label="NIC"
                                            defaultValue=""
                                            value={nic}
                                            onChange={e => setNic(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            id="outlined-select-currency"
                                            select
                                            fullWidth
                                            label="Select Role"
                                            defaultValue=""
                                            helperText="Please select Role"
                                            value={role}
                                            onChange={e => setRole(e.target.value)}
                                        >
                                            {roles.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </Grid>
                                </Grid>
                            )}
                            {isItemActive && (
                                <>
                                    <Grid container spacing={2} mb={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="outlined-required"
                                                label="QTY"
                                                defaultValue=""
                                                value={qty}
                                                onChange={e => setCity(e.target.value)}

                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="outlined-required"
                                                label="Buying Price"
                                                defaultValue=""
                                                value={buyPrice}
                                                onChange={handleBuyPriceChange}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2} mb={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="outlined-required"
                                                label="Selling Price"
                                                defaultValue=""
                                                value={sellPrice}
                                                onChange={handleSellPriceChange}
                                            />
                                        </Grid>
                                    </Grid>
                                </>
                            )}
                            <Grid container justifyContent="flex-end" spacing={2} sx={{ mt: 3 }}>
                                <Grid item>
                                    <Button variant="contained" onClick={handleClose}>Close</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained">Save</Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </Box>
    );
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
