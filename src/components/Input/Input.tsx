import { TextField, TextFieldProps } from '@mui/material';
import withStyles from '@mui/styles/withStyles';
import React from 'react'

export type UuiInputProps = TextFieldProps

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#2D4190'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#2D4190'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#EDEDED'
      },
      '&:hover fieldset': {
        borderColor: '#2D4190'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#064582'
      },
      '&.Mui-disabled fieldset':{
        backgroundColor:'#F9F9F9',
        borderColor: '#EDEDED'
      }

    }
  }
})(TextField)

function UuiInput(props: TextFieldProps) {
  return <CssTextField variant='outlined' {...props} />
}







export default UuiInput
