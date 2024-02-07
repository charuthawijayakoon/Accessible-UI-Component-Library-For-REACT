import React from 'react'
import UuiTypography from '../typography'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'

const UuidropDown = ({...props}) => {
    return (
       
          <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label">Gender *</InputLabel>
            <Select
              fullWidth
              id="GenderField"
              name="Gender"
              label="Gender *"
              variant="outlined"
            >
              <MenuItem value={1}>Male</MenuItem>
              <MenuItem value={2}>Female</MenuItem>
            </Select>
          </FormControl>
        
      
    )
}

export default UuidropDown
