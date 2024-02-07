import React from "react";
import { Meta, Story } from "@storybook/react";
import UuiAvatar, { UuiAvatarProps } from ".";
import { Theme } from "@mui/material/styles";

//======================================================== import profilePic from "../../resources/123.jpg";
import { Card } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default {
  title: "components/Avatar",
  component: UuiAvatar,
} as Meta;
const Template: Story<UuiAvatarProps> = (args: any) => <UuiAvatar {...args} />;

// export const Default = Template.bind({});
// Default.args = {
//     alt:"Name",
//     src:"",
//     className:""
// };

export const Sizes = () => {
  return (
    <Card className="componentCard">
      <div className="componentCard__title">Avatar</div>
      <div className="componentListDiv">
        <h1 className="componentCard__subHeader">Size</h1>
        <div className="componentCard__phara">
          The size of the Avatar is depending on a use case:
        </div>
        <ul className="componentList">
          <li>24-40dp width is used for App bars, Headers, etc</li>
          <li>40-48dp for Avatar used in lists, or content blocks.</li>
          <li>56+ when used in templates: Profile, Settings, etc.</li>
        </ul>
      </div>
      <div className="avatarCard">
        <UuiAvatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          className="avatarCard__smallAvatar"
        />
        <UuiAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <UuiAvatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          className="avatarCard__largeAvatar"
        />
        {/*=================================================================== <UuiAvatar
          alt="Remy Sharp"
          src={profilePic}
          className="avatarCard__smallAvatar"
        />
        <UuiAvatar alt="Remy Sharp" src={profilePic} />
        <UuiAvatar
          alt="Remy Sharp"
          src={profilePic}
          className="avatarCard__largeAvatar"
        />=========================================================================== */}
      </div>
    </Card>
  );
};
