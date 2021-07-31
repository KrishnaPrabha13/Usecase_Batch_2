import React from 'react'
import {Table,TableCell,TableHead,TableRow} from'@material-ui/core';


function TableDetails(props) {
    return (
        <Table style={{width:"100%",broder:'2px solid #CCC'}} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell className="ETableCellText"><strong>Loan Amount</strong></TableCell>
                    <TableCell className="ETableCellVal"><strong>Rs </strong>{props.pAmount}</TableCell>
                </TableRow>

                <TableRow>
                    <TableCell className="ETableCellText"><strong>Interest %</strong></TableCell>
                    <TableCell className="ETableCellVal">{props.interest}<strong>%</strong></TableCell>
                </TableRow>

                <TableRow>
                    <TableCell className="ETableCellText"><strong>Tenure (Month)</strong></TableCell>
                    <TableCell  className="ETableCellVal">{props.duration}</TableCell>
                </TableRow>

                <TableRow>
                    <TableCell className="ETableCellText"><strong>Emi (Month)</strong></TableCell>
                    <TableCell  className="ETableCellVal"><strong>Rs </strong>{props.emi}</TableCell>
                </TableRow>

                <TableRow>
                    <TableCell className="ETableCellText"><strong>Total Interest</strong></TableCell>
                    <TableCell className="ETableCellVal"><strong>Rs </strong>{props.TotalAmountOfInterest}</TableCell>
                </TableRow>

                <TableRow>
                    <TableCell className="ETableCellText"><strong>Total Payment</strong><br/>(Loan Amount + Interest)</TableCell>
                    <TableCell className="ETableCellVal"><strong>Rs </strong>{props.totalAmt ? props.totalAmt: 0}</TableCell>
                </TableRow>
            </TableHead>
        </Table>
    )
}

export default TableDetails
