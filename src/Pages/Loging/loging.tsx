import React, { PropsWithChildren, useState } from "react";
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
  IconButton,
  FormControl,
} from "@mui/material";

import UuiTypography from "../../components/typography";
import UuiInput from "../../components/Input/Input";
import UuiPassword from "../../components/Input/Input";
// import uoi_logo from "../../resources/logo.svg";
// import aniamtion from "../../resources/Intersect.svg";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { UuiCheckbox } from "../../components";


function LoginPage() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [passwordHT, setPasswordHT] = useState<string>("");
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  function userlogin() {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="logingPage_bubbles">
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
        <Grid container className="loginContainer boxShadow____bg2 boxShadow____bg3 loginMainCard">
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
                  Login
                </UuiTypography>
                <UuiTypography className="info-txt-subHeder hederSpacing">
                  Sign in to your Account
                </UuiTypography>
              </div>
              <div className="loginFormContainer__formBody">
                <div className="formCard__item loginFormInput">
                  <UuiInput
                    size="small"
                    label="Username"
                    // placeholder="Username"
                  />
                </div>
                <div className="formCard__item loginFormInput passwordInput">
                  <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                </div>
                <div className="loginFormContainer__navContainer">
                  <FormControlLabel
                    // css={undefined}
                    control={
                      <UuiCheckbox
                        // css={undefined}
                        color="primary"
                        name="gilad"
                        icon={
                          <CheckBoxOutlineBlankIcon className="checkIcon" />
                        }
                        checkedIcon={<CheckBoxIcon />}
                      />
                    }
                    label={
                      <UuiTypography
                        className="info-txt-small-login"
                        variant="body1"
                      >
                        Remember me
                      </UuiTypography>
                    }
                  />
                  <Link
                    href="/portal/forget-password"
                    className="info-txt-small-login linkBtn"
                  >
                    Forgot password ?
                  </Link>
                </div>
                <div style={{ paddingTop: "30px" }}>
                  <Button className="Uui-roundedbutton Uui-btn--primary">
                    Login
                  </Button>
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
                <div className="circle xxlarge shade1 boxShadow__bg1"></div>
                <div className="circle xlarge shade2 boxShadow__bg1"></div>
                <div className="circle large shade3 boxShadow__bg1"></div>
                <div className="circle mediun shade4 boxShadow__bg1"></div>
                <div className="circle small shade5 boxShadow__bg1"></div>
              </div>

              <div className="login_image loginPageImage">
                <img
                  className="fade-in"
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

export default LoginPage;
