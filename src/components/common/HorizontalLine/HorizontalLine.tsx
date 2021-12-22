import React, { FC } from "react";

interface IHozLineProps {
  className?: string;
  height: number;
  color: string;
  margin?: number;
}

const HorizontalLine: FC<IHozLineProps> = ({
  className,
  height = 1,
  color = "#DDDDDD",
  margin = 0,
}) => {
  return (
    <hr
      style={{
        backgroundColor: color,
        height: height,
        border: 0,
        margin: margin,
      }}
      className={className}
    />
  );
};

export default HorizontalLine;
