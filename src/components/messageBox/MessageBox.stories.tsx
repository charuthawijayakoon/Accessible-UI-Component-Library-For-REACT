import React, { useContext } from "react";
import { Meta, Story } from "@storybook/react";
import UuiMessageBox from "./MessageBox";
import { Theme } from "@mui/material/styles";
// import makeStyles from "@mui/styles/makeStyles";
// import createStyles from "@mui/styles/createStyles";
//========================================================================= import profilePic from "../../resources/123.jpg";
import { Card, IconButton } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
// import CloseIcon from "@mui/icons-material/Close";
import UuiTypography from "../typography";
import clsx from "clsx";
// import { AppDrawerContext } from "../../view/authenticated/Drawer/AppDrawerContext";
import Snackbar, { SnackbarProps } from "@mui/material/Snackbar";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { UuiButton } from "../button";
// import ErrorIcon from "@mui/icons-material/Error";
// import WarningIcon from "@mui/icons-material/Warning";
import { useTheme } from "@mui/material/styles";

export default {
  title: "components/MessageBox",
  component: UuiMessageBox,
} as Meta;

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
// const Template: Story<UuiMessageBoxProps> = (args: any) => <UuiMessageBox {...args} />;

// export const Default = Template.bind({});
// Default.args = {
//     alt:"Name",
//     src:"",
//     className:""
// };

// interface CustomMessageBoxProps {
//     type: 'success' | 'warning' | 'error' | 'info';
//     open: boolean;
//     title:string;
//     onClose: () => void
// }

// export type UuiMessageBoxProps = CustomMessageBoxProps & SnackbarProps

