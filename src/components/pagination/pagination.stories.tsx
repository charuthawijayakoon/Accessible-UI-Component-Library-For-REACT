import { Meta } from "@storybook/react";
import UuiPagination from "./pagination";
import UuiBasicPagination from "./BasicPagination";
import { Card } from "@mui/material";
import React from "react";


export default {
  title: "Components/Pagination",
} as Meta;

export const Default = () => {
  return (
    <Card className="componentCard">
      <div className="componentCard__title">Pagination</div>
      <div className="componentCard__subHeader">Table Pagination</div>
      <div>
      <UuiPagination />
      </div>

      <div className="componentCard__subHeader">Table Pagination</div>
      <div>
      <UuiBasicPagination />
      </div>
    </Card>
  );
};
