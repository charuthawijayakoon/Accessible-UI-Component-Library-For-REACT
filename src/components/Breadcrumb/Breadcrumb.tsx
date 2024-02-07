import React from 'react'
import UuiTypography from '../typography'
import { Card, CardContent, Theme, Grid, Divider, Breadcrumbs, Link } from "@mui/material";




function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}


const UuiBreadcrumb = ({ ...props }) => {
   
    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb">
                <Link className='breadcrumb-defalut' color="inherit" href="/" onClick={handleClick}>
                    First Item
                </Link>
                <Link className='breadcrumb-defalut' href="/getting-started/installation/" onClick={handleClick}>
                    Second Item
                </Link>
                <UuiTypography className='breadcrumb-active'>Third Item</UuiTypography>
            </Breadcrumbs>
        </div>
    )
}

export default UuiBreadcrumb
