import { Meta } from "@storybook/react";
import UuiCard from "./Card";
import { Card } from "@mui/material";
import UuiWelcomeCard from "./WelcomeCard";
import UuiLandingCard from "./LangingCard";
import { action } from "@storybook/addon-actions";
import React from "react";
import UuiReferenceCard from "./referenceCard";
// import UuiClassCard from "./ClassCard";

export default {
  title: "Components/Card",
} as Meta;

export const Default = () => {
  return (
    <Card className="componentCard">
      <div className="componentCard__title">Cards</div>
      {/* <div>
      <h1 className="componentCard__subHeader">Wlecome Card</h1>
        <UuiWelcomeCard />
      </div>

      <div>
      <h1 className="componentCard__subHeader">Dashboard Card </h1>
        <UuiCard />
      </div> */}

      <div className="landingCardDiv">
      <h1 className="componentCard__subHeader">Landing Card</h1>
        <UuiLandingCard onClick={action("clicked")} />
      </div>

      
      <h1 className="componentCard__subHeader cardPadinng">Reference Card</h1>
        <UuiReferenceCard onClick={function (): void {
        throw new Error("Function not implemented.");
      } } />
      
    </Card>
  );
};


