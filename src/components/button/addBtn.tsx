import React from "react";
import UuiTypography from "../typography";
import { UuiButton } from ".";
import AddIcon from '@mui/icons-material/Add';

const UuiAddBtn = ({ ...props }) => {
  return (
    <UuiButton
      className="Uui-iconbutton Uui-btn--secondary"
      variant="text"
      id="contactButton"
      
      disabled={props?.mode === "VIEW"}
    >
      <AddIcon />
    </UuiButton>
  );
};

export default UuiAddBtn;
