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
import {useEffect, useState} from "react";
import {TableComponent} from "../Table/Table";

const roles = [
    {value: 'Salesmen', label: 'Salesmen'},
    {value: 'Cleaner', label: 'Cleaner'},
    {value: 'Other', label: 'Other'}
];

interface RowData {
    id: number;

    [key: string]: string | number;
}

export function ManageForm(props: any) {
    const [page, setPage] = React.useState(0);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [isActive, setActive] = useState<boolean>(false);
    const [isOtherFieldActive, setOtherFieldActive] = useState<boolean>(false);
    const [isItemActive, setItemActive] = useState<boolean>(false);
    const [selectedRow, setSelectedRow] = useState<RowData | null>(null);


    const [name, setName] = useState<string>('');
    const [street, setStreet] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [mobile, setMobile] = useState<string>('');
    const [nic, setNic] = useState<string>('');
    const [role, setRole] = useState<string>('');
    const [qty, setQty] = useState<string>('');
    const [buyPrice, setBuyPrice] = useState<string>('');
    const [sellPrice, setSellPrice] = useState<string>('');

    const [itemName, setItemName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [supplierId, setsupplierId] = useState<string>('');

    const [isClosed, setIsClosed] = useState(false);
    const [edit, setEdit] = useState("Save");
    // const [title, setTitle] = useState('');


    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        setPage(0); // Reset to first page on search
    };

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleEdit = (row: RowData) => {
        setItemName(row.item_name as string);
        setDescription(row.description as string);
        setCategory(row.category as string);
        setsupplierId(row.supplier_id?.toString() || '');
        setQty(row.qty?.toString() || '');
        setBuyPrice(row.buy_price?.toString() || '');
        setSellPrice(row.sell_price?.toString() || '');
console.log(row.item_name);
        setName(row.name as string);
        setStreet(row.street as string);
        setCity(row.city as string);
        setMobile(row.mobile as string);
        setNic(row.nic as string);
        setRole(row.role as string);


        setSelectedRow(row);
        setActive(props.emFieldActive);
        setItemActive(props.itemActive);
        setOtherFieldActive(props.otherFieldActive);
        handleOpen();
        setEdit("Update")
        console.log(row.name)
    };

    useEffect(() => {
        if (!props.submited) {
            handleClose();
            setName('')
            setStreet('')
            setCity('')
            setNic('')
            setRole('')
            setMobile('')
            setItemName('')
            setDescription('')
            setCategory('')
            setsupplierId('')
            setBuyPrice('')
            setSellPrice('')
            setQty('')
            handleClose();
            props.setSubmited(false);
            setIsClosed(false)
        }
    }, [props.submited, isClosed])

    return (
        <Box mt={5}>
            <Grid container direction="column" alignItems="center" spacing={2}>
                <Grid item>
                    <Typography variant="h4" component="h1" fontWeight="bold">
                        {props.title}
                    </Typography>
                </Grid>
                <Grid item sx={{width: '30%'}}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={handleSearch}
                        sx={{mt: 2}}
                    />
                </Grid>
                <Grid item container justifyContent="flex-end" marginBottom={2}>
                    <Button
                        variant="contained"
                        onClick={() => {
                            handleOpen();
                            setActive(props.active);
                            setItemActive(props.itemActive);
                            setSelectedRow(null);
                            setEdit("Save")
                            setOtherFieldActive(props.otherFieldActive);
                        }}
                    >
                        Add
                    </Button>
                </Grid>

                <TableComponent
                    rows={props.rows}
                    columns={props.columns}
                    showActions={props.showActions}
                    onEdit={handleEdit}
                    delete={props.delete}// Pass the handleEdit function
                />
            </Grid>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{backdrop: Backdrop}}
                slotProps={{
                    backdrop: {timeout: 500},
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography
                            id="transition-modal-title"
                            sx={{fontWeight: 'bold', textAlign: 'center'}}
                            variant="h6"
                            component="h2"
                        >
                            {edit+" "+props.modalTitle}
                        </Typography>

                        <Box component="form" sx={{mt: 2}} noValidate autoComplete="off">
                            {isOtherFieldActive && (
                                <>
                                    <Grid container spacing={2} mb={2}>

                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="outlined-required"
                                                label={"Name"}
                                                value={name}
                                                onChange={e => setName(e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="outlined-required"
                                                label={"Street"}
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
                                                label={"City"}
                                                value={city}
                                                onChange={e => setCity(e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="outlined-required"
                                                label={"Mobile"}
                                                value={mobile}
                                                onChange={e => setMobile(e.target.value)}
                                            />
                                        </Grid>
                                    </Grid>
                                </>
                            )}

                            {isActive && (
                                <Grid container spacing={2} mb={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="outlined-required"
                                            label="NIC"
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
                                                label="Item Name"
                                                value={itemName}
                                                onChange={(e) => setItemName(e.target.value)}


                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="outlined-required"
                                                label="Description"
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={2} mb={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="outlined-required"
                                                label="Category"
                                                value={category}
                                                onChange={(e) => setCategory(e.target.value)}

                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="outlined-required"
                                                label="Spplier Id"
                                                value={supplierId}
                                                onChange={(e) => setsupplierId(e.target.value)}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2} mb={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="outlined-required"
                                                label="QTY"
                                                value={qty}
                                                onChange={e => setQty(e.target.value)}

                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="outlined-required"
                                                label="Buying Price"
                                                value={buyPrice}
                                                onChange={e => setBuyPrice(e.target.value)}
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
                                                value={sellPrice}
                                                onChange={e => setSellPrice(e.target.value)}
                                            />
                                        </Grid>
                                    </Grid>
                                </>
                            )}
                            <Grid container justifyContent="flex-end" spacing={2} sx={{mt: 3}}>
                                <Grid item>
                                    <Button variant="contained" onClick={() => {
                                        setIsClosed(true)
                                        handleClose();
                                        props.setSubmited(false);
                                    }}>Close</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" onClick={() => {
                                        if (selectedRow) {
                                            props.update({
                                                id: selectedRow.id,
                                                itemName: itemName,
                                                description: description,
                                                category: category,
                                                supplierId: supplierId,

                                                name: name,
                                                street: street,
                                                city: city,
                                                mobile: mobile,
                                                nic: nic,
                                                role: role,
                                                qty: qty,
                                                buyPrice: buyPrice,
                                                sellPrice: sellPrice,
                                            });
                                        } else {
                                            props.create({
                                                itemName: itemName,
                                                description: description,
                                                category: category,
                                                supplierId: supplierId,

                                                name: name,
                                                street: street,
                                                city: city,
                                                mobile: mobile,
                                                nic: nic,
                                                role: role,
                                                qty: qty,
                                                buyPrice: buyPrice,
                                                sellPrice: sellPrice,
                                            });
                                        }
                                    }}>{edit}</Button>
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
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: 1,
    boxShadow: 24,
    p: 4,
};
