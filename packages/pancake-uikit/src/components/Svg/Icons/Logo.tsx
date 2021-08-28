import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <div {...props}>
      <Svg viewBox="0 0 32 32">
        <image width="32" height="32" href="/images/logo.png"/>
      </Svg>
    </div>
  );
};

export default Icon;
