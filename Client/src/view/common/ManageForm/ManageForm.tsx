import * as React from 'react';
import {
    Button,
    Paper,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
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
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

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

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        setPage(0); // Reset to first page on search
    };

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                <Grid item xs={12} sx={{ width: '100%', boxShadow: 3, border: 1, borderColor: 'grey.300' }}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    {props.columns.map((column: any, index: number) => (
                                        <TableCell key={index} align="center">{column}</TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {props.rows.length > 0 ? (
                                    props.rows.map((row: any) => (
                                        <TableRow key={row.id}>
                                            {Object.entries(row).map(([key, value]: [string, any], index: number) => (
                                                key !== 'id' && (
                                                    <TableCell key={index} align="center">
                                                        {value}
                                                    </TableCell>
                                                )
                                            ))}
                                            <TableCell align="center">
                                                <Button onClick={() => { }}>
                                                    <EditIcon />
                                                </Button>
                                                <Button onClick={() => { }}>
                                                    <DeleteIcon />
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={props.columns.length} align="center">
                                            No Data
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
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
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="outlined-required"
                                        label={props.txt2}
                                        defaultValue=""
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
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="outlined-required"
                                        label={props.txt4}
                                        defaultValue=""
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
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="outlined-required"
                                                label="Buying Price"
                                                defaultValue=""
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
