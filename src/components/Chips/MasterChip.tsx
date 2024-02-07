import { Chip } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react'
import clsx from 'clsx'
import UuiTypography from '../typography';
// import PersonIcon from '@mui/icons-material/Person';
// import ApartmentIcon from '@mui/icons-material/Apartment';
// import SpeakerPhoneIcon from '@mui/icons-material/SpeakerPhone';

interface MasterChipProps {
    status: 'Individual' | 'Corporate' | 'Special'
}

const useStyles = makeStyles({
   
  
   
    Individual: {
        color: '#2B8A3E',
        backgroundColor: '#EBFBEE'
    },
    Corporate: {
        color: '#C92A2A',
        backgroundColor: '#FFF5F5'
    },
    Special: {
        color: '#2B8A3E',
        backgroundColor: '#EBFBEE'
    },

});

export type UuiMasterChipProps = MasterChipProps;

const UuiMasterChip: React.ForwardRefRenderFunction<unknown, UuiMasterChipProps> = (
    props,
    ref
) => {
    const classes = useStyles();

    let chipStatus: string = props.status;

    switch (props.status) {
        case 'Individual':
            return (
                <div className='masterChips'>
                <div className={clsx("masterChips__icon", classes[props.status])}>
                    {/* <PersonIcon /> */}
                    <i className="ri-user-fill"></i>
                </div>
                </div>
            );
        case 'Corporate':
            return (
                <div className='masterChips'>
                <div className={clsx("masterChips__icon", classes[props.status])}>
                    {/* <ApartmentIcon /> */}
                    <i className="ri-building-fill"></i>
                </div>
                </div>
            );
        case 'Special':
            return (
                <div className='masterChips'>
                <div className={clsx("masterChips__icon", classes[props.status])}>
                    {/* <SpeakerPhoneIcon /> */}
                    <i className="ri-cellphone-fill"></i>
                </div>
                </div>
            );
        default:
            return (
                <div className='masterChips'>
                <div className={clsx("masterChips__icon", classes[props.status])}>
                    {/* <PersonIcon /> */}
                    <i className="ri-user-fill"></i>
                </div>
                </div>
            );
    }
};

export default React.forwardRef<unknown, UuiMasterChipProps>(UuiMasterChip);
