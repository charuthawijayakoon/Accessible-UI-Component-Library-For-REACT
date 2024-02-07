import { Meta } from "@storybook/react";
import { Card } from "@mui/material";
import React from "react";
import UuiTwoColumnsForm from "./twoColumnsForm";
import UuiThreeColumnsForm from "./threeColumnsForm";
import UuiFourColumnsForm from "./fourColumnsForm";
import UuiColumnsFlexForm from "./columnsFlexForm";

export default {
  title: "Forms/ColumnsForms",
} as Meta;

export const Default = () => {
  return (
    <Card className="componentCard">
      <div className="componentCard__title">Forms Columns</div>
      <h1 className="componentCard__subHeader">Two Columns</h1>
      <div className="formCard__row">
        <div className="formCard__item">
          <UuiTwoColumnsForm />
        </div>
      </div>
      <h1 className="componentCard__subHeader">Three Columns</h1>
      <div className="formCard__row">
        <div className="formCard__item">
          <UuiThreeColumnsForm />
        </div>
      </div>
      <div className="formCard__row">
        <div className="formCard__item">
          <UuiColumnsFlexForm />
        </div>
      </div>

      <h1 className="componentCard__subHeader">Four Columns</h1>
      <div className="formCard__row">
        <div className="formCard__item">
          <UuiFourColumnsForm />
        </div>
      </div>
    </Card>
  );
};
