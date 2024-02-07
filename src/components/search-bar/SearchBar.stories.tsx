import { Card } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { Meta } from "@storybook/react";
import React from "react";
import CustomSearchBar from "./CustomSearchBar";
import SearchBar from "./SearchBar";

export default {
  title: "components/SearchBar",
} as Meta;

export const Default = () => {
  return (
    <Card className="componentCard">
      <div className="componentCard__title">SearchBar</div>
      <h1 className="componentCard__subHeader">Custom SearchBar</h1>
      <div>
        <CustomSearchBar text={""} advnSearch={false} />
      </div>
      <h1 className="componentCard__subHeader">Filter SearchBar</h1>
      <div>
        <SearchBar />
      </div>
    </Card>
  );
};
