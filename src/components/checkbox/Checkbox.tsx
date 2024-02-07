import { Checkbox, CheckboxProps } from '@mui/material'
import React from 'react'

export type UuiCheckboxProps = CheckboxProps

function CheckBoxField({
  value,
  onBlur,
  onChange,
  readOnly,
  ...props
}: UuiCheckboxProps) {
  return (
    <Checkbox
      {...props}
      value={value}
      disabled={readOnly || ( false)}
      onChange={onChange}
      onBlur={onBlur}
    />
  )
}

export const UuiCheckbox: React.ForwardRefRenderFunction<
  unknown,
  UuiCheckboxProps
> = (props, ref) => {
  return (
      <CheckBoxField {...props} />
  )
}

export default React.forwardRef<unknown, UuiCheckboxProps>(UuiCheckbox)
