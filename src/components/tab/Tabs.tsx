import { Tabs, TabsProps } from '@mui/material'
import React, { ChangeEvent, FormEvent, SyntheticEvent } from 'react'

export type UuiTabsProps = TabsProps

const UuiTabs: React.ForwardRefRenderFunction<unknown, UuiTabsProps> = (
  props,
  ref
) => {
  return (
    <Tabs {...props} />
  )
}

export default React.forwardRef<unknown, UuiTabsProps>(UuiTabs)
