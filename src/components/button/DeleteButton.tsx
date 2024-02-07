import { Button } from '@mui/material'
import React from 'react'
// import DeleteIcon from '@mui/icons-material/Delete'

interface UuiDeleteButtonProps{
  onClick?: () => void;
}

function UuiDeleteButton(props:UuiDeleteButtonProps) {
  return (
    <Button
      className='tableItem__actionBtn Uui-iconbutton Uui-btn-outlined--error tableItemIcons'
      variant='outlined'
      size='medium'
      onClick={props.onClick}
    >
      {/* <DeleteIcon /> */}
      <i className="ri-delete-bin-line"></i>
    </Button>
  )
}

export default UuiDeleteButton
