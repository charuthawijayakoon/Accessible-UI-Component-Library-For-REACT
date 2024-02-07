import React from 'react'
import UuiTypography from '../typography'
import { TextField } from '@mui/material'

const UuidisableInput = ({...props}) => {
    return (
        <><TextField
            className="firstNameWith"
            id="FirstNameField"
            label="Saman Perera"
            name="FirstName"
            variant="outlined"
            size="small"
            disabled={true}
            fullWidth /></>
    )
}

export default UuidisableInput