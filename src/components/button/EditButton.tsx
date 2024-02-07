import { Button } from '@mui/material'
import React from 'react'
// import EditIcon from '@mui/icons-material/Edit'

interface UuiEditButtonProps {
  onClick?: () => void
}

function UuiEditButton(props: UuiEditButtonProps) {
  return (
    <Button
      className='tableItem__actionBtn Uui-iconbutton Uui-btn-outlined--primary tableItemIcons'
      variant='outlined'
      size='medium'
      onClick={props.onClick}
    >
      {/* <EditIcon /> */}
      <i className="ri-edit-line"></i>
    </Button>
  )
}

export default UuiEditButton
