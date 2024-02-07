import { TableRow, TableRowProps } from "@mui/material";
import React from "react";

export type UuiTableRowProps = TableRowProps;

const UuiTableRow = (props: UuiTableRowProps) => {
  return (
      <TableRow {...props} />
  );
};

export default UuiTableRow;
