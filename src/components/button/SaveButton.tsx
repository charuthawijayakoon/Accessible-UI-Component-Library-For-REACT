import { Button } from '@mui/material'
import React from 'react'
// import SaveIcon from '@mui/icons-material/Save';

interface UuiSaveButtonProps {
  onClick?: () => void
}

function UuiSaveButton(props: UuiSaveButtonProps) {
  return (
    <Button
      className='tableItem__actionBtn Uui-iconbutton Uui-btn-outlined--primary tableItemIcons'
      variant='outlined'
      size='medium'
      onClick={props.onClick}
    >
      {/* <SaveIcon /> */}
      <i className="ri-save-2-fill"></i>
    </Button>
  )
}

export default UuiSaveButton