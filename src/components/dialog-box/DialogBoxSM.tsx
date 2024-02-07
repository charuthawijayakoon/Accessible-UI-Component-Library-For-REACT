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
  import { useTheme } from "@mui/material/styles";
  
  export interface SimpleDialogPropsSm {
    title: string;
    icon: React.ReactNode;
    open: boolean;
    onClose: () => void;
  }
  
  const useStyles = makeStyles(() =>
    createStyles({
      dialogPaper: {},
      root: {
        padding: "25px 60px",
      },
      closeButton: {
        position: "absolute",
        right: 12,
        top: 12,
        color: useTheme().palette.grey[500],
        padding: 0,
      },
      addIcon: {},
      titleHolder: {
        display: "flex",
        alignItems: "center",
        "& svg": {
          position: "absolute",
          left: 24,
          top: 24,
          color: "#2D4190",
        },
      },
      dialogContent: {
        padding: "24px",
      },
      dialogAction: {
        padding: 24,
      },
    })
  );
  
  export interface CustomDialogTitlePropsSm {
    id: string;
    children: React.ReactNode;
    onClose: () => void;
    classes: any;
    icon: React.ReactNode;
  }
  
  function CustomDialogTitle(props: CustomDialogTitlePropsSm) {
    const { children, classes, onClose, ...other } = props;
  
    return (
      <DialogTitle className={classes.root} {...other}>
        <div className={classes.titleHolder}>
          {props.icon}
          <UuiTypography className="Uui-txt-bold Uui-txt--primary">
            {children}
          </UuiTypography>
        </div>
        {onClose ? (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
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
  
  function UuiDialogBoxSM(props: PropsWithChildren<SimpleDialogPropsSm>) {
    const classes = useStyles();
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
        fullWidth
        maxWidth="sm"
        className={classes.dialogPaper}
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <CustomDialogTitle
          classes={classes}
          id="customized-dialog-title"
          onClose={handleClose}
          icon={props.icon}
        >
          {props.title}
        </CustomDialogTitle>
        <Divider />
        <DialogContent className={classes.dialogContent}>
          {props.children}
        </DialogContent>
  
        <DialogActions className={classes.dialogAction}>
          <Button variant="contained" onClick={handleClose} color="primary">
            SAVE
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
  
  export default UuiDialogBoxSM;
  