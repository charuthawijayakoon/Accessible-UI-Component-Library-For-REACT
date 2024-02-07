import React from "react";
import UuiTypography from "../typography";
import { TextField } from "@mui/material";

const UuidisableDatePicker = ({ ...props }) => {
  return (
    <TextField
      disabled={true}
      size="small"
      id="date"
      label="Birthday"
      type="date"
      defaultValue="DD/MM/YYYY"
      className="componentCard__inputContainer--datePickerInput"
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default UuidisableDatePicker;
