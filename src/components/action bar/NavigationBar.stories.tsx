import { Meta } from '@storybook/react/'
import UuiNavigationBar from './NavigationBar'
import React from 'react'

export default {
  title: 'Layouts/NavigationBar'
} as Meta

export const Default = () => {
  return (
    <div>
      <UuiNavigationBar className={''} path={[]} header={'Header'} />
    </div>
  )
}
