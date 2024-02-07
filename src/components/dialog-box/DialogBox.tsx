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
  
  
  export interface SimpleDialogProps {
    title: string;
    icon: React.ReactNode;
    open: boolean;
    onClose: () => void;
  }
  
  
  export interface CustomDialogTitleProps {
    id: string;
    children: React.ReactNode;
    onClose: () => void;
    classes: any;
    icon: React.ReactNode;
  }
  
  function CustomDialogTitle(props: CustomDialogTitleProps) {
    const { children, classes, onClose, ...other } = props;
  
    return (
      <DialogTitle className='.dialogBoxContent' {...other}>
        <div className="dialogBoxContent__titleHolder">
          {props.icon}
          <UuiTypography className="Uui-txt-bold Uui-txt--primary dialogBox_tital">
            Cover Notes
          </UuiTypography>
        </div>
        {onClose ? (
          <IconButton
            aria-label="close"
            className="dialogBoxContent__closeButton"
            onClick={onClose}
            size="large"
          >
            
            <i className="ri-close-fill"></i>
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }
  
  function UuiDialogBox(props: PropsWithChildren<SimpleDialogProps>) {
   
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
        maxWidth="md"
        // className={classes.dialogPaper}
        // onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
        onClose={onClose}
      >
        <CustomDialogTitle
          classes="customDialogTitle"
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
        <DialogActions className="dialogBoxContent__dialogAction">
          <Button variant="contained" onClick={handleClose} color="primary">
            SAVE
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
  
  export default UuiDialogBox;
  