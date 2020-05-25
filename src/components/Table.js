import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';

import { colors, icons } from '../theme'

const useStyles = makeStyles({
    table: {
        minWidth: 200,
    },
})

export default function FeatureTable({ data = [] }) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Control</TableCell>
                        <TableCell align="right">Dev</TableCell>
                        <TableCell align="right">Dev Out Tot</TableCell>
                        <TableCell align="right">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="right">{row.dev}</TableCell>
                            <TableCell align="right">{row.totDev}</TableCell>
                            <TableCell align="right">
                                <Icon
                                    style={{color: colors[row.status]}}
                                >
                                    {icons[row.status]}
                                </Icon>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}