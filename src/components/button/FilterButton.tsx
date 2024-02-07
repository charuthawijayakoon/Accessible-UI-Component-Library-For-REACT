import { Button } from '@mui/material'
import React from 'react'

interface UuiFilterButtonProps{
  onClick?: () => void;
}

function UuiFilterButton(props:UuiFilterButtonProps) {
  return (
    <Button
      className='Uui-iconbutton buttonIconSecondary buttonLeft'
      variant='outlined'
      size='medium'
      onClick={props.onClick}
    >
      <i className="ri-filter-3-line ri-lg "></i>
    </Button>
  )
}

export default UuiFilterButton
