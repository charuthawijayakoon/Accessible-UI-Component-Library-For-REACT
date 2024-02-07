import { Meta } from "@storybook/react";
import React from "react";
import LoginPage from "./loging";

export default {
  title: "Screens/Login",
} as Meta;

export const Default = () => {
  return (
    <div>
      <LoginPage />
    </div>
  );
};
