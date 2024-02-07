import React from "react";
import UuiTypography from "../typography";

const UuiUploadedDocument = ({ ...props }) => {
  return (
    <div className="documentContent">
      <div className="contentFlex">
        <div className="documentContent__textIconFlex">
          <div className="documentContent__icon">
            <i className="ri-file-excel-line"></i>
          </div>
          <div className="documentContent__text">
            <UuiTypography className="documentContent__text--mainText">
              Risk Locations
            </UuiTypography>
            <UuiTypography className="documentContent__text--subText">
              {" "}
              4 mb (File Size)
            </UuiTypography>
          </div>
        </div>
        <div className="documentContent__editIcons">
          <div className="documentContent__editIcons--eyeIcon">
            <i className="ri-eye-line"></i>
          </div>
          <div className="documentContent__editIcons--downloadIcon">
            <i className="ri-download-2-line"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UuiUploadedDocument;
