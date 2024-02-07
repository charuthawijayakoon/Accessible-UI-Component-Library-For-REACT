

import React from "react";
import { FormControlLabel, Switch } from "@mui/material";
import UuiTypography from "../typography";

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const UuiDisableSwitch = ({ ...props }) => {
  return (
    <FormControlLabel 
    disabled 
    control={<Switch defaultChecked />} label={
        <UuiTypography className="Uui-txt-small" variant="body1">
        Lable
      </UuiTypography>
    } />
     
    
  );
};

export default UuiDisableSwitch;
