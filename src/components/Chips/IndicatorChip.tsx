import { Chip } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react'
import clsx from 'clsx'
import UuiTypography from '../typography';
//import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

interface IndicatorChipProps {
    status: 'Checked' | 'Unchecked'
}

const useStyles = makeStyles({
    
    Checked: {
        backgroundColor: '#22316C'
    },
    Unchecked: {
        backgroundColor: 'white'
    },
   
    
});

export type UuiIndicatorChipProps = IndicatorChipProps;

const UuiIndicatorChip: React.ForwardRefRenderFunction<unknown, UuiIndicatorChipProps> = (
    props,
    ref
) => {
    const classes = useStyles();

    let chipStatus: string = props.status;

    switch (props.status) {
        case 'Checked':
            return (
                <>
                    <div className={clsx("idicator_stripe", classes[props.status])}>
                    </div>
                </>
            );
        case 'Unchecked':
            return (
                <>
                    <div className={clsx("idicator_stripe", classes[props.status])}>
                    </div>
                </>
            );
        default:
            return (
                <>
                    <div className={clsx("idicator_stripe", classes[props.status])}>
                    </div>
                </>
            );
    }


};

export default React.forwardRef<unknown, UuiIndicatorChipProps>(UuiIndicatorChip);
