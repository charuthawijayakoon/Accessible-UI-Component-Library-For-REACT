import React from 'react'
import UuiTypography from '../typography'

const UuiFooter = ({...props}) => {
    return (
        <footer className="footerCard">
            <UuiTypography className="Uui-txt-small--responsive Uui-txt-subtletext" variant="body1">© Universal UI. All Rights Reserved</UuiTypography>
        </footer>
    )
}

export default UuiFooter
