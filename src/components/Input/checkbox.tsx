import React from "react";
import UuiTypography from "../typography";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import { Checkbox } from "@mui/material";

const UuiCheckboxTxt = ({ ...props }) => {
  return (
    <FormControlLabel
      control={<Checkbox color="primary" name="gilad" />}
      label={
        <UuiTypography className="Uui-txt-small" variant="body1">
          CheckBox Test
        </UuiTypography>
      }
    />
  );
};

export default UuiCheckboxTxt;
