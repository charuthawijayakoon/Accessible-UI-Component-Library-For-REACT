import { TableBody, TableBodyProps } from "@mui/material";
import React from "react";

export type UuiTableBodyProps = TableBodyProps;

const UuiTableBody = (props: UuiTableBodyProps) => {
  return <TableBody {...props} />;
};

export default UuiTableBody;