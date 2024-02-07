import { Meta } from "@storybook/react";

import { Card } from "@mui/material";
import ShortcutBar from "./ShortcutBar";
import React from "react";

export default {
  title: "Components/Shortcut-Bar",
} as Meta;

export const Default = () => {
  return (
    <Card className="componentCard">
      <div className="componentCard__title" >Shortcut Bar</div>
      <div>
        <ShortcutBar />
      </div>
    </Card>
  );
};
