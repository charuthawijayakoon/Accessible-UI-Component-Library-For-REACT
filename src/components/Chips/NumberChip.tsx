import { Chip } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import React from "react";
import clsx from "clsx";
import UuiTypography from "../typography";

const UuiNumberChip: React.ForwardRefRenderFunction<unknown> = (props, ref) => {
  return (
    <Chip
      variant="outlined"
      className="numberChip"
      label={<UuiTypography className="numberChip__chipText">4</UuiTypography>}
    />
  );
};

export default React.forwardRef<unknown>(UuiNumberChip);
