import { Link, Typography, Breadcrumbs, Button } from '@mui/material'
import React from 'react'
import SearchBar from '../search-bar/SearchBar'
import { UuiButton } from '../button'
import UuiFilterButton from '../button/FilterButton'
import UuiTableConfigureButton from '../button/TableConfigureButton'
import CustomSearchBar from '../search-bar/CustomSearchBar'

export interface BreadcrumbLink {
  name: string
  link: string
}

export interface UuiNavigationBarProps {
  path: BreadcrumbLink[]
  header: string
  className: string
}

function UuiNavigationBarWithSearch({ path, className, header }: UuiNavigationBarProps) {
  return (
    <div className='actionTop'>
      <div className={`actionBarWithSearch ${className}`}>
        <div >
        <div className="breadcrums_buttonFlex">
        <div className='breadcumb_flex'>
          <Typography className='Uui-txt-subtitle  ' variant='h3'>
            {header}
          </Typography>
          <Breadcrumbs separator='/' aria-label='breadcrumb'>
            {path.map(({ link, name }, index, array) => (
              <Link color='inherit' href={link}>
                <Typography
                  className={`Uui-txt-small--responsive ${array.length - 1 !== index ? 'Uui-txt--primary' : ''}`}
                  variant='body1'
                >
                  {name}
                </Typography>
              </Link>
            ))}
          </Breadcrumbs>
          </div>
         
          
          <div className='actionTop__btn'>
          <div className='buttonSelect'>
            <UuiButton
              className='Uui-btn--secondary'
              // color='primary'
              // variant='contained'
              size='small'
            >
              SELECT ALL
            </UuiButton>

          </div>

          <div className='actionTop__btn--second'>
            <UuiButton
              className='Uui-btn--primary'
              // color='primary'
              // variant='contained'
              size='small'
            >
              CREATE NEW
            </UuiButton>

          </div>

        </div>
          </div>
          

        </div>
        
      </div>
      <div className='searchWrapper'>
        <div className='searchWrapper__Bar'>
        <CustomSearchBar text={""} advnSearch={false} />
        </div>
        <div className='searchWrapper__BtnWrapper'>
          <UuiFilterButton />
          <UuiTableConfigureButton />
        </div>

      </div>


    </div>


  )
}

export default UuiNavigationBarWithSearch
