import React from 'react'

import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';

import { StyledTableCell, useStyles } from './TableStyles';
import { TableRow } from '@material-ui/core';
import { CustomStyledRow } from './CustomStyledRow';


export const TableComponent = ( { columns, data } ) => {
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow> 
                        {
                        
                            columns.map( column => (
                                <StyledTableCell 
                                    key= { column }
                                    align="center"
                                    > { column }
                                </StyledTableCell>
                            ))
                        }
                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        data.map( row => (
                            <CustomStyledRow 
                                key = {row.name }
                                item = { row }>
                            </CustomStyledRow>
                        ))}
                </TableBody>

            </Table>
        </TableContainer>
    )
}
