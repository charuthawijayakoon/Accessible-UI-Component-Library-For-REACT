import React, { PropsWithChildren } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import SettingsIcon from '@mui/icons-material/Settings';

import { UuiButton } from "../button";
import UuiTypography from "../typography";

interface UuiLandingCardprop {
  title?: string;
  content?: string;
  onClick(): void;
}

function UuiLandingCard(props: PropsWithChildren<UuiLandingCardprop>) {

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      props.onClick();
    }
  };

  return (
    <Card 
    className="Uui-landingPage__card" 
    tabIndex={0} // Make the card focusable
    onClick={props.onClick}
    onKeyPress={handleKeyPress} // Handle keyboard events
      role="button" // Add role for screen reader compatibility
      aria-label="Landing Card" // Provide descriptive label for screen readers
    >
      <CardContent className="landingCardContentBar">
          <div className='Uui-landingPage__topBar'>
            <SettingsIcon className="Uui-txt--primary" />
          </div>
    
          <UuiTypography className="Uui-txt-bold">
          Policy Center
          </UuiTypography>
        
          <UuiTypography className="Uui-txt-small">
          Universal UI
          </UuiTypography>
      </CardContent>
      <CardActions className="Uui-card-actions">
          <div className="Uui-txt--primary">Explore</div>
          <i className="ri-arrow-right-line Uui-txt--primary"></i>
      </CardActions>
</Card>
  );
}

export default UuiLandingCard;
