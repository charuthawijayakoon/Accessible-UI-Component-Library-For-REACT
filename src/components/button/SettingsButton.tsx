import { Button } from '@mui/material'
import React from 'react'
// import SettingsIcon from '@mui/icons-material/Settings'

interface UuiSettingsButtonProps{
  onClick?: () => void;
}

function UuiSettingsButton(props:UuiSettingsButtonProps) {
  return (
    <Button
      className='orgHierachy-lvlConfigList__actionBtn Uui-iconbutton Uui-btn-outlined--white tableItemIcons'
      variant='outlined'
      size='medium'
      onClick={props.onClick}
    >
      {/* <SettingsIcon /> */}
      <i className="ri-settings-4-fill"></i>
    </Button>
  )
}

export default UuiSettingsButton
