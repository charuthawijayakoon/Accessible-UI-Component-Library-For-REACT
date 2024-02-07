import { Chip, Tooltip } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import React from "react";
import clsx from "clsx";
import UuiTypography from "../typography";
//import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { UuiIconButton } from "../button";

interface NatureOfCustomerChipProps {}

export type UuiNatureOfCustomerChipProps = NatureOfCustomerChipProps;

const UuiNatureOfCustomerChip: React.ForwardRefRenderFunction<
  unknown,
  UuiNatureOfCustomerChipProps
> = (props, ref) => {
  return (
    <div>
      <Tooltip title="None" arrow>
        <UuiIconButton size="small">
          {/* <FiberManualRecordIcon className={clsx(classes.size, classes.none)} /> */}
          <i className="ri-circle-fill"></i>
        </UuiIconButton>
      </Tooltip>
      <Tooltip title="Very Friendly" arrow>
        <UuiIconButton size="small">
          {/* <FiberManualRecordIcon className={clsx(classes.size, classes.green)} /> */}
          <i className="ri-circle-fill"></i>
        </UuiIconButton>
      </Tooltip>
      <Tooltip title="Friendly" arrow>
        <UuiIconButton size="small">
          {/* <FiberManualRecordIcon className={clsx(classes.size, classes.lightGreen)} /> */}
          <i className="ri-circle-fill"></i>
        </UuiIconButton>
      </Tooltip>
      <Tooltip title="Neutral" arrow>
        <UuiIconButton size="small">
          {/* <FiberManualRecordIcon className={clsx(classes.size, classes.yellow)} /> */}
          <i className="ri-circle-fill"></i>
        </UuiIconButton>
      </Tooltip>
      <Tooltip title="Aggressive " arrow>
        <UuiIconButton size="small">
          {/* <FiberManualRecordIcon className={clsx(classes.size, classes.orange)} /> */}
          <i className="ri-circle-fill"></i>
        </UuiIconButton>
      </Tooltip>
      <Tooltip title="Very Aggressive " arrow>
        <UuiIconButton size="small">
          {/* <FiberManualRecordIcon className={clsx(classes.size, classes.red)} /> */}
          <i className="ri-circle-fill"></i>
        </UuiIconButton>
      </Tooltip>
    </div>
  );
};

export default React.forwardRef<unknown, UuiNatureOfCustomerChipProps>(
  UuiNatureOfCustomerChip
);
