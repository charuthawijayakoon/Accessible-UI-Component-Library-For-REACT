import { Chip, ChipProps } from '@mui/material'
import React from 'react'

export type UuiChipProps = ChipProps

const UuiChip = (props: UuiChipProps) => {
    return (
        <Chip {...props} />
        
    )
}

export default UuiChip
