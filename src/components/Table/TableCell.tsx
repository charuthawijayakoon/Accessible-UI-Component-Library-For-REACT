import { TableCell, TableCellProps } from '@mui/material'
import React from 'react'

export type UuiTableCellProps =TableCellProps

const UuiTableCell = (props:UuiTableCellProps) => {
    return (
        <TableCell {...props} />
    )
}

export default UuiTableCell
