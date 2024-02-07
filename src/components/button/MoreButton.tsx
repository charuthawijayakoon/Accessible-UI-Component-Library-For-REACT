import { Button } from '@mui/material'
import React from 'react'
// import MoreIcon from '@mui/icons-material/MoreVert'

interface UuiEditButtonProps {
  onClick?: () => void
}

function UuiMoreButton(props: UuiEditButtonProps) {
  return (
    <Button
      className='tableItem__actionBtn Uui-iconbutton Uui-btn-outlined--primary tableItemIcons'
      variant='outlined'
      size='medium'
      onClick={props.onClick}
    >
      {/* <MoreIcon /> */}
      <i className="ri-more-2-fill"></i>
    </Button>
  )
}

export default UuiMoreButton