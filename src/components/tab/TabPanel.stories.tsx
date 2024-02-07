import { Card } from "@mui/material";
import { Meta } from "@storybook/react";
import React, { Fragment } from "react";
import UuiTabPanel from "./TabPanel";
import { UuiTab, UuiTabs } from ".";

export default {
  title: "components/TabPanel",
} as Meta;

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

export const Default = (args: any) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Card className="componentCard">
    <div className="componentCard__title btnpadding">Tab Panel</div>
    <Fragment>
      <UuiTabs className="rowPadding"
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange as any}
        aria-label="simple tabs example"
      >
        <UuiTab label="Item One" {...a11yProps(0)} />
        <UuiTab label="Item Two" {...a11yProps(1)} />
        <UuiTab label="Item Three" {...a11yProps(2)} />
      </UuiTabs>
      <UuiTabPanel value={value} index={0}>
        Item One
      </UuiTabPanel>
      <UuiTabPanel value={value} index={1}>
        Item Two
      </UuiTabPanel>
      <UuiTabPanel value={value} index={2}>
        Item Three
      </UuiTabPanel>
    </Fragment>
    </Card>
  );
};
