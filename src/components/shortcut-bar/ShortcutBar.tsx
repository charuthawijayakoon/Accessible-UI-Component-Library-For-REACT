import React, { useState } from "react";
import UuiTypography from "../typography";
import { Drawer, Tooltip, List, ListItem } from "@mui/material";
import { UuiIconButton } from "../button";

const ShortcutBar = ({ ...props }) => {
  const [shortCutsLs, setShortCutLs] = useState<any[]>([]);
  const [isExpand, setIsExpand] = useState<boolean>(false);

  return (
    <div className="right_drower">
      <Drawer
        // className={classes.rightDrawer}
        variant="permanent"
        // classes={{
        //   paper: classes.rightDrawerPaper
        // }}
        anchor="right"
      >
        <div className="chatbar ">
          <ul className="chatbar__iconHolderList">
            <List>
              <UuiIconButton
                aria-label="open drawer"
                className="chatbar__icon"
                onClick={() => {}}
              >
                <Tooltip title="Manage Shortcuts">
                  <i className="ri-more-fill  chatbar__iconColor  "></i>
                </Tooltip>
              </UuiIconButton>
            </List>
            <List>
              <UuiIconButton
                aria-label="open drawer"
                className="chatbar__icon"
                onClick={() => {}}
              >
                <Tooltip title="Full Screen">
                  <i className="ri-fullscreen-line chatbar__iconColor"></i>
                </Tooltip>
              </UuiIconButton>
            </List>
            <List>
              <UuiIconButton
                aria-label="open drawer"
                className="chatbar__icon"
                onClick={() => {}}
              >
                <Tooltip title="Claims">
                  <i className="ri-auction-line chatbar__iconBackground"></i>
                </Tooltip>
              </UuiIconButton>
            </List>
            <List>
              <UuiIconButton
                aria-label="open drawer"
                className="chatbar__icon"
                onClick={() => {}}
              >
                <Tooltip title="Customers">
                  <i className="ri-group-line chatbar__iconBackground"></i>
                </Tooltip>
              </UuiIconButton>
            </List>
            <List>
              <UuiIconButton
                aria-label="open drawer"
                className="chatbar__icon"
                onClick={() => {}}
              >
                <Tooltip title="Reports">
                  <i className="ri-file-copy-2-line chatbar__iconBackground"></i>
                </Tooltip>
              </UuiIconButton>
            </List>
            <List>
              <UuiIconButton
                aria-label="open drawer"
                className="chatbar__icon"
                onClick={() => {}}
              >
                <Tooltip title="Operations">
                  <i className="ri-settings-4-line chatbar__iconBackground"></i>
                </Tooltip>
              </UuiIconButton>
            </List>
          </ul>
        </div>
      </Drawer>
    </div>
  );
};

export default ShortcutBar;
