import { Switch, SwitchProps } from '@mui/material'
import React from 'react'

export type UuiSwitchProps = SwitchProps

function SwitchField({
  value,
  onBlur,
  onChange,
  ...props
}: UuiSwitchProps) {
  return (
    <Switch
      {...props}
      value={value}
      disabled={false}
      onChange={onChange}
      onBlur={onBlur}
      
    />
  )
}

const UuiSwitch: React.ForwardRefRenderFunction<unknown, UuiSwitchProps> = (
  props,
  ref
) => {
  return (
    <SwitchField {...props} />
  )
}

export default React.forwardRef<unknown, UuiSwitchProps>(UuiSwitch)
