import { InputAdornment, TextField, Theme } from "@mui/material";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import withStyles from "@mui/styles/withStyles";

import React, { PropsWithChildren } from "react";
import clsx from "clsx";
import { UuiButton, UuiIconButton } from "../button";
import { url } from "inspector";
import UuiTypography from "../typography";
import { useTheme } from "@mui/material/styles";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#2D4190",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#2D4190",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#EDEDED",
        borderRadius: "50px",
      },
      "&:hover fieldset": {
        borderColor: "#2D4190",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#2D4190",
        borderWidth: "1px",
      },
    },
  },
})(TextField);



export interface CustomSearchBarProps {
  text: string;
  advnSearch: boolean;
}

interface CheckAdvancedSearchBtnProps {
  check: boolean;
}

const CustomSearchBar = (props: PropsWithChildren<CustomSearchBarProps>) => {
 

  function CheckAdvancedSearchBtn(props: CheckAdvancedSearchBtnProps) {
    if (props.check == true) {
      return (
        <UuiIconButton className="customroundedBtn filterBtn">
          <span className="Uui-maticon Uui-filter_alt"></span>
        </UuiIconButton>
      );
    } else {
      return <></>;
    }
  }

  return (
    <CssTextField
      fullWidth
      size="small"
      id="outlined-basic"
      placeholder={props.text}
      classes={{}}
      className="searchField"
      margin="normal"
      variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <CheckAdvancedSearchBtn check={props.advnSearch} />
            <UuiButton >
              <i className="ri-search-line searchIcon"></i>
              <UuiTypography className="Uui-txt-small-primary" variant="body1">
                {" "}
                Search{" "}
              </UuiTypography>
            </UuiButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default CustomSearchBar;
