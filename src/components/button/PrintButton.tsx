import { Button } from '@mui/material'
import React from 'react'
// import PrintIcon from '@mui/icons-material/Print'

interface UuiPrintButtonProps {
  onClick?: () => void
}

function UuiPrintButton(props: UuiPrintButtonProps) {
  return (
    <Button
      className='tableItem__actionBtn Uui-iconbutton Uui-btn-outlined--primary tableItemIcons'
      variant='outlined'
      size='medium'
      onClick={props.onClick}
    >
      {/* <PrintIcon /> */}
      <i className="ri-printer-fill"></i>
    </Button>
  )
}

export default UuiPrintButton
