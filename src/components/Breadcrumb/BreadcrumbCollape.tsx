import React from 'react'
import UuiTypography from '../typography'
import { Card, CardContent, Theme, Grid, Divider, Breadcrumbs, Link } from "@mui/material";
//===================================================== import carousel from '../../resources/carousel.png';


// c
function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}


const UuiBreadcrumbCollape = ({ ...props }) => {
    
    return (
        <div>
            <Breadcrumbs maxItems={2} aria-label="breadcrumb">
                <Link className='breadcrumb-defalut' href="#" onClick={handleClick}>
                    Home
                </Link>
                <Link className='breadcrumb-defalut' href="#" onClick={handleClick}>
                    Catalog
                </Link>
                <Link className='breadcrumb-defalut' href="#" onClick={handleClick}>
                    Accessories
                </Link>
                <Link className='breadcrumb-defalut' href="#" onClick={handleClick}>
                    New Collection
                </Link>
                <UuiTypography className='breadcrumb-active'>Belts</UuiTypography>
            </Breadcrumbs>
        </div>
    )
}

export default UuiBreadcrumbCollape
