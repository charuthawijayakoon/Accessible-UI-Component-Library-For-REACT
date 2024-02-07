import React from "react";
import UuiTypography from "../typography";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import { Checkbox } from "@mui/material";

const UuionlyCheckboxTxt = ({ ...props }) => {
  return (
    <FormControlLabel
      control={<Checkbox color="primary" name="gilad" />}
      label=""
    />
  );
};

export default UuionlyCheckboxTxt;