// const useStyles = makeStyles(() =>
//   createStyles({
//     root: {
//       display: "flex",
//       flexDirection: "column",
//       "& > *": {
//         margin: useTheme().spacing(1),
//       },
//     },
   
    
//   })
// );
export const Sizes = () => {
  // const classes = useStyles();
  const handleClose = () => {
    // props.onClose()
  };

//   const { open } = useContext(AppDrawerContext);

  return (
    <Card className="componentCard">
      <div className="componentCard__title">Alerts</div>
      {/* <div>
                <Snackbar className="messageBoxfull">
                    <Alert className="Uui-msgbox">sss</Alert>
                </Snackbar>
            </div> */}
      <div className="componentCard__alertMessage">
    
        <Snackbar /* open={open}*/ autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            This is a success message!
          </Alert>
        </Snackbar>
        <Alert className="Uui-msgbox Uui-msgbox--errorcomponentCard__alertcards " severity="error">
          <IconButton
            onClick={handleClose}
            size="small"
            className="Uui-msgbox__closeIcon"
          >
            {/* <CloseIcon /> */}
            <i className="ri-close-fill"></i>
          </IconButton>
          <div className="Uui-msgbox__container">
            <div className="messageBoxDiv">
              {/* <UuiTypography className="Uui-txt-text Uui-snack-title">{props.title}</UuiTypography> */}
              <UuiTypography className="Uui-txt-small Uui-snack-subTitle">
                This is an error message!
              </UuiTypography>
            </div>
          </div>
        </Alert>
        <Alert className="Uui-msgbox Uui-msgbox--warning" severity="warning">
          <IconButton
            onClick={handleClose}
            size="small"
            className="Uui-msgbox__closeIcon"
          >
            {/* <CloseIcon /> */}
            <i className="ri-close-fill"></i>
          </IconButton>
          <div className="Uui-msgbox__container">
            <div className="messageBoxDiv">
              {/* <UuiTypography className="Uui-txt-text Uui-snack-title">{props.title}</UuiTypography> */}
              <UuiTypography className="Uui-txt-small Uui-snack-subTitle">
                This is a warning message!
              </UuiTypography>
            </div>
          </div>
        </Alert>
        <Alert className="Uui-msgbox Uui-msgbox--info" severity="info">
          <IconButton
            onClick={handleClose}
            size="small"
            className="Uui-msgbox__closeIcon"
          >
            {/* <CloseIcon /> */}
            <i className="ri-close-fill"></i>
          </IconButton>
          <div className="Uui-msgbox__container">
            <div className="messageBoxDiv">
              {/* <UuiTypography className="Uui-txt-text Uui-snack-title">{props.title}</UuiTypography> */}
              <UuiTypography className="Uui-txt-small Uui-snack-subTitle">
                This is an information message!
              </UuiTypography>
            </div>
          </div>
        </Alert>
        <Alert className="Uui-msgbox Uui-msgbox--success" severity="success">
          <IconButton
            onClick={handleClose}
            size="small"
            className="Uui-msgbox__closeIcon"
          >
            {/* <CloseIcon /> */}
            <i className="ri-close-fill"></i>
          </IconButton>
          <div className="Uui-msgbox__container">
            <div className="messageBoxDiv">
              {/* <UuiTypography className="Uui-txt-text Uui-snack-title">{props.title}</UuiTypography> */}
              <UuiTypography className="Uui-txt-small Uui-snack-subTitle">
                This is a success message!
              </UuiTypography>
            </div>
          </div>
        </Alert>
      </div>

      <div className="messageBoxAlert">
        <div className="formCard__row">
          <div className="formCard__item">
          <h1 className="componentCard__subHeader">Succeess Message Box</h1>
            <div className="alert-msg">
              <div className="alert-msg__icon">
                {/* <CheckCircleIcon /> */}
                <i className="ri-checkbox-circle-fill"></i>
              </div>
              <div className="alert-msg__title">
                <UuiTypography>Success</UuiTypography>
              </div>

              <div className="alert-msg__body">
                <UuiTypography>
                  Application submitted successfully. Your reference number is
                  N289764E56789
                </UuiTypography>
              </div>

              <div className="alert-msg__btn">
                <UuiButton className="messageBoxSecondaryBtn" autoFocus>
                  Cancel
                </UuiButton>
                <UuiButton className="messageBoxPrimaryBtn">DELETE</UuiButton>
              </div>
            </div>
          </div>
          <div className="formCard__item">
          <h1 className="componentCard__subHeader">Error Message Box</h1>
            <div className="alert-msg">
            
              <div className="alert-msg__errorIcon">
                <i className="ri-error-warning-fill"></i>
              </div>
              <div className="alert-msg__errorTitle">
                <UuiTypography>Error</UuiTypography>
              </div>

              <div className="alert-msg__body">
                <UuiTypography>
                  Something is wrong with your network connection. Please make
                  sure you are connected to the internet
                </UuiTypography>
              </div>

              <div className="alert-msg__btn">
                <UuiButton className="messageBoxErrorSecondaryBtn" autoFocus>
                  Cancel
                </UuiButton>
                <UuiButton className="messageBoxErrorPrimaryBtn">Ok</UuiButton>
              </div>
            </div>
          </div>
        </div>

        <div className="formCard__row">
          <div className="formCard__item">
          <h1 className="componentCard__subHeader">Warning Message Box</h1>
            <div className="alert-msg">
              <div className="alert-msg__warningIcon">
                {/* <WarningIcon /> */}
                <i className="ri-error-warning-fill"></i>
              </div>
              <div className="alert-msg__warningTitle">
                <UuiTypography>Warning</UuiTypography>
              </div>

              <div className="alert-msg__body">
                <UuiTypography>
                  There was a problem with your network connection
                </UuiTypography>
              </div>
              <br />

              <div className="alert-msg__btn">
                <UuiButton className="messageBoxwarningSecondaryBtn" autoFocus>
                  Cancel
                </UuiButton>
                <UuiButton className="messageBoxwarningPrimaryBtn">
                  Ok
                </UuiButton>
              </div>
            </div>
          </div>

          <div className="formCard__item">
          <h1 className="componentCard__subHeader">Info Alert Message Box</h1>
            <div className="alert-msg">
              <div className="alert-msg__infoIcon">
                {/* <WarningIcon /> */}
                <i className="ri-error-warning-fill"></i>
              </div>
              <div className="alert-msg__infoTitle">
                <UuiTypography>Info Alert</UuiTypography>
              </div>

              <div className="alert-msg__body">
                <UuiTypography>
                  Please read the comments carefully and search again
                </UuiTypography>
              </div>
              <br />

              <div className="alert-msg__btn">
                <UuiButton className="messageBoxinfoSecondaryBtn" autoFocus>
                  Cancel
                </UuiButton>
                <UuiButton className="messageBoxinfoPrimaryBtn">Ok</UuiButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
