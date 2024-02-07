import { Box, BoxProps } from '@mui/material'
import React from 'react'

export type UuiBoxProps = BoxProps

const UuiBox = (props: UuiBoxProps) => {
    return (
        <Box {...props} />
        
    )
}

export default UuiBox
