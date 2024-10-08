import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import * as React from "react";

interface TableProps {
    columns: string[];
    rows: RowData[];
    showActions: boolean;
    onEdit: any;
    delete:any// Add this prop
}

interface RowData {
    id: number;
    [key: string]: string | number;
}

export function TableComponent(props: TableProps) {
    const { columns = [], rows = [], showActions, onEdit } = props;

    return (
        <Grid item xs={12} sx={{ width: '100%', boxShadow: 3, border: 1, borderColor: 'grey.300' }}>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {columns.map((column, index) => (
                                <TableCell key={index} align="center">{column}</TableCell>
                            ))}
                            {showActions && (<TableCell align="center">Actions</TableCell>)}
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
                                    {showActions && (
                                        <TableCell align="center">
                                            <Button onClick={() => onEdit(row)}>
                                                <EditIcon />
                                            </Button>
                                            <Button onClick={() => { props.delete(row.id) }}>
                                                <DeleteIcon />
                                            </Button>
                                        </TableCell>
                                    )}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length + (showActions ? 1 : 0)} align="center">
                                    No Data
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
}
