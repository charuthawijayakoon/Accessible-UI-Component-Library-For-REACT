import React from "react";
import UuiDatePicker from "../components/Input/datePicker";
import UuidropDown from "../components/Input/dropDown";
import UuiinputField from "../components/Input/inputField";

const UuiColumnsFlexForm = ({ ...props }) => {
  return (
    <div className="formCard__row">
      <div className="formCard__item formCard__item--flex formColum ">
        <UuidropDown />
        <UuiinputField />
      </div>
      <div className="formCard__item">
        <UuiinputField />
      </div>
    </div>
  );
};

export default UuiColumnsFlexForm;
