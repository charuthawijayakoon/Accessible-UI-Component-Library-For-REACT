import React from "react";
import UuiTypography from "../typography";
import { UuiIconButton } from "../button";
import { Grid } from "@mui/material";
// import ShowChartIcon from '@mui/icons-material/ShowChart';

const UuiCard = ({ ...props }) => {
  return (
    <div className="saleDashboard__containerCards">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <div className="saleDashboard__containerCards--dashCardOut">
            <div className="saleDashboard__containerCards--dashCardOut-content">
              <div className="Dash-header">
                <div className="Uui-DashCard--header Uui-DashCard--color">
                  Outstanding Premium
                </div>
                <div className="Uui-DashCard--color Uui-txt-lite dateText">
                  For 20 August 2023{" "}
                </div>
              </div>
            </div>
            <div className="saleDashboard__containerCards--dashCardOut-content">
              <div className="Uui-DashCard--color--val">LKR 1589,123</div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          {/* <div className="saleDashboard__containerCards--dashCardPros" >
                        <div className="saleDashboard__containerCards--dashCardPros-content">
                            <div className="Dash-header">
                                <div className="Uui-DashCard--header Uui-DashCard--color">Prospect Status</div>
                                <div className="Uui-DashCard--color Uui-txt-lite">For 20 August 2023  </div>
                            </div>
                        </div>
                        <div className="saleDashboard__containerCards--dashCardPros-content">
                            <div className="Uui-DashCard--color--val">135</div>
                        </div>
                    </div> */}
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          {/* <div className="saleDashboard__containerCards--dashCardProsLast" >
                        <div className="saleDashboard__containerCards--dashCardProsLast-content">
                            <div className="Dash-header">
                                <div className="Uui-DashCard--header Uui-DashCard--color">Outstanding Premium</div>
                                <div className="Uui-DashCard--color Uui-txt-lite">For 20 August 2023 </div>
                            </div>
                        </div>
                        <div className="saleDashboard__containerCards--dashCardProsLast-content">
                            <div className="Uui-DashCard--color--val">LKR 1589,123</div>
                        </div>
                    </div> */}
        </Grid>
      </Grid>
      <div></div>
    </div>
  );
};

export default UuiCard;
