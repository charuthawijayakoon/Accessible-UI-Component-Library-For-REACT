import { Avatar, AvatarProps } from '@mui/material'
import React from 'react'

export type UuiAvatarProps = AvatarProps

const UuiAvatar: React.ForwardRefRenderFunction<unknown, UuiAvatarProps> = (
  props,
  ref
) => {
  return (
    <Avatar {...props} />
  )
}

export default UuiAvatar
