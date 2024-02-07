import { Meta } from "@storybook/react";

import { Card } from "@mui/material";
import React from "react";
import UuiHeadings from "./headings";


export default {
  title: "Components/Headings",
} as Meta;

export const Default = () => {
  return (
    <Card className="componentCard">
      <div className="componentCard__title">Headings</div>
      <div>
      <UuiHeadings />
      </div>
    </Card>
  );
};
