import { Button } from '@mui/material'
import React from 'react'
// import StopIcon from '@mui/icons-material/Stop';


interface UuiStopButtonProps{
  onClick?: () => void;
}

function UuiStopButton(props:UuiStopButtonProps) {
  return (
    <Button
      className='tableItem__actionBtn Uui-iconbutton Uui-btn-outlined--success tableItemIcons'
      variant='outlined'
      size='medium'
      onClick={props.onClick}
    >
      <i className="ri-stop-fill"></i>
      {/* <StopIcon /> */}
    </Button>
  )
}

export default UuiStopButton
