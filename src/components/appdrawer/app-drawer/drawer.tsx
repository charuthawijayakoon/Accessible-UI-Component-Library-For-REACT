import React, { useState } from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AppDrawerList, {
    SidebarParentLink,
} from "../AppDrawerList/AppDrawerList";
import AppDrawerHeader, {
    UserInfo,
} from "../app-drawer-header/AppDrawerHeader";
import AppDrawerTopBar from "../app-drawer-TopBar/app-drawer-TopBar";
import { action } from "@storybook/addon-actions";
import { UuiButton } from "../../button";

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface TemporaryDrawerProps {
    open: boolean;
    variant?: "permanent" | "persistent" | "temporary";
    onClose(): void;
    links: SidebarParentLink[];
    userInfo: UserInfo;
    navigate(to: string): void;
    isMainLink: boolean;
}

export default function TemporaryDrawer({
    userInfo,
    links,
    isMainLink,
}: TemporaryDrawerProps) {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const [open, setOpen] = useState<boolean>(false);

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
        </Box>
    );

    return (
        <>

            <div>
                {(['left'] as const).map((anchor) => (
                    <React.Fragment key={anchor}>
                        <UuiButton
                            variant="contained"
                            className="Uui-btn--primary buttonGap"
                            onClick={toggleDrawer(anchor, true)}
                        >
                            Open Drawer
                        </UuiButton>
                        {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            {list(anchor)}
                            <div className="appDrawer__gradient--top"></div>
                            <AppDrawerTopBar />
                            <AppDrawerHeader data={userInfo} />
                            <AppDrawerList links={links} navigate={action("navigate")} />
                        </Drawer>

                    </React.Fragment>
                ))}
            </div>
        </>
    );
}
