import React from "react";
import { styled } from "@mui/material/styles";
import { Badge, Chip, Divider, ListItemIcon, ListItemText, Menu, MenuItem, Select, Theme, Toolbar, useMediaQuery } from "@mui/material";
import clsx from "clsx";
import { UuiIconButton } from "../button";
import { useTheme, makeStyles, createStyles } from "@mui/material/styles";
import UuiTypography from "../typography";
// import "remixicon/fonts/remixicon.css";
import IconButton from "../button/IconButton";
import UuiAvatar from "../avatar";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import NotificationsNoneIcon from '@mui/icons/NotificationsNone'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import UuiChip from "../Chips/Chip";

const PREFIX = "UuiAppBar";

const classes = {
  appBar: `${PREFIX}-appBar`,
  appBarShift: `${PREFIX}-appBarShift`,
  menuButton: `${PREFIX}-menuButton`,
};

const Root = styled("div")(() => ({
  [`& .${classes.appBar}`]: {
    transition: useTheme().transitions.create(["margin", "width"], {
      easing: useTheme().transitions.easing.sharp,
      duration: useTheme().transitions.duration.leavingScreen,
    }),
    backgroundColor: "#FFFFFF",
    width: `calc(100% - ${rightDrawerWidth}px)`,
    marginRight: rightDrawerWidth,
  },

  [`& .${classes.appBarShift}`]: {
    width: `calc(100% - ${drawerWidth + rightDrawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: useTheme().transitions.create(["margin", "width"], {
      easing: useTheme().transitions.easing.easeOut,
      duration: useTheme().transitions.duration.enteringScreen,
    }),
  },

  [`& .${classes.menuButton}`]: {
    marginRight: useTheme().spacing(2),
  },
}));

const drawerWidth = 280;
const rightDrawerWidth: number = 56;

export interface AppBarProps {
  open: boolean;
  onDrawerToggle(): void;
}

function UuiAppBarField({ onDrawerToggle, open }: AppBarProps) {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Root
      // position='fixed'
      
      className={
        matches
          ? clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })
          : classes.appBar
      }
    >
      <Toolbar style={{justifyContent:'space-between'}}>
        <UuiIconButton
          color="primary"
          aria-label="open drawer"
          onClick={onDrawerToggle}
          edge="start"
          className={clsx(classes.menuButton, open)}
        >
          <i className="ri-menu-line"></i>
        </UuiIconButton>
        {/* <UuiTypography variant="body1" noWrap>
          Dashboard
        </UuiTypography> */}

        <div style={{ justifyContent: 'flex-end', display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Chip label="Super User"
              color="success"
              variant="outlined"
            />
          </div>
          <div className='translateDropdown'>
            <Select
              labelId="demo-simple-select-label"
              style={{ borderRadius: 4, padding: '2px 10px', marginLeft: '20px', width: '160px', backgroundColor: '#F9F9F9', height: '46px' }}
            >

              <MenuItem>eee</MenuItem>
            </Select>
          </div>

          <div className='menuIconListWrapper'>
            <div className='appDrawer__iconlistMenu'>
              <IconButton className='firstNotification' edge='start' color='inherit' aria-label='menu'>
                <Badge badgeContent={4} color='error'>
                  <NotificationsNoneIcon className='appDrawer__iconMenu' />
                </Badge>
              </IconButton>
              <IconButton edge='start' color='inherit' aria-label='menu'>

                {/* <UuiAvatar /> */}
                <AccountCircleIcon className='appDrawer__iconMenu' />

              </IconButton>
            </div>


            <Menu
              id="simple-menu"
              keepMounted
              className='appBarLog' open={false}              >
              <MenuItem>
                <ListItemIcon className='Uui-menu__item'>
                  <AccountCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="My Profile" />
              </MenuItem>
              <MenuItem>
                <ListItemIcon className='Uui-menu__item'>
                  <RecentActorsIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="My account" />
              </MenuItem>
              <Divider className='logoutMenu'></Divider>
              <MenuItem className='logOutMenu' >
                <ListItemIcon className='Uui-menu__item'>
                  <ExitToAppIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </MenuItem>
            </Menu>

          </div>
        </div>
      </Toolbar>
    </Root>
  );
}

const UuiAppBar: React.ForwardRefRenderFunction<unknown, AppBarProps> = (
  props,
  ref
) => {
  return <UuiAppBarField {...props} />;
};

export default React.forwardRef<unknown, AppBarProps>(UuiAppBar);
