
import React from 'react'
import UuiDatePicker from '../components/Input/datePicker'
import UuidropDown from '../components/Input/dropDown'
import UuiinputField from '../components/Input/inputField'


const UuiFourColumnsForm = ({...props}) => {
    return (
        
        <div className="formCard__row">
          <div className="formCard__item">
            <UuiDatePicker />
          </div>
          <div className="formCard__item">
            <UuidropDown />
          </div>
          <div className="formCard__item">
            <UuiinputField />
          </div>
          <div className="formCard__item">
            <UuiinputField />
          </div>
        </div>
    )
}

export default UuiFourColumnsForm