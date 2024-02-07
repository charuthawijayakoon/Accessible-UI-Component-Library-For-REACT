import { Button } from '@mui/material'
import React from 'react'

interface UuiHomeButtonProps{
  onClick?: () => void;
}

function UuiHomeButton(props:UuiHomeButtonProps) {
  return (
    <Button
      className='Uui-iconbutton buttonIconPrimary buttonLeft'
      variant='outlined'
      size='medium'
      onClick={props.onClick}
    >
      <i className="ri-home-3-line ri-lg "></i>
    </Button>
  )
}

export default UuiHomeButton
