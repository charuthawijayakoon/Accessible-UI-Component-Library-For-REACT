import { Avatar, AvatarProps } from '@mui/material'
import React from 'react'

export type UuiMessageBoxProps = AvatarProps

const UuiMessageBox: React.ForwardRefRenderFunction<unknown, UuiMessageBoxProps> = (
  props,
  ref
) => {
  return (
    <Avatar {...props} />
  )
}

export default UuiMessageBox
