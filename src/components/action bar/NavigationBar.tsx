import { Link, Typography, Breadcrumbs } from '@mui/material'
import React from 'react'

export interface BreadcrumbLink {
  name: string
  link: string
}

export interface UuiNavigationBarProps {
  path: BreadcrumbLink[]
  header: string
  className: string
}

function UuiNavigationBar({ path, className, header }: UuiNavigationBarProps) {
  return (
    <div className={`navigationBar ${className}`}>
      <Breadcrumbs separator='›' aria-label='breadcrumb'>
        {path.map(({ link, name }, index, array) => (
          <Link color='inherit' href={link}>
            <Typography
              className={`Uui-txt-small--responsive ${array.length - 1 !== index ? 'Uui-txt--primary' : 'Uui-txt-text'}`}
              variant='body1'
            >
              {name}
            </Typography>
          </Link>
        ))}
      </Breadcrumbs>
      <Typography className='Uui-txt-subtitle Uui-txt--primary' variant='h3'>
        {header}
      </Typography>
    </div>
  )
}

export default UuiNavigationBar
