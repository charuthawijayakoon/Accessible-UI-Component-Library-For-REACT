import { IconButton, Toolbar, ToolbarProps, Tooltip } from "@mui/material";
import React from "react";
import DeleteIcon from './';

export type UuiToolbarProps = ToolbarProps;

const UuiToolbar = (props: UuiToolbarProps) => {
  return <Toolbar {...props} />;
};

{/* <Tooltip title="Delete">
  <IconButton>
    <DeleteIcon />
  </IconButton>
</Tooltip> */}

export default UuiToolbar;
