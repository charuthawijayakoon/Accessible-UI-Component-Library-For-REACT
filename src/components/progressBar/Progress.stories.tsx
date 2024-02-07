import { Meta } from "@storybook/react";

import { Card } from "@mui/material";
import React from "react";
import UuiprogressBar from "./progress";


export default {
  title: "Components/progressBar",
} as Meta;

export const Default = () => {
  return (
    <Card className="componentCard">
      <div className="btnpadding">Progress Bar</div>
      <div>
      <UuiprogressBar />
      </div>
    </Card>
  );
};
