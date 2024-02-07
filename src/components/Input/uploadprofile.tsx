import React from "react";
import UuiTypography from "../typography";
import FileUploadIcon from "@mui/icons-material/FileUpload";

const UuiUploadProfile = ({ ...props }) => {
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
            <FileUploadIcon className="iconupload" />
          </div>
          <div className="uploadBox__textFlex">
            <div className="uploadBox__uploadMain-Text">
              Choose files to upload
            </div>
            <div className="uploadBox__uploadsub-Text">
              or drag and drop them here
            </div>
          </div>
        </div>
      </label>
    </div>
  );
};

export default UuiUploadProfile;
