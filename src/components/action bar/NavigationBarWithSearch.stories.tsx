import { Meta } from '@storybook/react/'
import React from 'react'
import UuiNavigationBarWithSearch from './NavigationBarWithSearch'
import { Card } from '@mui/material'

export default {
  title: 'Components/ActionBar'
} as Meta

export const Default = () => {
  return (
    <Card className="componentCard">
      <div className="componentCard__title">
        Action Bar
      </div>
      <div>
        <UuiNavigationBarWithSearch className=''
          path={[
            {
              name: 'Admin Module',
              link: '/'
            },
            {
              name: 'Branch Hierarchy',
              link: '/'
            }
          ]}
          header='Branch Hierarchy' />
      </div>

    </Card>

  )
}
