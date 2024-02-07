import { Card, Theme } from "@mui/material";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import { Meta } from "@storybook/react";
import React from "react";
import UuiStatusChip from "./StatusChip";
import UuiCurrentStatus from "./NewUpdateCurrentStatus";
import UuiMediaChip from "./MediaChip";
import UuiMasterChip from "./MasterChip";
// import UuiCheckStatusChip from "./CheckStatusChip";
import UuiNumberChip from "./NumberChip";
import UuiNumberStatusChip from "./NumberStatusChip";
import UuiNatureOfCustomerChip from "./NatureofCustomerChip";
import { useTheme } from "@mui/material/styles";

export default {
  title: "components/Chips",
} as Meta;



export const Default = () => {
  
  return (
    <Card className="componentCard">
      <div className="componentCard__title">Chips</div>
      <h1 className="componentCard__subHeader">Status Chips</h1>
      <div className="componentCard__chips">
        <UuiStatusChip status="active" />
        <UuiStatusChip status="inactive" />
        <UuiStatusChip status="rejected" />
        <UuiStatusChip status="pending" />
        <UuiStatusChip status="onhold" />
        <UuiStatusChip status="confirmed" />
        <UuiStatusChip status="blacklisted" />
        <UuiStatusChip status="approved" />
      </div>
      <h1 className="componentCard__subHeader">Media Chips</h1>
      <div className="componentCard__chips">
        <UuiMediaChip status="Whatsapp" />
        <UuiMediaChip status="Facebook" />
        <UuiMediaChip status="Skype" />
      </div>
      <h1 className="componentCard__subHeader">Master Chips</h1>
      <div className="componentCard__chips">
        <UuiMasterChip status="Corporate" />
        <UuiMasterChip status="Individual" />
        <UuiMasterChip status="Special" />
      </div>
      {/* <h1 className="componentCard__subHeader">Check Status Chips</h1>
      <div className={classes.root}>
        <UuiCheckStatusChip status="Submitted" />
        <UuiCheckStatusChip status="Draft" />
        <UuiCheckStatusChip status="Approved" />
      </div> */}
      <h1 className="componentCard__subHeader">Number Chips</h1>
      <div className="componentCard__chips">
        <UuiNumberChip />
        <UuiNumberStatusChip />
      </div>
      <h1 className="componentCard__subHeader">Nature of the Customer</h1>
      <div className="componentCard__chips">
        <UuiNatureOfCustomerChip />
      </div>
      <h1 className="componentCard__subHeader">New Current Status</h1>
      <div className="componentCard__chips">
      <UuiCurrentStatus status="new" />
      <UuiCurrentStatus status="tobecontacted" />
      <UuiCurrentStatus status="contacted" />
      <UuiCurrentStatus status="reviewed" />
    </div>
    </Card>
  );
};
