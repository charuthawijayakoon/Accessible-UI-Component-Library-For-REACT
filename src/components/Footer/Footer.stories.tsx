import { Meta } from "@storybook/react";
import UuiFooter from "./Footer";
import { Card } from "@mui/material";
import React from "react";


export default {
  title: "Components/Footer",
} as Meta;

export const Default = () => {
  return (
    <Card className="componentCard">
      <div className="componentCard__title">Footer</div>
      <div>
      <UuiFooter />
      </div>
    </Card>
  );
};
