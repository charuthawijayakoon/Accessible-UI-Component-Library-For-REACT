import { Radio, RadioProps } from '@mui/material'
import React from 'react'

export type UuiRadioProps = RadioProps

function RadioField({
  value,
  onBlur,
  onChange,
  ...props
}: UuiRadioProps) {
  return (
    <Radio
      {...props}
      value={value}
      disabled={false}
      onChange={onChange}
      onBlur={onBlur}
    />
  )
}

const UuiRadio: React.ForwardRefRenderFunction<unknown, UuiRadioProps> = (
  props,
  ref
) => {
  return (
    <RadioField {...props} />
  )
}

export default React.forwardRef<unknown, UuiRadioProps>(UuiRadio)
