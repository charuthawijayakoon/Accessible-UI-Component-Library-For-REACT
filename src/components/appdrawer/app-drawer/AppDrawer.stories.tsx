import { Meta } from "@storybook/react";
import UuiAppDrawer from "./AppDrawer";
import { Card, CardContent } from "@mui/material";
import AppDrawerHeader, {
  UserInfo,
} from "../app-drawer-header/AppDrawerHeader";
import { links, userInfo } from "../defaults";
import { useState } from "react";
import React from "react";
import { UuiButton } from "../../button";
import TemporaryDrawer from "./drawer";

export default {
  title: "Components/App-drawer",
  args: {
    data: {
      image: "/static/images/avatar/1.jpg",
      username: "Saman Perera",
      email: "saman.perera@companyname.com",
    },
  },
} as Meta;

export const Default = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div>
        <CardContent className="formCard__body componentTable table_content padding">
          <Card >
            <div className="componentCard__title titleAction">
              Drawer
            </div>
            <div>
              <TemporaryDrawer
                links={links ?? []}
                userInfo={userInfo}
                navigate={(to: string) => {
                  console.log(to);
                } }
                isMainLink={false} open={false} onClose={function (): void {
                  throw new Error("Function not implemented.");
                } }              />

              {/* <UuiAppDrawer
                open={open}
                onClose={() => {
                  setOpen(false);
                }}
                links={links ?? []}
                userInfo={userInfo}
                navigate={(to: string) => {
                  console.log(to);
                }}
                isMainLink={false}
              /> */}

            </div>
          </Card>

        </CardContent>


      </div>

    </>
  );

};
