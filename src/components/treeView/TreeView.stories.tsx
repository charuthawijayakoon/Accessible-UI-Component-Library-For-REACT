
import { Meta } from "@storybook/react";
import React from "react";
import UuiTreeView from "./TreeView";
import { Card } from "@mui/material";

export default {
  title: "components/TreeView",
} as Meta;

export const Default = () => {
  return (
    <Card className="componentCard">
        <div className="componentCard__title">TreeView</div>

        <UuiTreeView />
      </Card>

  );
};
