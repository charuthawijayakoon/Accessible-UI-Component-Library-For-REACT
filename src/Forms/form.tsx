import React from "react";
import Typography from "../components/typography";
import UuidropDown from "../components/Input/dropDown";
import UuiinputField from "../components/Input/inputField";
import UuiDatePicker from "../components/Input/datePicker";
import UuiaddContact from "../components/Input/addContent";
import UuideletContact from "../components/Input/deleteContact";
import Uuiaddlocation from "../components/Input/addAddress";
import { Divider, FormControlLabel } from "@mui/material";
import UuiAddBtn from "../components/button/addBtn";
import UuiTypography from "../components/typography";
import UuiSwitch from "../components/switch";
import UuiUploadProfile from "../components/Input/uploadprofile";
import UuiEsignature from "../components/Input/esignature";

const SampleFrom = ({ ...props }) => {
  return (
    <div className="container">
      <div className="formsTxt">
        <div className="form-mainHeading">Basic Details</div>
        <div className="form-subHeading">Add Basic Details</div>
      </div>

      <div className="inputs">
        <div className="formCard__row">
          <div className="formCard__item formCard__item--flex formColum ">
            <UuidropDown />
            <UuiinputField />
          </div>
          <div className="formCard__item">
            <UuiinputField />
          </div>
        </div>
        <div className="formCard__row">
          <div className="formCard__item">
            <UuiDatePicker />
          </div>
          <div className="formCard__item">
            <UuidropDown />
          </div>
        </div>
        <div className="formCard__row">
          <div className="formCard__item">
            <UuiinputField />
          </div>
          <div className="formCard__item">
            <UuidropDown />
          </div>
        </div>

        <div className="formCard__row">
          <div className="formCard__item">
            <UuiDatePicker />
          </div>
          <div className="formCard__item">
            <UuidropDown />
          </div>
        </div>
        <div className="formCard__row">
          <div className="formCard__item  formCard__item--flex formColum ">
            <UuidropDown className="staffDropDown" />
            <UuiinputField className="staffInputField" />
            <UuiAddBtn />
          </div>
          <div className="formCard__item"></div>
        </div>
        <Divider className="dividerRule"></Divider>
        <div className="formCard__row">
          <div className="formCard__item formCard__title--spacing">
            <div className="formsTxt ">
              <div className="form-mainHeading">Contact Details</div>
              <div className="form-subHeading">Add Contact Details</div>
            </div>
          </div>
        </div>
        <div className="formCard__row">
          <div className="formCard__item">
            <UuiaddContact />
          </div>
        </div>
        <div className="formCard__row">
          <div className="formCard__item">
            <UuideletContact />
          </div>
        </div>
        <div className="formCard__row">
          <div className="formCard__item">
            <Uuiaddlocation />
          </div>
          <div className="formCard__item"></div>
        </div>
      </div>
      <Divider className="dividerLine" />
      <div className="formCard__row">
        <div className="formCard__item">
          <div className="formsTxt texts_spacing">
            <div className="form-mainHeading">Other Details</div>
            <div className="form-subHeading">Add Other Details</div>
          </div>
        </div>
      </div>
      <div className="formCard__row">
        <div className="formCard__item">
          {" "}
          <FormControlLabel
            control={<UuiSwitch color="primary" name="gilad" />}
            label={
              <UuiTypography className="Uui-txt-small" variant="body1">
                System User
              </UuiTypography>
            }
          />
        </div>
        <div className="formCard__item">
          <FormControlLabel
            control={<UuiSwitch color="primary" name="gilad" />}
            label={
              <UuiTypography className="Uui-txt-small" variant="body1">
                Active
              </UuiTypography>
            }
          />{" "}
        </div>
      </div>
      <div className="formCard__row">
        <div className="formCard__item">
          <UuiinputField />
        </div>
        <div className="formCard__item">
          <UuidropDown />
        </div>
      </div>
      <div className="formCard__row">
        <div className="formCard__item">
          <UuidropDown />
        </div>
        <div className="formCard__item">
          <UuidropDown />
        </div>
      </div>
      <div className="formCard__row">
        <div className="formCard__item">
          <UuidropDown />
        </div>
        <div className="formCard__item">
          <UuidropDown />
        </div>
      </div>
      <Divider className="dividerRule"></Divider>
      <div className="formCard__row">
        <div className="formCard__item">
          <div className="formsTxt texts_spacing">
            <div className="form-mainHeading">Additional Details</div>
            <div className="form-subHeading">Add Additional Details</div>
          </div>
        </div>
      </div>
      <div className="formCard__row">
        <div className="formCard__item">
          <div className="form-subHeading signatureHeading">Profile Image Uploader</div>
        </div>
        <div className="formCard__item">
          <div className="form-subHeading signatureHeading">E Signature Uploader</div>
        </div>
      </div>
      <div className="formCard__row inputSpacing">
        <div className="formCard__item">
          <UuiUploadProfile />
        </div>
        <div className="formCard__item">
          <UuiEsignature />
        </div>
      </div>
      <div className="formCard__row">
          <div className="formCard__item">
            <UuiDatePicker />
          </div>
          <div className="formCard__item">
            <UuiDatePicker />
          </div>
        </div>
        
    </div>
  );
};

export default SampleFrom;
