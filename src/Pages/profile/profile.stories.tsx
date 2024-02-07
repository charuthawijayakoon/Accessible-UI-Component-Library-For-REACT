import { Meta } from "@storybook/react";
import { Card } from "@mui/material";
import React from "react";
import UuiProfile from "./profile";


export default {
  title: "Screens/Profile",
} as Meta;

export const Default = () => {
  return (
    <Card className="componentCard">
      <div className="componentCard__title">Profile</div>
      <div>
      <UuiProfile />
      </div>
    </Card>
  );
};
