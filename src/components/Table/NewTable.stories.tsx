import React, { Fragment } from "react";

import { ComponentMeta, Meta } from "@storybook/react";
import {
  ActionProps,
  ColumnRendererProps,
  Schema,
  UuiBacisTable,
} from "../Table/NewTable";
import { Card, CardContent } from "@mui/material";
import UuiEditButton from "../button/EditButton";
import UuiDeleteButton from "../button/DeleteButton";
import UuiViewButton from "../button/ViewButton";

import { UuiIconButton } from "../button";
import UuiCurrentStatus from "../Chips/NewUpdateCurrentStatus";
import UuiMoreButton from "../button/MoreButton";
import UuiTypography from "../typography";



interface SchemaProps {
  Name?: string;
  class?: string;
  expectedGWP?: number;
  date?: boolean;
  isActive?: boolean;
}

interface SampleDetails {
  data: SchemaProps[];
}

const meta: ComponentMeta<any> = {
  title: "Components/Bacis Table",
  args: {
    data: [
      {
        Name: "Carmine Falcone",
        class: "FIRE",
        expectedGWP: "100,000.00",
        date: "17/08/2023",
        isActive: true,
      },
      {
        Name: "Carmine Falcone",
        class: "FIRE",
        expectedGWP: "100,000.00",
        date: "17/08/2023",
        isActive: false,
      },
      {
        Name: "Carmine Falcone",
        class: "FIRE",
        expectedGWP: "100,000.00",
        date: "17/08/2023",
        isActive: true,
      },
      {
        Name: "Carmine Falcone",
        class: "FIRE",
        expectedGWP: "100,000.00",
        date: "17/08/2023",
        isActive: false,
      },
      {
        Name: "Carmine Falcone",
        class: "FIRE",
        expectedGWP: "100,000.00",
        date: "17/08/2023",
        isActive: true,
      },
    ],
  },
};

export default meta;



function IsActiveRenderer({ value }: ColumnRendererProps<boolean>) {
  return <UuiCurrentStatus status={value ? "new" : "tobecontacted"} />;
}

const tableSchema: Schema<SchemaProps> = {
  columns: [
    {
      id: "Name",
      title: "Prospect Name",
    },
    {
      id: "class",
      title: "Class",
    },
    {
      id: "expectedGWP",
      title: "Expected GWP",
    },
    {
      id: "date",
      title: "Date",
    },
    {
      id: "isActive",
      title: "Status",
      Component: IsActiveRenderer,
    },
  ],
};

function SampleActions({ entry, refresh }: ActionProps<SchemaProps>) {
  return (
    <>
      <UuiEditButton />

      <UuiDeleteButton />

      <UuiMoreButton />
    </>
  );
}


