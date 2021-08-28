import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <div {...props}>
      <Svg viewBox="0 0 90 90">
         <image width="90" height="90" href="/images/logo.png"/>
      </Svg>
    </div>
  );
};

export default Icon;
