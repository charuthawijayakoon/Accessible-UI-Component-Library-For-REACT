import { IconButton, IconButtonProps } from '@mui/material';
import React from 'react'

export type UuiIconButtonProps = IconButtonProps;

const UuiIconButton:React.ForwardRefRenderFunction<unknown, UuiIconButtonProps> = (props, ref) => {
    return <IconButton {...props} size="large" />;
}

export default  React.forwardRef<unknown, UuiIconButtonProps>(UuiIconButton);
