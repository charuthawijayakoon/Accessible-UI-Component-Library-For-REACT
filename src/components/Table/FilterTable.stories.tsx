import React, { Fragment } from "react";

import { ComponentMeta, Meta } from "@storybook/react";
import {
  ActionProps,
  ColumnRendererProps,
  Schema,
  UuiCompositeTable,
} from "../Table/FilterTable";
import { Card, CardContent } from "@mui/material";
import UuiEditButton from "../button/EditButton";
import UuiDeleteButton from "../button/DeleteButton";
import UuiViewButton from "../button/ViewButton";
import StatusChip from "../Chips/StatusChip";
import { UuiIconButton } from "../button";
import UuiCurrentStatus from "../Chips/NewUpdateCurrentStatus";
import UuiMoreButton from "../button/MoreButton";
import UuiTypography from "../typography";
import { UuiBacisTable } from "./NewTable";
import UuiCollapsibleTable from "./Collapsibletable";

// export default {
//   title: "Components/UuiCompositeTable",
// } as Meta;

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
  title: "Components/ Tables",
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

export const UuiCompositeTableSample = ({ data }: SampleDetails) => {
  return (
    <div className="table_content">
      <CardContent className="formCard__body componentTable table_content">
        <Card>
          <UuiTypography className="table_heading">Tables</UuiTypography>
          <h1 className="componentCard__subHeader table">Short Table</h1>

          <CardContent>
            <UuiCompositeTable
              schema={tableSchema}
              pageInfo={{
                total: data.length,
              }}
              data={data ?? []}
              update={(e: any) => {}}
              Actions={SampleActions}
            />
          </CardContent>
          <h1 className="componentCard__subHeader table">Basic Table</h1>
          <CardContent>
            <UuiBacisTable
              schema={tableSchema}
              pageInfo={{
                total: data.length,
              }}
              data={data ?? []}
              update={(e: any) => {}}
              Actions={SampleActions}
            />
          </CardContent>
          <div className="collapsTableSpacing">
          <h1 className="componentCard__subHeader">Collapsible table</h1>
          <UuiCollapsibleTable />
          </div>
         
        </Card>
      </CardContent>
    </div>
  );
};
