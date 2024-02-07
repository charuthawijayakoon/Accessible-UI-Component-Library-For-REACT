import React from 'react'
import UuiTypography from '../typography'
import { TextField } from '@mui/material'

const UuiinputField = ({...props}) => {
    return (
        <><TextField
            className="firstNameWith"
            id="FirstNameField"
            label="First Name *"
            name="FirstName"
            variant="outlined"
            size="small"
            fullWidth /></>
    )
}

export default UuiinputField