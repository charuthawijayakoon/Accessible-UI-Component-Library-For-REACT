import { TableHead, TableHeadProps } from '@mui/material'
import React from 'react'

export type UuiTableHeadProps = TableHeadProps

const UuiTableHead = (props:UuiTableHeadProps) => {
    return (
        <TableHead {...props} />
    )
}

export default UuiTableHead
