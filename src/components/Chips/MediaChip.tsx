import { Chip } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import React from "react";
import clsx from "clsx";
import UuiTypography from "../typography";

interface MediaChipProps {
  status: "Whatsapp" | "Facebook" | "Skype";
}

const useStyles = makeStyles({
  Whatsapp: {
    color: "#20B038",
  },
  Facebook: {
    color: "#1877F2",
  },
  Skype: {
    color: "#0078D7",
  },
});

export type UuiMediaChipProps = MediaChipProps;

const UuiMediaChip: React.ForwardRefRenderFunction<
  unknown,
  UuiMediaChipProps
> = (props, ref) => {
  const classes = useStyles();

  let chipStatus: string = props.status;

  switch (props.status) {
    case "Whatsapp":
      return (
        <div className={clsx(classes[props.status])}>
          {/* <WhatsAppIcon /> */}
          <i className="ri-whatsapp-line"></i>
        </div>
      );
    case "Facebook":
      return (
        <div className={clsx(classes[props.status])}>
          {/* <FacebookIcon /> */}
          <i className="ri-facebook-box-fill"></i>
        </div>
      );
    case "Skype":
      return (
        <div className={clsx(classes[props.status])}>
          {/* <SpaIcon /> */}
          <i className="ri-skype-fill"></i>
        </div>
      );
    default:
      return (
        <div className={clsx(classes[props.status])}>
          {/* <SpaIcon /> */}
          <i className="ri-skype-fill"></i>
        </div>
      );
  }
};

export default React.forwardRef<unknown, UuiMediaChipProps>(UuiMediaChip);
