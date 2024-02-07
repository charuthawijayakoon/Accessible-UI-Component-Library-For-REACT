import { InputAdornment, TextField, Theme } from "@mui/material";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import withStyles from "@mui/styles/withStyles";
import React from "react";
import clsx from "clsx";
import { UuiButton, UuiIconButton } from "../button";
import { useTheme } from "@mui/material/styles";
import UuiTypography from "../typography";

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


const SearchBar = (props: any) => {
  

  return (
    <CssTextField
      fullWidth
      size="small"
      id="outlined-basic"
      placeholder={"Search"}
      classes={{}}
      className="searchInput"
      margin="normal"
      variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            
                <UuiIconButton
              className="searchRoundedBtn searchFilterBtn filterButton"
            >
              {/* <FilterListIcon /> */}
              <i className="ri-filter-3-fill searchIcon"></i>
            </UuiIconButton>
             <UuiButton className="searchRoundedBtn searchFilterBtn"  >
             
              <i className="ri-search-line"></i>
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

export default SearchBar;
