import { TableContainer, TableContainerProps } from "@mui/material";
import React from "react";

export type UuiTableContainerProps = TableContainerProps;

const UuiTableContainer = (props: UuiTableContainerProps) => {
  return (
      <TableContainer {...props} />
  );
};

export default UuiTableContainer;
