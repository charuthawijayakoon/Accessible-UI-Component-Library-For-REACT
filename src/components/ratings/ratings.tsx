import React from 'react'
import UuiTypography from '../typography'
import { Rating, Stack } from '@mui/material'

const UuiRatings = ({ ...props }) => {
    return (
        <div className='texts_spacing'>
            <div>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </div>

            <div className='texts_spacing'>
                <div className=''>
                <UuiTypography className="Uui-txt-subtletext" variant="body1">Read Only Rating</UuiTypography>
                    
                </div>
                <div className='texts_spacing'>
                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                </div>
            </div>

        </div>


    )
}

export default UuiRatings
