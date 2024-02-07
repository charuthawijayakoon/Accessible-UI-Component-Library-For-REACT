import React from "react";
import UuiTypography from "../typography";
import { UuiButton } from ".";
import DeleteIcon from "@mui/icons-material/Delete";

const UuiDeleteBtn = ({ ...props }) => {
  return (
    <UuiButton
      id="emailDeleteList"
      className="Uui-iconbutton Uui-btn-error iconbtn"
      variant="text"
    >
      <DeleteIcon />
    </UuiButton>
  );
};

export default UuiDeleteBtn;
