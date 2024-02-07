import React, { PropsWithChildren } from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepIcon, { StepIconProps } from "@mui/material/StepIcon";
// import box from "../../resources/box.svg";
// import document from "../../resources/document.svg";
// import likeIcon from "../../resources/like.svg";
// import correct from "../../resources/correct.svg";


const steps = [
  {
    label: "Select Class",
     icon: <img src="https://infoinsdev.informaticsint.com/api/v1/dms-center/file/public/download?path=Theme/Underwriting/like.svg" className="lable_icons" />,
  },
  {
    label: " Quotation Details",
     icon: <img src="https://infoinsdev.informaticsint.com/api/v1/dms-center/file/public/download?path=Theme/Underwriting/document.svg" className="lable_icons_disable" />,
  },
  {
    label: " Inventory Details",
     icon: <img src="https://infoinsdev.informaticsint.com/api/v1/dms-center/file/public/download?path=Theme/Underwriting/box.svg" className="lable_icons_disable" />,
  },
  {
    label: " Premium Calculation, Review Quotation & Quotation Generation",
     icon: <img src="https://infoinsdev.informaticsint.com/api/v1/dms-center/file/public/download?path=Theme/Underwriting/correct.svg" className="lable_icons_disable" />,
  },
];

const UuiHorizontalStepper = ({ ...props }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  return (
    <Stack sx={{ width: "100%" }} spacing={4} className="wf__stepper">
      <Stepper alternativeLabel className="wf__stepper--all">
        {steps.map(({ label,icon}) => (
          <Step className="wf__stepper--step" key={label}>
            <StepLabel
              className="wf__stepper--steplabel stepper_lable"
              StepIconComponent={(props) => <StepIcon {...props}  icon={icon}    />}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
};

export default UuiHorizontalStepper;
