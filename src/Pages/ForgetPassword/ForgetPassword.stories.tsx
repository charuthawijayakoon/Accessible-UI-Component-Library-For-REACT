import { Meta } from "@storybook/react";
import React from "react";
import { ForgotPasswordInfo } from "./ForgotPassword";

export default {
  title: "Screens/ForgotPasswordPage",
} as Meta;


export const Default  = () => {
    
  return (
   <div>
      <ForgotPasswordInfo/>
    </div>
  );
};
