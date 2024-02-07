import React from "react";
import { Meta, Story } from "@storybook/react";
import UuiColorPalette, { UuiColorPaletteProps } from "./colorPalette";
import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
import createStyles from "@mui/styles/createStyles";
import { Card } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default {
  title: "Style/Color-Palette",
  component: UuiColorPalette,
} as Meta;
const Template: Story<UuiColorPaletteProps> = (args: any) => (
  <UuiColorPalette {...args} />
);

// export const Default = Template.bind({});
// Default.args = {
//     alt:"Name",
//     src:"",
//     className:""
// };


export const Sizes = () => {


  return (
    <Card className="componentCard">
      <div className="">
        <div className="componentCard__title">The Color Palette</div>
        {/* <div className="colorPalette">
          <div className="colorPalette__itemName">
            Name
          </div>

          <div className="colorPalette__itemcolor">
            Swatches
          </div>
        </div> */}

        <div className="colorPalette">
          <div className="colorPalette__itemName">
            <div className="colorPlatteNameWrapper">
              <div className="colorPalette__itemName--colorName">
                theme.color.primary
              </div>

              <div className="colorPalette__itemName--color">
                Magnatic
              </div>
            </div>
            {/* <div className="colorPalette__itemName--colorName">
              theme.color.primary
            </div> */}
          </div>

          <div className="colorPalette__itemcolor">
            <div className="colorPalette__itemcolor--colorCard">
              <div className="colorPalette__itemcolor--colorCard-color primaryColor">
              </div>
              <div className="colorPalette__itemcolor--colorCard-colorCode">
                #005EB8
              </div>
            </div>
          </div>
        </div>

        <div className="colorPalette">
          <div className="colorPalette__itemName">
            <div className="colorPlatteNameWrapper">
              <div className="colorPalette__itemName--colorName">
                theme.color.secondary
              </div>

              <div className="colorPalette__itemName--color">
                Klimt
              </div>
            </div>
          </div>

          <div className="colorPalette__itemcolor">
            <div className="colorPalette__itemcolor--colorCard">
              <div className="colorPalette__itemcolor--colorCard-color secondaryColor">
              </div>
              <div className="colorPalette__itemcolor--colorCard-colorCode">
                #59A8A5
              </div>
            </div>
          </div>
        </div>

        <div className="colorPalette">
          <div className="colorPalette__itemName">
            <div className="colorPlatteNameWrapper">
              <div className="colorPalette__itemName--colorName">
                theme.color.Neutral
              </div>

              <div className="colorPalette__itemName--color">
                Umbra
              </div>
            </div>
          </div>

          <div className="colorPalette__itemcolor">
            <div className="colorPalette__itemcolor--colorCard">
              <div className="colorPalette__itemcolor--colorCard-color neturalColor">
              </div>
              <div className="colorPalette__itemcolor--colorCard-colorCode">
                #272525
              </div>
            </div>
          </div>
        </div>

        <div className="colorPalette">
          <div className="colorPalette__itemName">
            <div className="colorPlatteNameWrapper">
              <div className="colorPalette__itemName--colorName">
                theme.color.Shade
              </div>

              <div className="colorPalette__itemName--color">
                Cloud
              </div>
            </div>
          </div>

          <div className="colorPalette__itemcolor">
            <div className="colorPalette__itemcolor--colorCard">
              <div className="colorPalette__itemcolor--colorCard-color cloudColor">
              </div>
              <div className="colorPalette__itemcolor--colorCard-colorCode">
                #EDEDED
              </div>
            </div>
          </div>
        </div>

        <div className="colorPalette">
          <div className="colorPalette__itemName">
            <div className="colorPlatteNameWrapper">
              <div className="colorPalette__itemName--colorName">
                theme.color.Dark
              </div>

              <div className="colorPalette__itemName--color">
                Lava
              </div>
            </div>
          </div>

          <div className="colorPalette__itemcolor">
            <div className="colorPalette__itemcolor--colorCard">
              <div className="colorPalette__itemcolor--colorCard-color lavaColor">
              </div>
              <div className="colorPalette__itemcolor--colorCard-colorCode">
                #474842
              </div>
            </div>
          </div>
        </div>

        <div className="colorPalette">
          <div className="colorPalette__itemName">
            <div className="colorPlatteNameWrapper">
              <div className="colorPalette__itemName--colorName">
                theme.color.BodyText
              </div>

              <div className="colorPalette__itemName--color">
                Ravenwood
              </div>
            </div>
          </div>

          <div className="colorPalette__itemcolor">
            <div className="colorPalette__itemcolor--colorCard">
              <div className="colorPalette__itemcolor--colorCard-color ravenColor">
              </div>
              <div className="colorPalette__itemcolor--colorCard-colorCode">
                #474842
              </div>
            </div>
          </div>
        </div>

        <div className="colorPalette">
          <div className="colorPalette__itemName">
            <div className="colorPlatteNameWrapper">
              <div className="colorPalette__itemName--colorName">
                theme.color.Light
              </div>

              <div className="colorPalette__itemName--color">
                Frozen Periwinkle
              </div>
            </div>
          </div>

          <div className="colorPalette__itemcolor">
            <div className="colorPalette__itemcolor--colorCard">
              <div className="colorPalette__itemcolor--colorCard-color frozenColor">
              </div>
              <div className="colorPalette__itemcolor--colorCard-colorCode">
                #C2CAEC
              </div>
            </div>
          </div>
        </div>

        <div className="colorPalette">
          <div className="colorPalette__itemName">
            <div className="colorPlatteNameWrapper">
              <div className="colorPalette__itemName--colorName">
                theme.color.Light
              </div>

              <div className="colorPalette__itemName--color">
                Smoke
              </div>
            </div>
          </div>

          <div className="colorPalette__itemcolor">
            <div className="colorPalette__itemcolor--colorCard">
              <div className="colorPalette__itemcolor--colorCard-color smokeColor">
              </div>
              <div className="colorPalette__itemcolor--colorCard-colorCode">
                #F9F9F9
              </div>
            </div>
          </div>
        </div>

        <div className="colorPalette">
          <div className="colorPalette__itemName">
            <div className="colorPlatteNameWrapper">
              <div className="colorPalette__itemName--colorName">
                theme.color.Clear
              </div>

              <div className="colorPalette__itemName--color">
                White
              </div>
            </div>
          </div>

          <div className="colorPalette__itemcolor">
            <div className="colorPalette__itemcolor--colorCard">
              <div className="colorPalette__itemcolor--colorCard-color clearColor">
              </div>
              <div className="colorPalette__itemcolor--colorCard-colorCode">
                #FFFFFF
              </div>
            </div>
          </div>
        </div>

        <h1 className="componentCard__subHeader">Alerts</h1>
        <div className="colorPalette">
          <div className="colorPalette__itemName">
            <div className="colorPlatteNameWrapper">
              <div className="colorPalette__itemName--colorName">
                theme.color.info
              </div>

              <div className="colorPalette__itemName--color">
                Bumangues
              </div>
            </div>
            {/* <div className="colorPalette__itemName--colorName">
              theme.color.primary
            </div> */}
          </div>

          <div className="colorPalette__itemcolor">
            <div className="colorPalette__itemcolor--colorCard">
              <div className="colorPalette__itemcolor--colorCard-color info-alert-color">
              </div>
              <div className="colorPalette__itemcolor--colorCard-colorCode">
                #0B72B7
              </div>
            </div>
          </div>
        </div>

        <div className="colorPalette">
          <div className="colorPalette__itemName">
            <div className="colorPlatteNameWrapper">
              <div className="colorPalette__itemName--colorName">
                theme.color.error
              </div>

              <div className="colorPalette__itemName--color">
                Chi-gong
              </div>
            </div>
            {/* <div className="colorPalette__itemName--colorName">
              theme.color.primary
            </div> */}
          </div>

          <div className="colorPalette__itemcolor">
            <div className="colorPalette__itemcolor--colorCard">
              <div className="colorPalette__itemcolor--colorCard-color error-alert-color">
              </div>
              <div className="colorPalette__itemcolor--colorCard-colorCode">
                #D32F2F
              </div>
            </div>
          </div>
        </div>

        <div className="colorPalette">
          <div className="colorPalette__itemName">
            <div className="colorPlatteNameWrapper">
              <div className="colorPalette__itemName--colorName">
                theme.color.success
              </div>

              <div className="colorPalette__itemName--color">
                Bilbao
              </div>
            </div>
            {/* <div className="colorPalette__itemName--colorName">
              theme.color.primary
            </div> */}
          </div>

          <div className="colorPalette__itemcolor">
            <div className="colorPalette__itemcolor--colorCard">
              <div className="colorPalette__itemcolor--colorCard-color sucess-alert-color">
              </div>
              <div className="colorPalette__itemcolor--colorCard-colorCode">
                #3F7D20
              </div>
            </div>
          </div>
        </div>

        <div className="colorPalette">
          <div className="colorPalette__itemName">
            <div className="colorPlatteNameWrapper">
              <div className="colorPalette__itemName--colorName">
                theme.color.warning
              </div>

              <div className="colorPalette__itemName--color">
                Crown
              </div>
            </div>
            {/* <div className="colorPalette__itemName--colorName">
              theme.color.primary
            </div> */}
          </div>

          <div className="colorPalette__itemcolor">
            <div className="colorPalette__itemcolor--colorCard">
              <div className="colorPalette__itemcolor--colorCard-color warning-alert-color">
              </div>
              <div className="colorPalette__itemcolor--colorCard-colorCode">
                #D4B011
              </div>
            </div>
          </div>
        </div>

        <h1 className="componentCard__subHeader">Status Chip</h1>
        <div className="colorPaletteStatus">
          <div className="colorPaletteStatus__outline Uui-color-palette">
            Outline
          </div>
          <div className="colorPaletteStatus__text Uui-color-palette">
            Text
          </div>
          <div className="colorPaletteStatus__background Uui-color-palette">
            Background
          </div>
          <div className="colorPaletteStatus__statusName Uui-color-palette">
            Status Name
          </div>
        </div>
        <div className="colorPaletteStatus">
          <div className="colorPaletteStatus__outline Uui-color-palette">
            <div className="colorPaletteStatus__outline--activeOutlineColor info-active-chip-outline ">
              <div className="platteColorCode">#9FE19B</div>
            </div>

          </div>
          <div className="colorPaletteStatus__text Uui-color-palette">
            <div className="colorPaletteStatus__text--activeTextColor info-active-chip-text">
              <div className="platteTitle">Gamora</div>
              <div className="platteColorCode">#10C201</div>
            </div>
          </div>
          <div className="colorPaletteStatus__background Uui-color-palette">
            <div className="colorPaletteStatus__background--activeBackColor info-active-chip-background">
              <div className="platteTitle">Rash</div>
              <div className="platteColorCode">#E7F9E6</div>
            </div>
          </div>
          <div className="colorPaletteStatus__statusName Uui-color-palette">
            <div>
              Active
            </div>
          </div>
        </div>

        <div className="colorPaletteStatus">
          <div className="colorPaletteStatus__outline Uui-color-palette">
            <div className="colorPaletteStatus__outline--activeOutlineColor info-inactive-chip-outline ">
              <div className="platteColorCode">#9FE19B</div>
            </div>

          </div>
          <div className="colorPaletteStatus__text Uui-color-palette">
            <div className="colorPaletteStatus__text--activeTextColor info-inactive-chip-text">
              <div className="platteTitle">Gamora</div>
              <div className="platteColorCode">#10C201</div>
            </div>
          </div>
          <div className="colorPaletteStatus__background Uui-color-palette">
            <div className="colorPaletteStatus__background--activeBackColor info-inactive-chip-background">
              <div className="platteTitle">Rash</div>
              <div className="platteColorCode">#E7F9E6</div>
            </div>
          </div>
          <div className="colorPaletteStatus__statusName Uui-color-palette">
            <div>
              Inactive
            </div>
          </div>
        </div>

        <div className="colorPaletteStatus">
          <div className="colorPaletteStatus__outline Uui-color-palette">
            <div className="colorPaletteStatus__outline--activeOutlineColor info-complete-chip-outline ">
              <div className="platteColorCode">#CAB9FB</div>
            </div>

          </div>
          <div className="colorPaletteStatus__text Uui-color-palette">
            <div className="colorPaletteStatus__text--activeTextColor info-complete-chip-text">
              <div className="platteTitle">Waiporoporo</div>
              <div className="platteColorCode">#6A48CA</div>
            </div>
          </div>
          <div className="colorPaletteStatus__background Uui-color-palette">
            <div className="colorPaletteStatus__background--activeBackColor info-complete-chip-background">
              <div className="platteTitle">Placebo purple</div>
              <div className="platteColorCode">#F0EDFA </div>
            </div>
          </div>
          <div className="colorPaletteStatus__statusName Uui-color-palette">
            <div>
              Completed
            </div>
          </div>
        </div>

        <div className="colorPaletteStatus">
          <div className="colorPaletteStatus__outline Uui-color-palette">
            <div className="colorPaletteStatus__outline--activeOutlineColor info-approved-chip-outline ">
              <div className="platteColorCode">#CAB9FB</div>
            </div>

          </div>
          <div className="colorPaletteStatus__text Uui-color-palette">
            <div className="colorPaletteStatus__text--activeTextColor info-approved-chip-text">
              <div className="platteTitle">Waiporoporo</div>
              <div className="platteColorCode">#6A48CA</div>
            </div>
          </div>
          <div className="colorPaletteStatus__background Uui-color-palette">
            <div className="colorPaletteStatus__background--activeBackColor info-approved-chip-background">
              <div className="platteTitle">Placebo purple</div>
              <div className="platteColorCode">#F0EDFA </div>
            </div>
          </div>
          <div className="colorPaletteStatus__statusName Uui-color-palette">
            <div>
            approved
            </div>
          </div>
        </div>

        <div className="colorPaletteStatus">
          <div className="colorPaletteStatus__outline Uui-color-palette">
            <div className="colorPaletteStatus__outline--activeOutlineColor info-rejected-chip-outline ">
              <div className="platteColorCode">#FFCFCF</div>
            </div>

          </div>
          <div className="colorPaletteStatus__text Uui-color-palette">
            <div className="colorPaletteStatus__text--activeTextColor info-rejected-chip-text">
              <div className="platteTitle">Chi-gong</div>
              <div className="platteColorCode">#D32F2F</div>
            </div>
          </div>
          <div className="colorPaletteStatus__background Uui-color-palette">
            <div className="colorPaletteStatus__background--activeBackColor info-rejected-chip-background">
              <div className="platteTitle">Placebo</div>
              <div className="platteColorCode">#FBEAEA </div>
            </div>
          </div>
          <div className="colorPaletteStatus__statusName Uui-color-palette">
            <div>
            rejected
            </div>
          </div>
        </div>

        <div className="colorPaletteStatus">
          <div className="colorPaletteStatus__outline Uui-color-palette">
            <div className="colorPaletteStatus__outline--activeOutlineColor info-pending-chip-outline ">
              <div className="platteColorCode">#FFCFCF</div>
            </div>

          </div>
          <div className="colorPaletteStatus__text Uui-color-palette">
            <div className="colorPaletteStatus__text--activeTextColor info-pending-chip-text">
              <div className="platteTitle">Chi-gong</div>
              <div className="platteColorCode">#D32F2F</div>
            </div>
          </div>
          <div className="colorPaletteStatus__background Uui-color-palette">
            <div className="colorPaletteStatus__background--activeBackColor info-pending-chip-background">
              <div className="platteTitle">Placebo</div>
              <div className="platteColorCode">#FBEAEA </div>
            </div>
          </div>
          <div className="colorPaletteStatus__statusName Uui-color-palette">
            <div>
            Pending
            </div>
          </div>
        </div>

        <div className="colorPaletteStatus">
          <div className="colorPaletteStatus__outline Uui-color-palette">
            <div className="colorPaletteStatus__outline--activeOutlineColor info-onhold-chip-outline ">
              <div className="platteColorCode">#CECECC</div>
            </div>

          </div>
          <div className="colorPaletteStatus__text Uui-color-palette">
            <div className="colorPaletteStatus__text--activeTextColor info-onhold-chip-text">
              <div className="platteTitle">Hard Coal</div>
              <div className="platteColorCode">#656564</div>
            </div>
          </div>
          <div className="colorPaletteStatus__background Uui-color-palette">
            <div className="colorPaletteStatus__background--activeBackColor info-onhold-chip-background">
              <div className="platteTitle">Preciouses Perl</div>
              <div className="platteColorCode">#F0F0EF </div>
            </div>
          </div>
          <div className="colorPaletteStatus__statusName Uui-color-palette">
            <div>
            On hold
            </div>
          </div>
        </div>

        <div className="colorPaletteStatus">
          <div className="colorPaletteStatus__outline Uui-color-palette">
            <div className="colorPaletteStatus__outline--activeOutlineColor info-blacklisted-chip-outline ">
              <div className="platteColorCode">#C8C8C8</div>
            </div>

          </div>
          <div className="colorPaletteStatus__text Uui-color-palette">
            <div className="colorPaletteStatus__text--activeTextColor info-blacklisted-chip-text">
              <div className="platteTitle">Nero</div>
              <div className="platteColorCode">#272525</div>
            </div>
          </div>
          <div className="colorPaletteStatus__background Uui-color-palette">
            <div className="colorPaletteStatus__background--activeBackColor info-blacklisted-chip-background">
              <div className="platteTitle">Snowbank</div>
              <div className="platteColorCode">#E9E9E9 </div>
            </div>
          </div>
          <div className="colorPaletteStatus__statusName Uui-color-palette">
            <div>
            Blacklisted
            </div>
          </div>
        </div>

        <div className="colorPaletteStatus">
          <div className="colorPaletteStatus__outline Uui-color-palette">
            <div className="colorPaletteStatus__outline--activeOutlineColor info-confirmed-chip-outline ">
              <div className="platteColorCode">#8BBFE3</div>
            </div>

          </div>
          <div className="colorPaletteStatus__text Uui-color-palette">
            <div className="colorPaletteStatus__text--activeTextColor info-confirmed-chip-text">
              <div className="platteTitle">Bumabgues</div>
              <div className="platteColorCode">#0B72B7</div>
            </div>
          </div>
          <div className="colorPaletteStatus__background Uui-color-palette">
            <div className="colorPaletteStatus__background--activeBackColor info-confirmed-chip-background">
              <div className="platteTitle">Clear vison</div>
              <div className="platteColorCode">#E7F1F8 </div>
            </div>
          </div>
          <div className="colorPaletteStatus__statusName Uui-color-palette">
            <div>
            Confirmed
            </div>
          </div>
        </div>

        <div className="colorPaletteStatus">
          <div className="colorPaletteStatus__outline Uui-color-palette">
            <div className="colorPaletteStatus__outline--activeOutlineColor info-issued-chip-outline ">
              <div className="platteColorCode">#C1D696</div>
            </div>

          </div>
          <div className="colorPaletteStatus__text Uui-color-palette">
            <div className="colorPaletteStatus__text--activeTextColor info-issued-chip-text">
              <div className="platteTitle">Obscure olive</div>
              <div className="platteColorCode">#495F20</div>
            </div>
          </div>
          <div className="colorPaletteStatus__background Uui-color-palette">
            <div className="colorPaletteStatus__background--activeBackColor info-issued-chip-background">
              <div className="platteTitle">Extra White</div>
              <div className="platteColorCode">#EDEFE9 </div>
            </div>
          </div>
          <div className="colorPaletteStatus__statusName Uui-color-palette">
            <div>
            Issued
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
