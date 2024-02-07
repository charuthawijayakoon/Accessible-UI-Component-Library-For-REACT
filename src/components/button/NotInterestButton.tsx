import { Button } from '@mui/material'
import React from 'react'
// import NotInterestedIcon from '@mui/icons-material/NotInterested';

interface UuiDeleteButtonProps{
  onClick?: () => void;
}

function UuiNotInterestButton(props:UuiDeleteButtonProps) {
  return (
    <Button
      className='tableItem__actionBtn Uui-iconbutton Uui-btn-outlined--error tableItemIcons'
      variant='outlined'
      size='medium'
      onClick={props.onClick}
    >
      {/* <NotInterestedIcon /> */}
      <i className="ri-dislike-line"></i>
    </Button>
  )
}

export default UuiNotInterestButton
