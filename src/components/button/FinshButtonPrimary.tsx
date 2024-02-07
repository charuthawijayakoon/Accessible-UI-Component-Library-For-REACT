
import React from "react";
import UuiTypography from "../typography";
import UuiEditButton from "./EditButton";
import { Button } from "@mui/material";

const FinshButtonPrimary = ({ ...props }) => {
  return (
    <Button className='primaryBtnFinsh'  variant="contained" endIcon={<i className="ri-arrow-right-line"></i>}>
   <UuiTypography className="PrimaryText textSize">Finish</UuiTypography>
  </Button>
  );
};

export default FinshButtonPrimary;
