import { Chip } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import React from "react";
import clsx from "clsx";
import UuiTypography from "../typography";

interface CurrentStatusProps {
  status: "pending" | "approved" | "pendingOutline" | "approvedOutline";
}

export type UuiCurrentStatusProps = CurrentStatusProps;

const UuiCurrentStatus: React.ForwardRefRenderFunction<
  unknown,
  UuiCurrentStatusProps
> = (props, ref) => {
  let chipStatus: string = props.status;

  switch (props.status) {
    case "pending":
      return (
        <div className="chipStatus">
          <div className="chipStatus__statusContent">
            <UuiTypography
              className="chipStatus__statusContent--pendingChip Uui-txt-xsmall"
              variant="body1"
            >
              PENDING APPROVAL
            </UuiTypography>
          </div>
        </div>
      );
    case "approved":
      return (
        <div className="chipStatus">
          <div className="chipStatus__statusContent">
            <UuiTypography
              className="chipStatus__statusContent--approvedChip Uui-txt-xsmall"
              variant="body1"
            >
              APPROVED
            </UuiTypography>
          </div>
        </div>
      );
    case "pendingOutline":
      return (
        <div className="chipStatus">
          <div className="chipStatus__tableStatus">
            <UuiTypography
              className="chipStatus__tableStatus--pendingOutlineChip Uui-txt-xsmall"
              variant="body1"
            >
              PENDING APPROVAL
            </UuiTypography>
          </div>
        </div>
      );
    case "approvedOutline":
      return (
        <div className="chipStatus__statusContent">
          <div className="yyy">
            <UuiTypography
              className="chipStatus__statusContent--approvedOutlineChip Uui-txt-xsmall"
              variant="body1"
            >
              APPROVED
            </UuiTypography>
          </div>
        </div>
      );
    default:
      return (
        <div className="chipStatus">
          <UuiTypography
            className="chipStatus__statusContent Uui-txt-xsmall"
            variant="body1"
          >
            not defined
          </UuiTypography>
        </div>
      );
  }
};

export default React.forwardRef<unknown, UuiCurrentStatusProps>(
  UuiCurrentStatus
);
