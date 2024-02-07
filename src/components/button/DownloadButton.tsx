import { Button } from '@mui/material'
import React from 'react'
// import GetAppIcon from '@mui/icons-material/GetApp';

interface UuiDownloadButtonProps {
  onClick?: () => void
}

function UuiDownloadButton(props: UuiDownloadButtonProps) {
  return (
    <Button
      className='orgHierachy-lvlConfigList__actionBtn Uui-iconbutton Uui-btn-outlined--primary tableItemIcons'
      variant='outlined'
      size='medium'
      onClick={props.onClick}
    >
      {/* <GetAppIcon /> */}
      <i className="ri-download-fill"></i>
    </Button>
  )
}

export default UuiDownloadButton
