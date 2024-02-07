import { Chip } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react'
import clsx from 'clsx'
import UuiTypography from '../typography';



const UuiNumberStatusChip: React.ForwardRefRenderFunction<unknown> = (
    props,
    ref
) => {


    return (
        <Chip variant="outlined" className="numberStatusChip" label={
            <UuiTypography className="numberStatusChip__chipText">+2</UuiTypography>
        } />
    );

};

export default React.forwardRef<unknown>(UuiNumberStatusChip);
