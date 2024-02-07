import { Meta } from "@storybook/react";
import UuiFont from "./font";
import { Card } from "@mui/material";
import React from "react";
import UuiTypography from "../typography";


export default {
    title: "Style/Font",
} as Meta;

export const Default = () => {
    return (
        <Card className="componentCard">
            <div className="componentCard__title formMargin">Typography</div>

            <div className="fontBoxWrapper">
                <div className="fontBoxHeaderWrapper">
                    <div className="fontBoxHeader">
                        <UuiTypography className="Uui-font-header">Poppins</UuiTypography>
                    </div>
                    <div className="formCard__row">
                        <div className="formCard__item">
                            <UuiTypography className="font-regular">Regular</UuiTypography>
                        </div>
                        <div className="formCard__item">
                            <UuiTypography className="font-medium">Medium</UuiTypography>
                        </div>
                        <div className="formCard__item">
                            <UuiTypography className="font-semiBold">Semi Bold</UuiTypography>
                        </div>
                        <div className="formCard__item">
                            <UuiTypography className="font-Bold">Bold</UuiTypography>
                        </div>

                    </div>

                    <div className="formCard__row">
                        <UuiTypography className="font-sampleBodyText">Poppins sans serif font family designed by Ninad Kale is the pure geometric sans-serif typeface that was designed for free so that it can be used worldwide.</UuiTypography>

                    </div>

                </div>
                <div className="fontBoxTextWrapper">
                    <UuiTypography className="font-sampleText">Aa</UuiTypography>
                </div>

            </div>
            <h1 className="componentCard__subHeader">Typography scale</h1>

            <div className="fontScaleBoxWrapper">
                <div className="fontScaleBox formMargin">
                    <div className="fontScaleBox__first">
                        <div>
                        <UuiTypography className="font-scaleText">Size : 60</UuiTypography>
                        <UuiTypography className="font-scaleText">Line Height : 90</UuiTypography>
                        <UuiTypography className="font-scaleText">Letter Space : 2</UuiTypography>
                        <UuiTypography className="font-scaleText">Weight : Bold</UuiTypography>
                        </div>
                    </div>

                    <div className="fontScaleBox__second">
                    <UuiTypography className="Uui-heading1-text">Heading 1</UuiTypography>
                    </div>
                </div>

                <div className="fontScaleBox formMargin">
                    <div className="fontScaleBox__first">
                        <div>
                        <UuiTypography className="font-scaleText">Size : 48</UuiTypography>
                        <UuiTypography className="font-scaleText">Line Height : 72</UuiTypography>
                        <UuiTypography className="font-scaleText">Letter Space : 2</UuiTypography>
                        <UuiTypography className="font-scaleText">Weight : Bold</UuiTypography>
                        </div>
                    </div>

                    <div className="fontScaleBox__second">
                    <UuiTypography className="Uui-heading2-text">Heading 2</UuiTypography>
                    </div>
                </div>

                <div className="fontScaleBox formMargin">
                    <div className="fontScaleBox__first">
                        <div>
                        <UuiTypography className="font-scaleText">Size : 40</UuiTypography>
                        <UuiTypography className="font-scaleText">Line Height : 60</UuiTypography>
                        <UuiTypography className="font-scaleText">Letter Space : 2</UuiTypography>
                        <UuiTypography className="font-scaleText">Weight : Bold</UuiTypography>
                        </div>
                    </div>

                    <div className="fontScaleBox__second">
                    <UuiTypography className="Uui-heading3-text">Heading 3</UuiTypography>
                    </div>
                </div>

                <div className="fontScaleBox formMargin">
                    <div className="fontScaleBox__first">
                        <div>
                        <UuiTypography className="font-scaleText">Size : 32</UuiTypography>
                        <UuiTypography className="font-scaleText">Line Height : 48</UuiTypography>
                        <UuiTypography className="font-scaleText">Letter Space : 2</UuiTypography>
                        <UuiTypography className="font-scaleText">Weight : Bold</UuiTypography>
                        </div>
                    </div>

                    <div className="fontScaleBox__second">
                    <UuiTypography className="Uui-heading4-text">Heading 4</UuiTypography>
                    </div>
                </div>

                <div className="fontScaleBox formMargin">
                    <div className="fontScaleBox__first">
                        <div>
                        <UuiTypography className="font-scaleText">Size : 28</UuiTypography>
                        <UuiTypography className="font-scaleText">Line Height : 42</UuiTypography>
                        <UuiTypography className="font-scaleText">Letter Space : 2</UuiTypography>
                        <UuiTypography className="font-scaleText">Weight : Bold</UuiTypography>
                        </div>
                    </div>

                    <div className="fontScaleBox__second">
                    <UuiTypography className="Uui-heading5-text">Heading 5</UuiTypography>
                    </div>
                </div>

                <div className="fontScaleBox formMargin">
                    <div className="fontScaleBox__first">
                        <div>
                        <UuiTypography className="font-scaleText">Size : 24</UuiTypography>
                        <UuiTypography className="font-scaleText">Line Height : 36</UuiTypography>
                        <UuiTypography className="font-scaleText">Letter Space : 2</UuiTypography>
                        <UuiTypography className="font-scaleText">Weight : Bold</UuiTypography>
                        </div>
                    </div>

                    <div className="fontScaleBox__second">
                    <UuiTypography className="Uui-heading6-text">Heading 6</UuiTypography>
                    </div>
                </div>

                <div className="fontScaleBox formMargin">
                    <div className="fontScaleBox__first">
                        <div>
                        <UuiTypography className="font-scaleText">Size : 18</UuiTypography>
                        <UuiTypography className="font-scaleText">Line Height : 27</UuiTypography>
                        <UuiTypography className="font-scaleText">Letter Space : 2</UuiTypography>
                        <UuiTypography className="font-scaleText">Weight : Bold</UuiTypography>
                        </div>
                    </div>

                    <div className="fontScaleBox__second">
                    <UuiTypography className="Uui-body-text-large">Body Large Bold</UuiTypography>
                    </div>
                </div>

                <div className="fontScaleBox formMargin">
                    <div className="fontScaleBox__first">
                        <div>
                        <UuiTypography className="font-scaleText">Size : 18</UuiTypography>
                        <UuiTypography className="font-scaleText">Line Height : 27</UuiTypography>
                        <UuiTypography className="font-scaleText">Letter Space : 2</UuiTypography>
                        <UuiTypography className="font-scaleText">Weight : Regular</UuiTypography>
                        </div>
                    </div>

                    <div className="fontScaleBox__second">
                    <UuiTypography className="Uui-body-text-medium">Body Large</UuiTypography>
                    </div>
                </div>

                <div className="fontScaleBox formMargin">
                    <div className="fontScaleBox__first">
                        <div>
                        <UuiTypography className="font-scaleText">Size : 16</UuiTypography>
                        <UuiTypography className="font-scaleText">Line Height : 24</UuiTypography>
                        <UuiTypography className="font-scaleText">Letter Space : 2</UuiTypography>
                        <UuiTypography className="font-scaleText">Weight : Bold</UuiTypography>
                        </div>
                    </div>

                    <div className="fontScaleBox__second">
                    <UuiTypography className="Uui-body-text-mediumBold">Body Bold</UuiTypography>
                    </div>
                </div>

                <div className="fontScaleBox formMargin">
                    <div className="fontScaleBox__first">
                        <div>
                        <UuiTypography className="font-scaleText">Size : 16</UuiTypography>
                        <UuiTypography className="font-scaleText">Line Height : 24</UuiTypography>
                        <UuiTypography className="font-scaleText">Letter Space : 2</UuiTypography>
                        <UuiTypography className="font-scaleText">Weight : Regular</UuiTypography>
                        </div>
                    </div>

                    <div className="fontScaleBox__second">
                    <UuiTypography className="Uui-body-text-medium">Body</UuiTypography>
                    </div>
                </div>

                <div className="fontScaleBox formMargin">
                    <div className="fontScaleBox__first">
                        <div>
                        <UuiTypography className="font-scaleText">Size : 14</UuiTypography>
                        <UuiTypography className="font-scaleText">Line Height : 21</UuiTypography>
                        <UuiTypography className="font-scaleText">Letter Space : 2</UuiTypography>
                        <UuiTypography className="font-scaleText">Weight : Regular</UuiTypography>
                        </div>
                    </div>

                    <div className="fontScaleBox__second">
                    <UuiTypography className="Uui-body-text-small">Body Small</UuiTypography>
                    </div>
                </div>

                <div className="fontScaleBox formMargin">
                    <div className="fontScaleBox__first">
                        <div>
                        <UuiTypography className="font-scaleText">Size : 14</UuiTypography>
                        <UuiTypography className="font-scaleText">Line Height : 24</UuiTypography>
                        <UuiTypography className="font-scaleText">Letter Space : 2</UuiTypography>
                        <UuiTypography className="font-scaleText">Weight : Bold</UuiTypography>
                        </div>
                    </div>

                    <div className="fontScaleBox__second">
                    <UuiTypography className="Uui-body-text-smallBold">Body Bold</UuiTypography>
                    </div>
                </div>

            </div>
            <div>
                <UuiTypography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</UuiTypography>
            </div>
        </Card>
    );
};
