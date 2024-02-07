import { Table, TableProps } from "@mui/material";
import React from "react";

export type UuiTableProps = TableProps;
const UuiTable = (props: UuiTableProps) => {
  return <Table {...props} />;
};

export default UuiTable;
