import { Chip } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React, { useEffect } from 'react'
import clsx from 'clsx'
import UuiTypography from '../typography';

interface StatusChipProps {
    status: 'active' | 'inactive' | 'expired' | 'terminated' | 'resigned' | 'blacklisted' | 'rejected' | 'onhold' | 'pending' | 'confirmed' | 'approved'
}

const useStyles = makeStyles({
    chip: {
        minWidth: 66,
        // backgroundColor: `transparent !important`,
        width:'unset',
        height:'unset',
        padding:'2px 8px'
    },
    chipText: {
        fontSize: 14,
        textTransform: 'capitalize'
    },
    active: {
        color: ' #064128',
        border: `1.5px solid #8ae9c1`,
        backgroundColor: `#d5f9e3 !important`
    },
    inactive: {
        color: '#D32F2F',
        border: `1px solid #ffc8c8`,
        backgroundColor: `#FBEAEA !important`
    },
    expired: {
        color: '#656564',
        border: `1.5px solid #656564`,
    },
    terminated: {
        color: '#FF9800',
        border: `1.5px solid #FF9800`,
    },
    resigned: {
        color: '#005F9F',
        border: `1.5px solid #005F9F`,
    },
    blacklisted: {
        color: '#272525',
        border: `1.5px solid #272525`,
        backgroundColor: `#E9E9E9 !important`,
    },
    onhold: {
        color: '#656564',
        border: `1.5px solid #656564`,
        backgroundColor: `#F0F0EF !important`,
    },
    pending: {
        color: '#FF9800',
        border: `1.5px solid #FF9800`,
        backgroundColor: `#FFF5E5 !important`,
    },
    confirmed: {
        color: '#0B72B7',
        border: `1.5px solid #0B72B7`,
        backgroundColor: `#E7F1F8 !important`,
    },
    rejected: {
        color: '#0B72B7',
        border: `1.5px solid #0B72B7`,
        backgroundColor: `#E7F1F8 !important`,
    },
    approved: {
        color: '#039487',
        border: `1.5px solid #039487`,
        backgroundColor: `#E6F4F3 !important`,
    }


});

export type UuiStatusChipProps = StatusChipProps;

// const UuiStatusChip: React.ForwardRefRenderFunction<unknown, UuiStatusChipProps> = (
//     props,
//     ref
// ) => {
//     const classes = useStyles();

//     let chipStatus:string=props.status;
    
//     return (
//         <Chip variant="outlined" className={clsx(classes.chip, classes[props.status?.toLowerCase()])} label={
//             <UuiTypography className={classes.chipText}>{props.status}</UuiTypography>
//         } />
//     );

    
// };

// export default React.forwardRef<unknown, UuiStatusChipProps>(UuiStatusChip);
