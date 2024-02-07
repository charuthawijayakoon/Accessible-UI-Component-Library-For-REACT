import React from 'react'
import UuiTypography from '../typography'
import { Card, CardContent, Theme, Grid, Divider } from "@mui/material";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';



type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const UuiCalendar = ({ ...props }) => {
   
    const [value, onChange] = useState<Value>(new Date());
    return (
        <div className="">
            <Calendar onChange={onChange} value={value} />
        </div>
    )
}

export default UuiCalendar
