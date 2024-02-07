import {
  Chip,
  Collapse,
  createStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  makeStyles,
  Theme
} from '@mui/material'
//   import ExpandLess from '@material-ui/icons/ExpandLess'
//   import ExpandMore from '@material-ui/icons/ExpandMore'

import React, { Fragment, PropsWithChildren, useState } from 'react'
//   import * as Icons from '@material-ui/icons'
import clsx from 'clsx'
import UuiTypography from '../../typography'

const drawerWidth = 280

export interface SidebarLink {
  name: string
  link: string
  icon?: string
  chips?: {
    size: string
    label: string
  }
}

export interface SidebarParentLink extends SidebarLink {
  children?: SidebarLink[]
}


interface SidebarSubItemProps {
  link: SidebarLink
  navigate(to: string): void
}

function SidebarSubItem({ link, navigate }: SidebarSubItemProps) {

  return (
    <ListItem
      button
      onClick={() => navigate(link.link)}
    >
      <ListItemText
        inset
        primary={
          <UuiTypography
            variant='body1'
            className='Uui-txt-small Uui-header-second'
          >
            {link.name}
          </UuiTypography>
        }
      />
      {link.chips && (
        <Chip
          size='small'
          label={link.chips.label}
          className="notificationChip Uui-chip--barossa Uui-txt-button"
        />
      )}
    </ListItem>
  )
}

interface SidebarItemExpandIconProps {
  open: boolean
}

function SidebarItemExpandIcon({ open }: SidebarItemExpandIconProps) {
  if (open) return <i className="ri-arrow-up-s-line appDrawer__icon"></i>
  return <i className="ri-arrow-down-s-line appDrawer__icon"></i>
}

function ParentLink({
  link,
  navigate,
  children
}: PropsWithChildren<SidebarItemProps>) {
  if (link.children) return <Fragment>{children}</Fragment>

  return (
    <a onClick={() => navigate(link.link)} href='#'>
      {children}
    </a>
  )
}

interface SidebarItemProps {
  link: SidebarParentLink
  navigate(to: string): void
}

function SidebarItem({ link, navigate }: SidebarItemProps) {

  const [open, setOpen] = useState<boolean>(false)

  return (
    <ParentLink link={link} navigate={navigate}>
      <ListItem button onClick={() => setOpen(!open)}>
        <ListItemIcon>
          {/* {link.icon &&
              React.createElement((Icons as any)[link.icon], {
                className: 'appDrawer__icon'
              })} */}
        </ListItemIcon>
        <ListItemText
          primary={
            <UuiTypography
              variant='body1'
              className='Uui-txt-small Uui-header-second'
            >
              {link.name}
            </UuiTypography>
          }
        />
        {link.children && <SidebarItemExpandIcon open={open} />}
      </ListItem>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          {link.children?.map((subLinks) => (
            <SidebarSubItem link={subLinks} navigate={navigate} />
          ))}
        </List>
      </Collapse>
    </ParentLink>
  )
}

export interface AppDrawerListProps {
  width?: number
  links: SidebarParentLink[]
  navigate(to: string): void
}

export default function AppDrawerList({ links, navigate }: AppDrawerListProps) {



  return (
    <List
      component='nav'
      aria-labelledby='nested-list-subheader'
      subheader={
        <ListSubheader disableSticky={true} className='appDrawer__listTitle iit-sub-header' component='div' id='nested-list-subheader'>
          <UuiTypography className='Uui-txt-pretitle Uui-txt-iris'>
            Dashboard
          </UuiTypography>
          <UuiTypography className='Uui-txt-small Uui-txt-umbra'>
            Universal UI
          </UuiTypography>
        </ListSubheader>
      }
      className="drawerList"
    >
      <div className='appDrawerListItem'>
        {links.map((link) => (
          <SidebarItem link={link} navigate={navigate} />
        ))}

      </div>

    </List>
  )
}
