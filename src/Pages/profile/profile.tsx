import React, { ChangeEvent, Fragment, useContext } from "react";
import { Meta, Story } from "@storybook/react";
import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
import createStyles from "@mui/styles/createStyles";
import {
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  IconButton,
  Button,
  Box,
  Tab,
} from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
// import CloseIcon from "@mui/icons-material/Close";
import clsx from "clsx";

import Snackbar, { SnackbarProps } from "@mui/material/Snackbar";
import { UuiButton } from "../../components/button";
import UuiTypography from "../../components/typography/Typography";
import Avatar from "../../components/avatar";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { UuiTabs, UuiTab } from "../../components/tab";
import UuiTabPanel from "../../components/tab/TabPanel";

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const UuiProfile = ({ ...props }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className="profileContent">
        <div className="profileContent__box">
          <Fragment>
            <Grid container>
              <Grid item xs={6} md={2}>
                <UuiTabs
                  textColor="primary"
                  indicatorColor="primary"
                  value={value}
                  onChange={handleChange as any}
                  aria-label="simple tabs example"
                >
                  <UuiTab
                    className=" profileContent__box--tabLable"
                    label="Personals Details"
                    {...a11yProps(0)}
                  />
                  <UuiTab
                    className="profileContent__box--tabLable"
                    label="Contact Details"
                    {...a11yProps(1)}
                  />
                  <UuiTab
                    className="profileContent__box--tabLable"
                    label="Other Details"
                    {...a11yProps(2)}
                  />
                </UuiTabs>
              </Grid>
              <Grid item xs={1} md={1}>
                <div className="divider_line"></div>
              </Grid>

              <Grid item xs={5} md={9}>
                <div className=" profileContent__box--mainHheading">
                  My Profile
                </div>
                <div className=" profileContent__box--userCard">
                  <div className="profileContent__box--userCard_imgFlex">
                    <div className="uoi__profile_img">
                      <div>
                        <img
                          src="https://infoinsdev.informaticsint.com/api/v1/dms-center/file/public/download?path=Theme/Underwriting/Avatar.svg"
                          alt=""
                        ></img>
                      </div>
                    </div>
                    <div className=" profileContent__box--userCard_imgFlex-activCardFlex">
                      <div className="uoi_name_discription_flex">
                        <div className="uoi_profile_name">Mr. Alex Jason</div>
                        <div className="uoi_profile_discription">
                          Business Analysist
                        </div>
                      </div>

                      <div className="uoi__profile_active_chip">
                        <div className="chip_text">Active</div>
                      </div>
                    </div>
                  </div>
                </div>

                <UuiTabPanel className="tabDetails" value={value} index={0}>
                  <div className="tabDetails__mainHeading">
                    Personals Details
                  </div>
                  <Grid container className=" tabDetails__mainGridContent">
                    <Grid item xs={6} md={4}>
                      <div className="tabText">
                        <UuiTypography className="tabDetails__mainGridContent--mainText">
                          First Name
                        </UuiTypography>
                        <UuiTypography className="tabDetails__mainGridContent--sudText">
                          Alex
                        </UuiTypography>
                      </div>
                    </Grid>
                    <Grid item xs={6} md={4}>
                      <div className="tabText">
                        <UuiTypography className="tabDetails__mainGridContent--mainText">
                          Last Name
                        </UuiTypography>
                        <UuiTypography className="tabDetails__mainGridContent--sudText">
                          Jason
                        </UuiTypography>
                      </div>
                    </Grid>
                    <Grid item xs={6} md={4}>
                      <div className="tabText">
                        <UuiTypography className="tabDetails__mainGridContent--mainText">
                          other Name
                        </UuiTypography>
                        <UuiTypography className="tabDetails__mainGridContent--sudText">
                          Chandira
                        </UuiTypography>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid container className="tabDetails__mainGridContent">
                    <Grid item xs={6} md={4}>
                      <div className="tabText">
                        <UuiTypography className="tabDetails__mainGridContent--mainText">
                          Gender
                        </UuiTypography>
                        <UuiTypography className="tabDetails__mainGridContent--sudText">
                          Male
                        </UuiTypography>
                      </div>
                    </Grid>
                    <Grid item xs={6} md={4}>
                      <div className="tabText">
                        <UuiTypography className="tabDetails__mainGridContent--mainText">
                          Date of Birth
                        </UuiTypography>
                        <UuiTypography className="tabDetails__mainGridContent--sudText">
                          04-26-2000
                        </UuiTypography>
                      </div>
                    </Grid>
                    <Grid item xs={6} md={4}>
                      <div className="tabText">
                        <UuiTypography className="tabDetails__mainGridContent--mainText">
                          Civil Status
                        </UuiTypography>
                        <UuiTypography className="tabDetails__mainGridContent--sudText">
                          Single
                        </UuiTypography>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid container className="tabDetails__mainGridContent">
                    <Grid item xs={6} md={4}>
                      <div className="tabText">
                        <UuiTypography className="tabDetails__mainGridContent--mainText">
                          Nationality
                        </UuiTypography>
                        <UuiTypography className="tabDetails__mainGridContent--sudText">
                          Srilankan
                        </UuiTypography>
                      </div>
                    </Grid>
                    <Grid item xs={6} md={4}>
                      <div className="tabText">
                        <UuiTypography className="tabDetails__mainGridContent--mainText">
                          Language
                        </UuiTypography>
                        <UuiTypography className="tabDetails__mainGridContent--sudText">
                          English
                        </UuiTypography>
                      </div>
                    </Grid>
                    <Grid item xs={6} md={4}>
                      <div className="tabText">
                        <UuiTypography className="tabDetails__mainGridContent--mainText">
                          ID Number
                        </UuiTypography>
                        <UuiTypography className="tabDetails__mainGridContent--sudText">
                          982922332V
                        </UuiTypography>
                      </div>
                    </Grid>
                  </Grid>
                </UuiTabPanel>
                <UuiTabPanel className="tabDetails" value={value} index={1}>
                  <div className="tabDetails__mainHeading">Contact Details</div>
                  <Grid container className="tabDetails__mainGridContent">
                    <Grid item xs={6} md={6}>
                      <div className="contact_chip_flex">
                        <UuiTypography className="tabDetails__mainGridContent--mainText">
                          Mobile
                        </UuiTypography>
                        <div className="tabDetails__mainGridContent--contactChip  ">
                          <UuiTypography className="tabDetails__mainGridContent--contactChip_chipText">
                            PRIMARY CONTACT
                          </UuiTypography>
                        </div>
                      </div>
                      <UuiTypography className="tabDetails__mainGridContent--sudText">
                        012 345 6789
                      </UuiTypography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <div className="contact_chip_flex">
                        <UuiTypography className="tabDetails__mainGridContent--mainText">
                          Personal Email
                        </UuiTypography>
                        <div className="tabDetails__mainGridContent--contactChip">
                          <UuiTypography className="tabDetails__mainGridContent--contactChip_chipText">
                            PRIMARY EMAIL
                          </UuiTypography>
                        </div>
                      </div>
                      <UuiTypography className="tabDetails__mainGridContent--sudText">
                        samanperera@.com
                      </UuiTypography>
                    </Grid>
                  </Grid>
                  <Grid container className="tabDetails__mainGridContent">
                    <Grid item xs={6} md={6}>
                      <div className="tabText">
                        <UuiTypography className="tabDetails__mainGridContent--mainText">
                          Home
                        </UuiTypography>
                        <UuiTypography className="tabDetails__mainGridContent--sudText">
                          012 3 456789
                        </UuiTypography>
                      </div>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <div className="tabText">
                        <UuiTypography className="tabDetails__mainGridContent--mainText">
                          Office Email
                        </UuiTypography>
                        <UuiTypography className="tabDetails__mainGridContent--sudText">
                          samanperera@.com
                        </UuiTypography>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid container className="tabDetails__mainGridContent">
                    <Grid item xs={6} md={4}>
                      <div className="tabText">
                        <UuiTypography className="tabDetails__mainGridContent--mainText">
                          Permanent Address
                        </UuiTypography>
                        <UuiTypography className="tabDetails__mainGridContent--sudText">
                          a1, a2, Colombo 3, Sri Lanka
                        </UuiTypography>
                      </div>
                    </Grid>
                    <Grid item xs={6} md={4}></Grid>
                    <Grid item xs={6} md={4}></Grid>
                  </Grid>
                </UuiTabPanel>
                <UuiTabPanel className="tabDetails" value={value} index={2}>
                  <div className="tabDetails__mainHeading">Other Details</div>
                  <Grid container className="tabDetails__mainGridContent">
                    <Grid item xs={6} md={4}>
                      <div className="tabText">
                        <UuiTypography className="tabDetails__mainGridContent--mainText">
                          User ID
                        </UuiTypography>
                        <UuiTypography className="tabDetails__mainGridContent--sudText">
                          12
                        </UuiTypography>
                      </div>
                    </Grid>
                    <Grid item xs={6} md={4}>
                      <div className="tabText">
                        <UuiTypography className="tabDetails__mainGridContent--mainText">
                          User Status
                        </UuiTypography>
                        <UuiTypography className="tabDetails__mainGridContent--sudText">
                          Active
                        </UuiTypography>
                      </div>
                    </Grid>
                    <Grid item xs={6} md={4}>
                      <div className="tabText">
                        <UuiTypography className="tabDetails__mainGridContent--mainText">
                          User Name
                        </UuiTypography>
                        <UuiTypography className="tabDetails__mainGridContent--sudText">
                          User Admin
                        </UuiTypography>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid container className="tabDetails__mainGridContent">
                    <Grid item xs={6} md={4}>
                      <div className="tabText">
                        <UuiTypography className="tabDetails__mainGridContent--mainText">
                          Employee Number
                        </UuiTypography>
                        <UuiTypography className="tabDetails__mainGridContent--sudText">
                          emp5
                        </UuiTypography>
                      </div>
                    </Grid>
                    <Grid item xs={6} md={4}>
                      <div className="tabText">
                        <UuiTypography className="tabDetails__mainGridContent--mainText">
                          Employee Category
                        </UuiTypography>
                        <UuiTypography className="tabDetails__mainGridContent--sudText">
                          PERMANENT
                        </UuiTypography>
                      </div>
                    </Grid>
                    <Grid item xs={6} md={4}>
                      <div className="tabText">
                        <UuiTypography className="tabDetails__mainGridContent--mainText">
                          Department
                        </UuiTypography>
                        <UuiTypography className="tabDetails__mainGridContent--sudText">
                          Underwriting
                        </UuiTypography>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    className="tabDetails__mainGridContent grid_item_new"
                  >
                    <Grid item xs={6} md={4}>
                      <div className="tabText">
                        <UuiTypography className="tabDetails__mainGridContent--mainText">
                          First Name
                        </UuiTypography>
                        <UuiTypography className="tabDetails__mainGridContent--sudText">
                          Alex
                        </UuiTypography>
                      </div>
                    </Grid>
                    <Grid item xs={6} md={4}>
                      <div className="tabText">
                        <UuiTypography className="tabDetails__mainGridContent--mainText">
                          Last Name
                        </UuiTypography>
                        <UuiTypography className="tabDetails__mainGridContent--sudText">
                          Jason
                        </UuiTypography>
                      </div>
                    </Grid>
                    <Grid item xs={6} md={4}>
                      <div className="tabText">
                        <UuiTypography className="tabDetails__mainGridContent--mainText">
                          other Name
                        </UuiTypography>
                        <UuiTypography className="tabDetails__mainGridContent--sudText">
                          Chandira
                        </UuiTypography>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={6} md={4}>
                      <div className="tabText">
                        <UuiTypography className="tabDetails__mainGridContent--mainText">
                          Designation
                        </UuiTypography>
                        <UuiTypography className="tabDetails__mainGridContent--sudText">
                          Underwriter
                        </UuiTypography>
                      </div>
                    </Grid>
                    <Grid item xs={6} md={4}>
                      <div className="tabText">
                        <UuiTypography className="tabDetails__mainGridContent--mainText">
                          Line Manager
                        </UuiTypography>
                        <UuiTypography className="tabDetails__mainGridContent--sudText">
                          Steve Anderson
                        </UuiTypography>
                      </div>
                    </Grid>
                  </Grid>
                </UuiTabPanel>
                <UuiTabPanel
                  className=" tabDetails__profileSignatureContect"
                  value={value}
                  index={2}
                >
                  <Grid container>
                    <Grid item xs={6} md={4}>
                      <div className="signature_content">
                        <div className="tabDetails__profileSignatureContect--profileSignature">
                          <div className="tabDetails__profileSignatureContect--profileSignature_text">
                            Signature
                          </div>
                        </div>

                        <div className="tabDetails__profileSignatureContect--signatureBox">
                          <div>
                            <img
                              src="https://infoinsdev.informaticsint.com/api/v1/dms-center/file/public/download?path=Theme/Underwriting/signature.svg"
                              alt=""
                            ></img>
                          </div>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </UuiTabPanel>
              </Grid>
            </Grid>
          </Fragment>
        </div>
      </div>
    </div>
  );
};

export default UuiProfile;
