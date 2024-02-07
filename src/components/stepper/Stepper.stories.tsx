import { Meta } from "@storybook/react/";

import { Card } from "@mui/material";
import React from "react";
import UuiHorizontalStepper from "./HorizontalStepper";
import UuiVerticalSteppr from "./verticalStepper";

export default {
  title: "Components/Stepper",
} as Meta;

export const Default = () => {
  return (
    <Card className="componentCard">
      <div className="componentCard__title">Stepper</div>
      <div>
        {/* <UuiStepper /> */}
      </div>
      <div className="componentCard__subHeader">Horizontal Stepper</div>
      <div>
        <UuiHorizontalStepper />
      </div>
      <div className="componentCard__subHeader">Vertical Steppr</div>
      <div>
        <UuiVerticalSteppr />
      </div>
    </Card>
  );
};
