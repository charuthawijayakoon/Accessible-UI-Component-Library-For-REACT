import { Meta } from "@storybook/react";
import { Card } from "@mui/material";
import React from "react";
import UuiUploadedDocument from "./uploadedDocument";

export default {
  title: "Components/UploadedDocument",
} as Meta;

export const Default = () => {
  return (
    <Card className="componentCard">
      <div className="componentCard__title btnpadding">Uploaded Document</div>
      <div className="formCard__row rowPadding">
        <div className="formCard__item">
          <UuiUploadedDocument />
        </div>
        <div className="formCard__item"></div>
      </div>
      <div className="formCard__row rowPadding">
        <div className="formCard__item">
          {/* <UuiEsignature /> */}
        </div>
      </div>
      <div className="formCard__row rowPadding">
      <div className="formCard__item">
      
      </div>
      </div>
    </Card>
  );
};
