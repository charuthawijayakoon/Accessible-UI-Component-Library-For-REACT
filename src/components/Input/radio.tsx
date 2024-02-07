import React from 'react'
import UuiTypography from '../typography'
import { FormControlLabel, Radio } from '@mui/material'

const UuiRadioTxt = ({...props}) => {
    return (
        <FormControlLabel
        control={<Radio color="primary" name="gilad" />}
        label={
          <UuiTypography className="Uui-txt-small" variant="body1">
            Basic Radio
          </UuiTypography>
        }
      />
    )
}

export default UuiRadioTxt;