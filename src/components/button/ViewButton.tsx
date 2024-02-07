import { Button } from '@mui/material'
import React from 'react'
// import VisibilityIcon from '@mui/icons-material/Visibility'

interface UuiViewButtonProps{
  onClick?: () => void;
}

function UuiViewButton(props:UuiViewButtonProps) {
  return (
    <Button
      className='tableItem__actionBtn Uui-iconbutton Uui-btn-outlined--primary tableItemIcons'
      variant='outlined'
      size='medium'
      onClick={props.onClick}
    >
      {/* <VisibilityIcon /> */}
      <i className="ri-eye-fill"></i>
    </Button>
  )
}

export default UuiViewButton
