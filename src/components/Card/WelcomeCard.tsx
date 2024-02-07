import React from "react";
import UuiTypography from "../typography";
import { Card, CardContent, Theme, Grid, Divider } from "@mui/material";
// import cardBack from "../../resources/design_1.png";
import UuiAvatar from "../avatar";
// import avatar_img from "../../resources/Avatar.svg";

const UuiWelcomeCard = ({ ...props }) => {
  return (
    <div className="welcome_card">
      {/* <img src={cardBack} className="card_image_left" /> */}
      <UuiAvatar
        alt={props?.userInfo?.email}
         src="https://infoinsdev.informaticsint.com/api/v1/dms-center/file/public/download?path=Theme/Underwriting/profile.jpg"
        className="welcome_card__avatar"
      />
      <div>
        <UuiTypography className="Uui-profile-name Uui-txt-white">
          Welcome back Alex !{" "}
        </UuiTypography>
        <UuiTypography className="Uui-txt-xsmall Uui-txt-white">
          Universal UI Control Center
        </UuiTypography>
      </div>
      {/* <img src={cardBack} className="card_image_right" /> */}
    </div>
  );
};

export default UuiWelcomeCard;
