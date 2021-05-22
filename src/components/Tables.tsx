import React, { useEffect } from 'react'
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }),
)(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

interface TableData {
    headers: any[];
    data: any[],
    display: []

}

const Tables: React.FC<TableData> = ({ headers, data, display }) => {

    useEffect(() => {
        console.log(data)
    }, [])

    const classes = useStyles();
    let arr: any[] = []

    return (
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            {headers.map((h: string, index: number) => (
                                <StyledTableCell key={index}>{h}</StyledTableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row: any, rindex: number) => (
                            <StyledTableRow key={rindex}>
                                {
                                    display.map((dis: any, dindex: number) => (
                                        <StyledTableCell component="th" scope="row" key={dindex}>{row[dis]}</StyledTableCell>
                                    ))
                                }
                            </StyledTableRow>

                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Tables
