
import Tooltip from "@mui/material/Tooltip";
import React from "react";
import { UuiIconButton } from ".";
interface DynamicProps {
  title: any;
  children: any;
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}
export default function DynamicButton(props: DynamicProps) {
  return (
    <UuiIconButton
      
      size="small"
      onClick={props.onClick}
      
    >
      <Tooltip title={props.title} placement= "left" arrow>
        <div>{props.children}</div>
      </Tooltip>
    </UuiIconButton>


 
  );
}
