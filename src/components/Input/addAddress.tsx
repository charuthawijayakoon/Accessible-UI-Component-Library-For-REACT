


import React from 'react'
import UuiTypography from '../typography'
import { UuiButton } from '../button';

const Uuiaddlocation = ({...props}) => {
    return (
        <div className="">
        <UuiButton
          id="add-location"
          variant="outlined"
          className="Uui-btn--dashed addAddressBtnStaff"
          type={"submit"}
        >
          + Add New Location
        </UuiButton>
        </div>
    )
}

export default Uuiaddlocation
