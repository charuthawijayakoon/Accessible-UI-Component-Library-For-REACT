import { Chip } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react'
import clsx from 'clsx'
import UuiTypography from '../typography';

interface CurrentStatusProps {
    status: 'new' | 'tobecontacted'  | 'contacted' | 'reviewed' 
}

const useStyles = makeStyles({
   

    tobecontacted: {
        backgroundColor: 'rgba(166, 30, 77, 0.10)',
        color: '#A61E4D',
        borderRadius: '4px',
        padding: '2px 12px'
    },
    contacted: {
        backgroundColor: 'rgba(134, 46, 156, 0.10)',
        color: '#862E9C',
        borderRadius: '4px',
        padding: '2px 12px'

    },
    reviewed: {
        backgroundColor: 'rgba(92, 148, 13, 0.10)',
        color: '#5C940D',
        borderRadius: '4px',
        padding: '2px 12px'
    }
});

export type UuiCurrentStatusProps = CurrentStatusProps;

const UuiCurrentStatus: React.ForwardRefRenderFunction<unknown, UuiCurrentStatusProps> = (
    props,
    ref
) => {
    const classes = useStyles();

    let chipStatus: string = props.status;

    switch (props.status) {
        case 'new':
            return (
                <div className="currentstatus">
                    <UuiTypography className="currentstatus__newchip Uui-txt-xsmall" variant='body1'>
                        New
                    </UuiTypography>
                </div>
            );
        case 'tobecontacted':
            return (
                <div className="currentstatus">
                    <UuiTypography className={clsx(classes.tobecontacted,'Uui-txt-xsmall')} variant='body1'>
                    To be Contacted
                    </UuiTypography>
                </div>
            );
        case 'contacted':
            return (
                <div className="currentTableStatus">
                    <UuiTypography className={clsx(classes.contacted,'Uui-txt-xsmall')} variant='body1'>
                    Contacted
                    </UuiTypography>
                </div>
            );
        case 'reviewed':
            return (
                <div className="currentTableStatus">
                    <UuiTypography className={clsx(classes.reviewed,'Uui-txt-xsmall')} variant='body1'>
                    Reviewed
                    </UuiTypography>
                </div>
            );
        
    }
};



export default React.forwardRef<unknown, UuiCurrentStatusProps>(UuiCurrentStatus);
