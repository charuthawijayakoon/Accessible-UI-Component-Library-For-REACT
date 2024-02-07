import { Meta } from "@storybook/react";
import UuiLoader from "./loader";
import { Card } from "@mui/material";
import React from "react";


export default {
  title: "Components/Loader",
} as Meta;

export const Default = () => {
  return (
    <Card className="componentCard">
      <div className="componentCard__title">Loader</div>
      <div>
      <UuiLoader />
      </div>
    </Card>
  );
};
