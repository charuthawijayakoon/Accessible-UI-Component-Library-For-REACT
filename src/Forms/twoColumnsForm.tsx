import React from 'react'
import UuiDatePicker from '../components/Input/datePicker'
import UuidropDown from '../components/Input/dropDown'


const UuiTwoColumnsForm = ({...props}) => {
    return (
        
        <div className="formCard__row">
          <div className="formCard__item">
            <UuiDatePicker />
          </div>
          <div className="formCard__item">
            <UuidropDown />
          </div>
        </div>
    )
}

export default UuiTwoColumnsForm