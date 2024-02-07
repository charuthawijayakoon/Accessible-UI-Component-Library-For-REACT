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
  
  export interface SimpleDialogPropsTask {
    title: string;
    icon: React.ReactNode;
    open: boolean;
    onClose: () => void;
  }
  
 
  
  export interface CustomDialogTitlePropsTask {
    id: string;
    children: React.ReactNode;
    onClose: () => void;
    classes: any;
    icon: React.ReactNode;
  }
  
  function CustomDialogTitle(props: CustomDialogTitlePropsTask) {
    const { children, classes, onClose, ...other } = props;
  
    return (
      <DialogTitle className={classes.root} {...other}>
        <div className="title_dialog">
          {props.icon}
          <UuiTypography className="Uui-txt-bold Uui-txt--primary dialogBox_tital titlePadding">
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
  
  function UuiDialogBoxTask(props: PropsWithChildren<SimpleDialogPropsTask>) {
    
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
      <Dialog className="dialogbox_row"
        fullWidth
        maxWidth="sm"
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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus autem, natus possimus dicta voluptatibus alias illo deleniti repudiandae expedita aut pariatur vitae exercitationem, suscipit eveniet dolorum. Harum dolorum molestias sapiente.
        </DialogContent>
        <Divider />
        <DialogActions className="dialogAction">
          <Button variant="contained" onClick={handleClose} color="primary">
            ALLOCATE
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
  
  export default UuiDialogBoxTask;
  