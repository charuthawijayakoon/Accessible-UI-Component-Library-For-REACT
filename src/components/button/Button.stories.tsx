import { Card, FormControlLabel, Theme } from "@mui/material";

import { Meta } from "@storybook/react";
import React from "react";
import { UuiButton } from ".";
// import AddIcon from "@mui/icons-material/Add";
import UuiTypography from "../typography";
import UuiAvatar from "../avatar";
import UuiAddButton from "./AddButton";
import UuiDeleteButton from "./DeleteButton";
import UuiDocumentButton from "./DocumentButton";
import UuiDownloadButton from "./DownloadButton";
import UuiEditButton from "./EditButton";
import UuiMoreButton from "./MoreButton";
import UuiNotInterestButton from "./NotInterestButton";
import UuiPrintButton from "./PrintButton";
import UuiRemoveButton from "./RemoveButton";
import UuiSaveButton from "./SaveButton";
import UuiSettingsButton from "./SettingsButton";
import UuiStopButton from "./StopButton";
import UuiViewButton from "./ViewButton";
import UuiprogressBar from "../progressBar/progress";


import FinshButtonPrimary from "./FinshButtonPrimary";
import UuiBackPrimaryButton from "./BackPrimaryButton";

import Button from "./Button";
import UuiAddBtn from "./addBtn";
import UuiDeleteBtn from "./deleteBtn";

export default {
  title: "components/Button",
  component: Button,
} as Meta;

export const Default = () => {
  return (
    <Card className="componentCard">
      <div className="btnpadding ">Buttons</div>

      <div className="buttonContent">
        <div className="formCard__row colorPalte">
          <div className="formCard__item">
            <UuiButton
              variant="contained"
              className="Uui-btn--primary buttonGap"
            >
              Button
            </UuiButton>
          </div>
          <div className="formCard__item">
            <UuiButton
              variant="contained"
              className="Uui-btn--secondary buttonGap"
            >
              Button
            </UuiButton>
          </div>
          <div className="formCard__item">
            <UuiButton
              variant="contained"
              className="Uui-btn--tertiary buttonGap"
            >
              Button
            </UuiButton>
          </div>
          <div className="formCard__item">
            <UuiButton variant="contained" className="Uui-link-btn buttonGap">
              Button
            </UuiButton>
          </div>
          <div className="formCard__item iconbutton ">
            <UuiButton
              startIcon={
                // <AddIcon />
                <i className="ri-add-line"></i>
              }
              className="Uui-btn--primary buttonGap padingTop"
              variant="text"
              color="primary"
            >
              BUTTON
            </UuiButton>
          </div>
          <div className="formCard__item"></div>
          <div className="formCard__item"></div>
        </div>
      </div>

      <div className="formCard__row colorPalte buttonTop">
        <div className="formCard__item buttonTop__title">Primary Button</div>
        <div className="formCard__item buttonTop__title">Secondary Button</div>
        <div className="formCard__item buttonTop__title">Tertiary Button</div>
        <div className="formCard__item buttonTop__title">Link Button</div>
        <div className="formCard__item  buttonTop__title">
          Icon & text Button
        </div>
        <div className="formCard__item"></div>
        <div className="formCard__item"></div>
      </div>

      <div className="componentCard__subHeader">Upload Buttons</div>
      

      <div className="componentCard__subHeader">Button Icons</div>

      <div className="iconBottonContent">
        <UuiAddButton />
        <UuiDeleteButton />
        <UuiDocumentButton />
        <UuiDownloadButton />
        <UuiEditButton />
        <UuiMoreButton />
        <UuiNotInterestButton />
        <UuiPrintButton />
        <UuiRemoveButton />
        <UuiSaveButton />
        <UuiSettingsButton />
        <UuiStopButton />
        <UuiViewButton />
      </div>
      <div className="componentCard__subHeader">Button Icons</div>
      <div className="iconBottonContent itemFlex">
      <UuiAddBtn/>
      <UuiDeleteBtn/>
      </div>
      
    </Card>
  );
};
