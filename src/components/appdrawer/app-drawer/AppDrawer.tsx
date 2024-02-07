import { Drawer, Theme } from "@mui/material";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import React, { useState } from "react";
import AppDrawerList, {
  SidebarParentLink,
} from "../AppDrawerList/AppDrawerList";
import AppDrawerHeader, {
  UserInfo,
} from "../app-drawer-header/AppDrawerHeader";
import AppDrawerTopBar from "../app-drawer-TopBar/app-drawer-TopBar";
import { action } from "@storybook/addon-actions";

import { useTheme } from "@mui/material/styles";
import { UuiButton } from "../../button";
interface UuiAppDrawerProps {
  open: boolean;
  variant?: "permanent" | "persistent" | "temporary";
  onClose(): void;
  links: SidebarParentLink[];
  userInfo: UserInfo;
  navigate(to: string): void;
  isMainLink: boolean;
}

const drawerWidth = 280;

export const useStyles = makeStyles(() =>
  createStyles({

    drawer: {

      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      overflow: "auto",
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: useTheme().spacing(0, 1),
      ...useTheme().mixins.toolbar,
      justifyContent: "center",
    },
  })
);

function UuiAppDrawer({
  onClose,
  variant,
  userInfo,
  links,
  navigate,
  isMainLink,
}: UuiAppDrawerProps) {
  const { drawer, drawerPaper, drawerHeader } = useStyles();
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <UuiButton
        variant="contained"
        className="Uui-btn--primary buttonGap"
        onClick={() => { setOpen(true) }}
      >
        Open Drawer
      </UuiButton>
      <Drawer
        className="appDrawer"
        anchor="left"
        open={open}
        classes={{
          paper: drawerPaper,
        }}
        variant="persistent"
      >
        <div className="appDrawer__gradient--top"></div>
        <AppDrawerTopBar />
        <AppDrawerHeader data={userInfo} />
        <AppDrawerList links={links} navigate={action("navigate")} />
      </Drawer>
    </>

  );
}

export default UuiAppDrawer;
