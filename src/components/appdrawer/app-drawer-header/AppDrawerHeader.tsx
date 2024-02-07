import { createStyles, makeStyles, Theme } from '@mui/material';
import React from 'react';
import UuiAvatar from '../../avatar';
import UuiTypography from '../../typography';

export interface UserInfo {
  avatar: string
  username: string
  email: string
}

export interface UserDetails {
  data: UserInfo
}
export default function AppDrawerHeader({ data }: UserDetails) {
  

  return (
    <div className="drawerHeader">
      <UuiAvatar
        alt={data.email}
        src={data.avatar}
        className="largeIcon"
      />
      <div className='appDrawer__title'>
        <UuiTypography variant='body1' className='Uui-txt-bold Uui-text-blue'>
          {data.username}
        </UuiTypography>
        <UuiTypography variant='body1' className='Uui-txt-small Uui-txt-umbra'>
         {data.email}
        </UuiTypography>
      </div>

    </div>
  )
}
