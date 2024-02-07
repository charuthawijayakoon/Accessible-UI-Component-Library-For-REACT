import React from 'react'
import UuiTypography from '../typography'
import { TextField } from '@mui/material'

const UuiEsignature = ({...props}) => {
    return (
       
        <div className=" uploadCard">
          <input
            accept="image/*"
            className="formCard__item--inputBox"
            id="icon-button-file"
            type="file"
          />
          <label htmlFor="icon-button-file">
            <div className="uploadBox">
              <div className="uploadBox__uploadImg">
                <img className='imgSignature' src="https://infoinsdev.informaticsint.com/api/v1/dms-center/file/public/download?path=UIUX_Common_Components/signatureIcon.png" alt="" />
              </div>
              <div className="uploadBox__textFlex">
                <div className="uploadBox__uploadMain-Text">
                E Signature to place on your document
                </div>
                <div className="uploadBox__uploadsub-Text">
                Signature maker to create an eSignature
                </div>
              </div>
            </div>
          </label>
        
       
      </div>
    )
}

export default UuiEsignature