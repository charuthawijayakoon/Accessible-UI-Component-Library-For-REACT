import React from "react";
import UuiTypography from "../typography";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import { Checkbox } from "@mui/material";

const UuiDisableCheckboxTxt = ({ ...props }) => {
  return (
    <FormControlLabel 
     disabled control={<Checkbox defaultChecked />} 
     label={
        <UuiTypography className="Uui-txt-small" variant="body1">
          CheckBox Test
        </UuiTypography>
      }
      />
    
  );
};

export default UuiDisableCheckboxTxt;
