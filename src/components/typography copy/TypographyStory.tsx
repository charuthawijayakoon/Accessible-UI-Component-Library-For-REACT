import React, { ReactNode } from "react";
import "./TypographyStory.scss";

interface BaseTypographyStoryProps {
  children?: ReactNode;
  className?: ReactNode;
  family?: string;
  weight?: string;
  size?: string;
  letterSpacing?: string;
}

export type TypographyStoryProps = BaseTypographyStoryProps;

const TypographyStory = (props: TypographyStoryProps) => {
  const { className, children, family, weight, size, letterSpacing } = props;
  return (
    <div className="typography">
      <div className="typography__element">{children}</div>
      <div className="typography__props">
        {family ? (
          <div className="typography__props__item">
            <span>Font family: </span>
            <span>{family}</span>
          </div>
        ) : (
          ""
        )}

        {weight ? (
          <div className="typography__props__item">
            <span>Font weight: </span>
            <span>{weight}</span>
          </div>
        ) : (
          ""
        )}

        {size ? (
          <div className="typography__props__item">
            <span>Font size: </span>
            <span>{size}</span>
          </div>
        ) : (
          ""
        )}

        {letterSpacing ? (
          <div className="typography__props__item">
            <span>Letter spacing: </span>
            <span>{letterSpacing}</span>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default TypographyStory;
