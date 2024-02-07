import { Button } from '@mui/material'
import React from 'react'
// import DocumentIcon from '@mui/icons-material/InsertDriveFile'

interface UuiEditButtonProps {
  onClick?: () => void
}

function UuiDocumentButton(props: UuiEditButtonProps) {
  return (
    <Button
      className='tableItem__actionBtn Uui-iconbutton Uui-btn-outlined--primary tableItemIcons'
      variant='outlined'
      size='medium'
      onClick={props.onClick}
    >
      {/* <DocumentIcon /> */}
      <i className="ri-file-3-fill"></i>
    </Button>
  )
}

export default UuiDocumentButton