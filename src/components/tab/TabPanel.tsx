import React from 'react'
import UuiBox from '../box'

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
  className?: string
}
const UuiTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <UuiBox p={3}>{children}</UuiBox>}
    </div>
  )
}

export default UuiTabPanel
