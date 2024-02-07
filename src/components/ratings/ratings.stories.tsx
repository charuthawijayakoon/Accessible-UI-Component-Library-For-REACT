import { Meta } from "@storybook/react";
import UuiRatings from "./ratings";
import { Card } from "@mui/material";
import React from "react";


export default {
  title: "Components/Rating",
} as Meta;

export const Default = () => {
  return (
    <Card className="componentCard">
      <div className="componentCard__title">Ratings</div>
      <div>
      <UuiRatings />
      </div>
    </Card>
  );
};
