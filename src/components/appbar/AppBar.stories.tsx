import { Meta } from "@storybook/react";
// import UuiAppBar from './Card';
import { Card } from "@mui/material";
import { action } from "@storybook/addon-actions";
import UuiAppBar from "./AppBar";
import React from "react";
export default {
  title: "Components/AppBar",
} as Meta;

export const Default = () => {
  return (
    <Card className="componentCard">
      <div className="componentCard__title">App Bar</div>
      <div>
        <UuiAppBar
          open={false}
          onDrawerToggle={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
    </Card>
  );
};
