import { Button } from '@mui/material'
import React from 'react'

interface UuiTableConfigureButtonProps{
  onClick?: () => void;
}

function UuiTableConfigureButton(props:UuiTableConfigureButtonProps) {
  return (
    <Button
      className='Uui-iconbutton buttonIconSecondary buttonLeft'
      variant='outlined'
      size='medium'
      onClick={props.onClick}
    >
      <i className="ri-equalizer-line ri-lg "></i>
    </Button>
  )
}

export default UuiTableConfigureButton
