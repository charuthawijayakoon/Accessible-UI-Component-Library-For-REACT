import { Button } from '@mui/material'
import React from 'react'
// import RemoveIcon from '@mui/icons-material/Remove';

interface UuiDeleteButtonProps{
  onClick?: () => void;
}

function UuiRemoveButton(props:UuiDeleteButtonProps) {
  return (
    <Button
      className='tableItem__actionBtn Uui-iconbutton Uui-btn-outlined--error tableItemIcons'
      variant='outlined'
      size='medium'
      onClick={props.onClick}
    >
      {/* <RemoveIcon /> */}
      <i className="ri-subtract-line"></i>
    </Button>
  )
}

export default UuiRemoveButton
