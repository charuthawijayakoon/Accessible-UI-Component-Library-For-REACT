import React, { PropsWithChildren } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import SettingsIcon from '@mui/icons-material/Settings';
import SettingsIcon from '@mui/icons-material/Settings';

// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { UuiButton } from "../button";
import UuiTypography from "../typography";
import { Grid } from "@mui/material";

interface UuiReferenceCardprop {
    title?: string;
    content?: string;
    onClick(): void;
}

function UuiReferenceCard(props: PropsWithChildren<UuiReferenceCardprop>) {
    return (
        <div className="titleCardContent">
            <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4} lg={3} >
                        <div className="Reference--card iit__flex iit__flex-direction-column iit__flex-nowrap iit__item--center iit__item--justify--center ">
                            {/* {res.displayName} */}
                            <div className="go-corner" >
                                <div className="go-arrow">
                                    →
                                </div>
                            </div>
                            <div className="Uui-txt-tileCard iit__item">CUSTOMER DOCUMENT</div>
                        </div>
                    </Grid>
            </Grid>
        </div>
    );
}

export default UuiReferenceCard;
