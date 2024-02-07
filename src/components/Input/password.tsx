
import Visibility from "@mui/icons-material/Visibility";
import React, {useState} from "react";
// import {FieldProps} from '@rjsf/core'
import {FieldComponentProps} from "../FieldComponentProps";
import {VisibilityOff } from "@mui/icons-material/";
import { IconButton, InputAdornment, TextFieldProps } from "@mui/material";
import UuiInput from "./Input";

export type UuiPasswordProps = TextFieldProps & FieldComponentProps<unknown>


const UuiPassword: React.ForwardRefRenderFunction<unknown, UuiPasswordProps> = (props: UuiPasswordProps) => {

    let [visible, setVisible] = useState<boolean>(false);
  
    return <UuiInput {...props}
                     type={visible ? 'text' : 'password'}
                     InputProps={{
                       endAdornment: <InputAdornment position={'end'}>
                         <IconButton
                             aria-label='toggle password visibility'
                             onClick={() => setVisible(!visible)}
                         >
                           {visible ? <VisibilityOff /> : <Visibility />}
                         </IconButton>
                       </InputAdornment>
                     }}
    >
  
    </UuiInput>
  };
  export default React.forwardRef<unknown, UuiPasswordProps>(UuiPassword)