import { Card, IconButton, Tooltip } from "@mui/material";
import { Meta } from "@storybook/react";
import React from "react";
import UuiToolbar from "./Toolbar";
// import DeleteIcon from '.';
//import DeleteIcon from "@mui/icons-material/Delete";

export default {
  title: "components/Toolbar",
} as Meta;

export const Default = () => {
  return (
    <Card className="componentCard">
      <div className="componentCard__title btnpadding">Tool Tip</div>
      <div className="rowPadding">
        <Tooltip title="Delete">
          <IconButton size="large" className="iconbtn">
           
            <i className="ri-delete-bin-7-fill"></i>
          </IconButton>
        </Tooltip>
      </div>
    </Card>
  );
};
