import * as React from 'react';
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";

export function TableHeadComponent({ columns, request, onHandleSorrting }) {
    return (
        <>
            <TableHead>
                <TableRow>
                    {columns.map((column) => (
                        <TableCell
                            key={column.id}
                            align={column.numeric ? 'right' : 'left'}
                            padding={column.disablePadding ? 'none' : 'normal'}
                            sortDirection={request.sortBy === column.id ? request.sortOrder : false}
                            style={{ minWidth: column.minWidth, fontSize: "16px" }}
                        >
                            {
                                column.sortable
                                    ?
                                    <TableSortLabel
                                        active={request.sortBy === column.id}
                                        direction={request.sortOrder ? request.sortOrder : "DESC"}
                                        onClick={
                                            () => {
                                                onHandleSorrting(column.id)
                                            }
                                        }
                                    >
                                        {column.label}

                                    </TableSortLabel>
                                    :
                                    <label>{column.label}</label>
                            }
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
        </>
    )
    
}