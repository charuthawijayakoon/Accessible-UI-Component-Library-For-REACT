import {
  Dialog,
  IconButton,
  DialogContent,
  Button,
  DialogActions,
  Theme,
  Divider,
  DialogTitle,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import createStyles from "@mui/styles/createStyles";
import React, { PropsWithChildren } from "react";
// import CloseIcon from "@mui/icons-material/Close";
import MuiDialogTitle from "@mui/material/DialogTitle";
import UuiTypography from "../typography";
import { UuiButton } from "../button";
import { useTheme } from "@mui/material/styles";

export interface SimpleDialogPropsXs {
  title: string;
  icon: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

// const useStyles = makeStyles(() =>
//   createStyles({
//     dialogPaper: {},
//     root: {
//       padding: "25px 60px",
//     },
//     closeButton: {
//       position: "absolute",
//       right: 24,
//       top: 24,
//       color: useTheme().palette.grey[500],
//       padding: 0,
//     },
//     addIcon: {},
//     titleHolder: {
//       display: "flex",
//       alignItems: "center",
//       "& svg": {
//         position: "absolute",
//         left: 24,
//         top: 24,
//         color: "#2D4190",
//       },
//     },
//     dialogContent: {
//       padding: "24px",
//     },
//     dialogAction: {
//       padding: 24,
//     },
//   })
// );

export interface CustomDialogTitlePropsXs {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
  classes: any;
  icon: React.ReactNode;
}

function CustomDialogTitle(props: CustomDialogTitlePropsXs) {
  const { children, classes, onClose, ...other } = props;

  return (
    <DialogTitle className="dialogbox_flex">
      <div className="title_dialog">
        {props.icon}
        <UuiTypography className="Uui-txt-bold Uui-txt--primary dialogBox_tital titlePadding ">
          Cover Notes
        </UuiTypography>
      </div>
      {onClose ? (
        <IconButton
          aria-label="close"
          className="buttonCloseButton"
          onClick={onClose}
          size="large"
        >
          {/* <CloseIcon /> */}
          <i className="ri-close-fill"></i>
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

function UuiDialogBoxXS(props: PropsWithChildren<SimpleDialogPropsXs>) {
  // const classes = useStyles();
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };
  const [state, setState] = React.useState({
    checked: true,
  });

  const handleSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.checked });
  };

  return (
    <Dialog
      className="dialog_content_xs"
      fullWidth
      maxWidth="xs"
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <CustomDialogTitle
        classes="title_dialog"
        id="customized-dialog-title"
        onClose={handleClose}
        icon={props.icon}
      >
        {props.title}
      </CustomDialogTitle>
      <Divider />
      <DialogContent className="dialogBoxContent__dialogContener textBody">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
        autem, natus possimus dicta voluptatibus alias illo deleniti repudiandae
        expedita aut pariatur vitae exercitationem, suscipit eveniet dolorum.
        Harum dolorum molestias sapiente.
      </DialogContent>
      <Divider />
      <DialogActions className="dialogAction">
        <UuiButton size="small" className="Uui-btn--secondary">
          NO
        </UuiButton>
        <Button variant="contained" onClick={handleClose} color="primary">
          YES
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default UuiDialogBoxXS;
