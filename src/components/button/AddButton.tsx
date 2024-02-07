import { Button } from '@mui/material'
import React from 'react'
// import AddIcon from '@mui/icons-material/Add'

interface UuiAddButtonProps {
  onClick?: () => void
}

function UuiAddButton(props: UuiAddButtonProps) {
  return (
    <Button
      className='tableItem__actionBtn Uui-iconbutton Uui-btn-outlined--primary tableItemIcons'
      variant='outlined'
      size='medium'
      onClick={props.onClick}
    >
      {/* <AddIcon /> */}
      <i className="ri-add-line"></i>
    </Button>
  )
}

export default UuiAddButton
