import React from "react";
import UuiTypography from "../typography";
import { FormControlLabel, Radio } from "@mui/material";

const UuiRadioDisable = ({ ...props }) => {
  return (
    <FormControlLabel
      value="disabled"
      disabled
      control={<Radio />}
      label={
        <UuiTypography className="Uui-txt-small" variant="body1">
         Basic Radio
        </UuiTypography>
      }
    />
  );
};

export default UuiRadioDisable;
