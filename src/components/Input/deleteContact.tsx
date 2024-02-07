import UuiTypography from "../typography";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  FormControlLabel,
  Grid,
  Checkbox,
} from "@mui/material";

import UuiAddBtn from "../button/addBtn";
import UuiDeleteBtn from "../button/deleteBtn";
import React from "react";
import { UuiButton } from "../button";

const UuideletContact = ({ ...props }) => {
  return (
    <>
      <div className="formCard__row checkBox-align">
        <div className="formCard__item staffFlexDropDown staffDropDown">
          <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label">
              Personal Mobaile
            </InputLabel>
            <Select
              fullWidth
              id="contactField"
              name="contact"
              label="Personal Mobaile"
              variant="outlined"
              disabled={true}
            >
              <MenuItem value={1}>Personal Mobile</MenuItem>
              <MenuItem value={2}>Office Mobail</MenuItem>
              <MenuItem value={3}>Personal Fixed</MenuItem>
              <MenuItem value={4}>Office Fixed</MenuItem>
            </Select>
          </FormControl>
        </div>
        <TextField
          className="staffInputField"
          id="contactNo"
          label="0712558369 "
          variant="outlined"
          size="small"
          disabled={true}
        />

        <FormControlLabel disabled control={<Checkbox />} label="Primary" />

        {/* <UuiButton
          className="Uui-iconbutton Uui-btn--secondary"
          variant="text"
          id="contactButton"
        > */}
          <UuiDeleteBtn />
        {/* </UuiButton> */}
      </div>
    </>
  );
};

export default UuideletContact;
function enableRipple(arg0: boolean) {
  throw new Error("Function not implemented.");
}
