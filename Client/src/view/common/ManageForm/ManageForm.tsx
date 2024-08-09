import * as React from 'react';
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TablePagination from "@mui/material/TablePagination";

interface Column {
    id: 'name' | 'code' | 'population' | 'size' | 'density' | 'actions';
    label: string;
    minWidth?: number;
    align?: 'right' | 'left' | 'center';
    format?: (value: number) => string;
}

interface Data {
    name: string;
    code: string;
    population: number;
    size: number;
    density: number;
}

interface ManageFormProps {
    columns: Column[];
    rows: Data[];
    title: string;
    onEdit: (code: string) => void;
    onDelete: (code: string) => void;
}

export function ManageForm(props: ManageFormProps) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [searchQuery, setSearchQuery] = React.useState('');

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        setPage(0); // Reset to first page on search
    };

    // Filter rows based on search query
    const filteredRows = props.rows.filter(row =>
        Object.values(row).some(value =>
            value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    return (
        <div className="mb-4">
            <div className="mt-10 flex justify-center w-full items-center flex-col gap-6">
                <h1 className="font-bold text-2xl mb-2">{props.title}</h1>
                <div className="mb-3 xl:w-96">
                    <input
                        type="search"
                        className="relative m-0 block w-full min-w-0 flex-auto rounded-2xl border border-gray-200
                        bg-transparent bg-clip-padding px-3 py-[0.25rem] font-normal leading-[1.6]
                        outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary
                        focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none
                        dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-gray-400
                        text-black dark:focus:border-primary"
                        id="exampleSearch"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                </div>

                <div className="w-full">
                    <div className="flex justify-end gap-8 mb-5">
                        <Button variant="contained">Add</Button>
                    </div>
                    <div className="w-full shadow-2xl border-2 border-gray-200">
                        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                            <TableContainer sx={{ maxHeight: 440 }}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            {props.columns.map((column) => (
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
                                        {filteredRows
                                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            .map((row) => (
                                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                    {props.columns.slice(0, -1).map((column) => {
                                                        const value = row[column.id as keyof Data]; // Type assertion here
                                                        return (
                                                            <TableCell key={column.id} align={column.align}>
                                                                {column.format && typeof value === 'number'
                                                                    ? column.format(value)
                                                                    : value}
                                                            </TableCell>
                                                        );
                                                    })}
                                                    <TableCell align="center">
                                                        <Button onClick={() => props.onEdit(row.code)} color="primary">
                                                            <EditIcon />
                                                        </Button>
                                                        <Button onClick={() => props.onDelete(row.code)} color="error">
                                                            <DeleteIcon />
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[10, 25, 100]}
                                component="div"
                                count={filteredRows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Paper>
                    </div>
                </div>
            </div>
        </div>
    );
}
