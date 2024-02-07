import React from "react";
import { Typography, TypographyProps } from "@mui/material";

export type UuiTypographyProps = TypographyProps;

const UuiTypography = (props: UuiTypographyProps) => {
  return <Typography {...props}></Typography>;
};

export default UuiTypography;
