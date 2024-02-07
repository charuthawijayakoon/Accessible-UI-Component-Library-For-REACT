import { SidebarParentLink } from './AppDrawerList/AppDrawerList'
import { UserInfo } from '../appdrawer/app-drawer-header/AppDrawerHeader'

export const links: SidebarParentLink[] = [
  { name: 'Dashboard', icon: 'Dashboard', link: '' },
  {
    name: 'Global',
    icon: 'Language',
    link: '',
    children: [
      {
        name: 'References',
        icon: '',
        link: '',
        chips: { size: 'small', label: '9' }
      },
      { name: 'Additional Information', icon: '', link: '' },
      { name: 'Number Format', icon: '', link: '' }
    ]
  },
  { name: 'Class / Product Definition ', icon: 'People', link: '' },
  { name: 'User Management', icon: 'People', link: '' },
  {
    name: 'Settings',
    icon: 'Settings',
    link: '',
    children: [
      { name: 'Theme selection', icon: '', link: '' },
      { name: 'Language selection', icon: '', link: '' },
      { name: 'Email Settings', icon: '', link: '' },
      { name: 'Date Format', icon: '', link: '' }
    ]
  },
  {
    name: 'Notification Configuration',
    icon: 'Notifications',
    link: ''
  }
]

export const userInfo: UserInfo = {
  avatar: '/profile.png',
  username: 'Saman Perera',
  email: 'saman.perera@companyname.com'
}
