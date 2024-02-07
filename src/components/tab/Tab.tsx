import { Tab, TabProps } from '@mui/material'
import React from 'react'

export type UuiTabProps = TabProps

const UuiTab: React.ForwardRefRenderFunction<unknown, UuiTabProps> = (
  props,
  ref
) => {
  return (
    <Tab {...props} />
  )
}

export default React.forwardRef<unknown, UuiTabProps>(UuiTab)
