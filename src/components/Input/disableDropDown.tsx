
import React from 'react'
import UuiTypography from '../typography'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'

const UuidisableDropdown = ({...props}) => {
    return (
       
          <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label">Gender *</InputLabel>
            <Select
              fullWidth
              id="GenderField"
              name="Gender"
              label="Gender *"
              variant="outlined"
              disabled={true}
            >
              <MenuItem value={1}>Male</MenuItem>
              <MenuItem value={2}>Female</MenuItem>
            </Select>
          </FormControl>
        
      
    )
}

export default UuidisableDropdown;
