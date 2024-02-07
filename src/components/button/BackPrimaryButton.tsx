import React from 'react'
import UuiTypography from '../typography'
import UuiAddButton from './AddButton'
import { Button } from '@mui/material'

const UuiBackPrimaryButton = ({...props}) => {
    
    return (
        <Button className='PrimaryButtonBack' variant="outlined" startIcon={<i className="ri-arrow-left-line"></i>}>
       <UuiTypography className='PrimaryText textSize'>Back</UuiTypography>
      </Button>
    )
}

export default UuiBackPrimaryButton