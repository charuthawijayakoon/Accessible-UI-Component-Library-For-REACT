// import {
//   Badge,
//   createStyles,
//   IconButton,
//   makeStyles,
//   Menu,
//   MenuItem,
//   Theme
// } from '@material-ui/core'
import { IconButton } from '@mui/material';
import React from 'react'
// import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
// import AccountCircleIcon from '@material-ui/icons/AccountCircle'/
// import companyNewLogo from "../../../resources/companyNewLogo";

export default function AppDrawerTopBar() {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <div className='appDrawer__topBar'>
      <IconButton className='topCompanyBtn' edge='start' color='inherit' aria-label='menu'>
        <img src='https://infoinsdev.informaticsint.com/api/v1/dms-center/file/public/download?path=UIUX_Common_Components/infotxt.svg' />
      </IconButton>
      {/* <div className='appDrawer__iconlist'>
        <IconButton edge='start' color='inherit' aria-label='menu'>
          <Badge badgeContent={4} color='error'>
            <NotificationsNoneIcon className='appDrawer__icon' />
          </Badge>
        </IconButton>
        <IconButton edge='start' color='inherit' aria-label='menu' onClick={handleClick}>
          <AccountCircleIcon className='appDrawer__icon' />
        </IconButton>
      </div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={() => { userLogout() }}>Logout</MenuItem>
      </Menu> */}
    </div>
    // <div className='appDrawer__topBar'>
    //   <IconButton edge='start' color='inherit' aria-label='menu'>
    //     <img src='/companyLogo.svg' />
    //   </IconButton>
    //   <div className='appDrawer__iconlist'>
    //     <IconButton edge='start' color='inherit' aria-label='menu'>
    //       <Badge badgeContent={4} color='error'>
    //         <NotificationsNoneIcon className='appDrawer__icon' />
    //       </Badge>
    //     </IconButton>
    //     <IconButton edge='start' color='inherit' aria-label='menu' onClick={handleClick}>
    //       <AccountCircleIcon className='appDrawer__icon' />
    //     </IconButton>
    //   </div>
    //   <Menu
    //     id="simple-menu"
    //     anchorEl={anchorEl}
    //     keepMounted
    //     open={Boolean(anchorEl)}
    //     onClose={handleClose}
    //   >
    //     <MenuItem onClick={handleClose}>Profile</MenuItem>
    //     <MenuItem onClick={handleClose}>My account</MenuItem>
    //     <MenuItem onClick={handleClose}>Logout</MenuItem>
    //   </Menu>
    // </div>
  )
}
