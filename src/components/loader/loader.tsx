import React from 'react'
import UuiTypography from '../typography'

const UuiLoader = ({...props}) => {
    return (
        <div className='info-loader-wrapper'>
            <img src="https://infoinsdev.informaticsint.com/api/v1/dms-center/file/public/download?path=UIUX_Common_Components/loadingNew.gif" alt="" />
        </div>
    )
}

export default UuiLoader
