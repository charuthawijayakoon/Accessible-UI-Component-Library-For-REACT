import { Tab, TabProps } from '@mui/material'
import { Autocomplete } from '@mui/material';
// import { AutocompleteProps } from '@mui/lab';
import React from 'react'
import UuiInput from './Input';

interface UuiAutocompleteProps{
    options:Array<{label:string}>;
    label:string;

}

const UuiAutocomplete: React.ForwardRefRenderFunction<unknown, UuiAutocompleteProps> = (
  props,
  ref
) => {
  return (
    <Autocomplete 
    {...props} 
    getOptionLabel={(option) => option.label}
    size='small'
    renderInput={(params) => <UuiInput {...params} label={props.label}  />}
    />
  )
}

export default React.forwardRef<unknown, UuiAutocompleteProps>(UuiAutocomplete)
