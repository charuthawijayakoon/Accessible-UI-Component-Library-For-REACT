import { Avatar, AvatarProps } from '@mui/material'
import React from 'react'

export type UuiColorPaletteProps = AvatarProps

const UuiColorPalette: React.ForwardRefRenderFunction<unknown, UuiColorPaletteProps> = (
  props,
  ref
) => {
  return (
    <Avatar {...props} />
  )
}

export default UuiColorPalette
