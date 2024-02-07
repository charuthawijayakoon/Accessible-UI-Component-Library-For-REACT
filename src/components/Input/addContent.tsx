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
import AddIcon from '@mui/icons-material/Add';


const UuiaddContact = ({ ...props }) => {
  return <>
  
   <div className="formCard__row checkBox-align">
        <div className="formCard__item staffFlexDropDown staffDropDown">
        <FormControl fullWidth size="small">
          <InputLabel id="demo-simple-select-label">Type *</InputLabel>
          <Select
            fullWidth
            id="GenderField"
            name="Gender"
            label="Gender *"
            variant="outlined"        
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
          label="Contact No. "
          variant="outlined"
          size="small"        
        />

        <FormControlLabel
          control={
            <Checkbox
              id="contactStatus"
            />
          }
          label="Primary"
        />

        <UuiButton
          className="Uui-iconbutton Uui-btn--secondary"
          variant="text"
          id="contactButton"
          
        >
          <AddIcon/>
        </UuiButton>
      </div>
  </>;
};

export default UuiaddContact;
