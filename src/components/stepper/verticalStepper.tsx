import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import StepIcon, { StepIconProps } from "@mui/material/StepIcon";
import UuiTypography from "../typography/Typography";

const steps = [
  {
    label: "Review Quotation Details",
    description:"Review Quotation details you entered",
    //   label1: 'Review Quotation Details',
    icon: <i className="ri-draft-line activStepIcon"></i>,
  },
  {
    label: "Premium Calculation",
    description: "Make Premium Calculations",
    icon: <i className="ri-calculator-line stepIcon"></i>,
  },
  {
    label: "Quotation Generate & Dispatch",
    description: "Review Quotation details you entered",
    icon: <i className="ri-task-line stepIcon"></i>,
  },
];

const UuiVerticalSteppr = ({ ...props }) => {


  return (
    <div className="stepperContent">
      <Stepper className="stepperContent__stepper" orientation="vertical">
        {steps.map(({ label, icon, description  }) => (
          <Step className="stepperContent__stepper--step" key={label}>
            <StepLabel  
              className="stepperContent__stepper--step_lable"
              StepIconComponent={(props) => <StepIcon {...props} icon={icon} />}
            >
              {label}
              <UuiTypography className="lebalName">{description}</UuiTypography>
              {/* <UuiTypography>
                Review Quotation details you entered
              </UuiTypography> */}
              <StepContent>
              
              </StepContent>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default UuiVerticalSteppr;
