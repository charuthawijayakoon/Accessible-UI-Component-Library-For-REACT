import { Meta } from "@storybook/react/";
import UuiBreadcrumb from './Breadcrumb';
import { Card } from "@mui/material";
import UuiBreadcrumbCollape from "./BreadcrumbCollape";
import React from "react";

export default {
    title: "Components/Breadcrumb",
} as Meta;


export const Default = () => {

    return (
        <Card className="componentCard">
            <div className="componentCard__title">
                Breadcrumb
            </div>
            <h1 className="componentCard__subHeader">Breadcrumb Component - Short</h1>
            <div>
                <UuiBreadcrumb />
            </div>

            <h1 className="componentCard__subHeader">Collapsed breadcrumbs</h1>
            <div>
                <UuiBreadcrumbCollape />
            </div>

        


        </Card>

    );
};
