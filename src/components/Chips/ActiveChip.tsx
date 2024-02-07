import { Chip } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react'
import clsx from 'clsx'
import UuiTypography from '../typography';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface ActiveChipProps {
    status: 'active' | 'defaultAddress'
}



export type UuiActiveChipProps = ActiveChipProps;

const UuiActiveChip: React.ForwardRefRenderFunction<unknown, UuiActiveChipProps> = (
    props,
    ref
) => {
    

    let chipStatus: string = props.status;

    switch (props.status) {
        case 'active':
            return (
                <div style={{ backgroundColor: '#DAFFDE', padding: 5, width: 'fit-content' }}>
                    <UuiTypography className={clsx('Uui-txt-xsmall')} variant='body1'>
                        {/* <CheckCircleIcon style={{ width: 17, height: 17, paddingRight: 5, color: '#2B8A3E' }} /> */}
                        <i className="ri-checkbox-circle-fill"></i>
                        Active
                    </UuiTypography>
                </div>
            );
        case 'defaultAddress':
            return (
                <div style={{ backgroundColor: '#EDEDED', padding: 5 }}>
                    <UuiTypography className={clsx('Uui-txt-xsmall')} variant='body1'>
                        {/* <CheckCircleIcon style={{ width: 17, height: 17, paddingRight: 5, color: '#2D4190' }} /> */}
                        <i className="ri-checkbox-circle-fill"></i>
                        Default Address
                    </UuiTypography>
                </div>
            );
        default:
            return (
                <div style={{ backgroundColor: '#EDEDED', padding: 5 }}>
                    <UuiTypography className={clsx('Uui-txt-xsmall')} variant='body1'>
                        {/* <CheckCircleIcon style={{ width: 17, height: 17, paddingRight: 5, color: '#2D4190' }} /> */}
                        <i className="ri-checkbox-circle-fill"></i>
                        Default Address
                    </UuiTypography>
                </div>
            );
    }
};

export default React.forwardRef<unknown, UuiActiveChipProps>(UuiActiveChip);
