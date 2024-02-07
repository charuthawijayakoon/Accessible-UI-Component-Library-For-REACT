import { Meta } from "@storybook/react";

import { Card } from "@mui/material";
import React from "react";
import SampleFrom from "./form";


export default {
  title: "Forms/BasicForm",
} as Meta;

export const Default = () => {
  return (
    <Card className="componentCard">
      <div className="componentCard__title">Basic Form</div>
      <div>
      <SampleFrom />
      </div>
    </Card>
  );
};