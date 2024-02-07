import React, { PropsWithChildren } from "react";
import {
  createStyles,
  makeStyles,
  Theme,
  Grid,
  Link,
  Button,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  FormControlLabel,
} from "@mui/material";
import UuiTypography from "../../components/typography/Typography";
import UuiInput from "../../components/Input/Input";
import UuiPassword from "../../components/Input/Input";
// import uoi_logo from "../../images/logo.svg";
// import aniamtion from "../../resources/Intersect.svg";

export function ForgotPasswordInfo() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  function userlogin() {
    throw new Error("Function not implemented.");
  }

  return (
    <div>
      <div className="loginPage fade-in-login">
        <div className="bubbles">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>
        <Grid container className="loginContainer boxShadow____bg2 boxShadow____bg3  loginMainCard">
          <Grid
            className="loginContainer__column loginContainer__column--left"
            item
            md={6}
            sm={12}
            xs={12}
          >
            <div className="loginFormContainer">
              <div className="loginFormContainer__logoHolder">
                <img
                  className="loginFormContainer__logo"
                  src="https://infoinsdev.informaticsint.com/api/v1/dms-center/file/public/download?path=UIUX_Common_Components/info-logo.svg"
                  alt=""
                />
              </div>
              <div className="loginFormContainer__titleHolder">
                <UuiTypography className="info-txt-heder-loging loginHeaderBottom">
                  Forgot Password
                </UuiTypography>
                <UuiTypography className="info-txt-subHeder hederSpacing">
                  Please enter the email you use to sign in
                </UuiTypography>
              </div>
              <span style={{ color: "red", fontSize: "12px" }}></span>

              <div className="loginFormContainer__formBody">
                <div className="formCard__item loginInputField">
                  <UuiInput size="small" label="Username" />
                </div>
                <div className="formCard__item loginInputField">
                  <UuiInput size="small" label="Email" />
                </div>
                <div className="reset-btn-group">
                  <div className="formCard__item reset-btns">
                    <Button
                      className="Uui-roundedbutton Uui-btn--primary"
                      onClick={() => {}}
                    >
                      Continue
                    </Button>
                  </div>
                  <div className="formCard__item">
                    <Button
                      className="Uui-roundedbutton back-roundedbutton"
                      onClick={() => {}}
                    >
                      BACK TO SIGN IN
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid
            className="loginContainer__column loginContainer__column--right"
            item
            md={6}
            sm={12}
            xs={12}
          >
            <div className="login--animation">
              <div className="ripple-background">
                <div className="circle xxlarge shade1"></div>
                <div className="circle xlarge shade2"></div>
                <div className="circle large shade3"></div>
                <div className="circle mediun shade4"></div>
                <div className="circle small shade5"></div>
              </div>

              <div className="login_image loginPageImage">
                <img
                  className="fade-in"
                  //src='/loginPageShape1.svg'
                  src="https://infoinsdev.informaticsint.com/api/v1/dms-center/file/public/download?path=UIUX_Common_Components/info-login--image.jpg"
                  alt=""
                />
              </div>
            </div>

            <div className="loginContainer__titlebox">
              <div className="loginContainer__text">
                <div>
                  <UuiTypography className="loginContainer__titlebox__titleImage loginRightText info-txt-imageText Uui-txt-white">
                    Welcome to Universal UI
                  </UuiTypography>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="loginContainer__footerHolder">
        <p className="info-txt-loing-footer ">
          © Universal UI. All Rights Reserved
        </p>
      </div>
    </div>
  );
}
