import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <div {...props}>
        <Svg viewBox="0 0 26 26">
            <image width="26" height="26" href="/images/logo.png"/>
        </Svg>
        <div style={{color: textColor, alignSelf: 'center'}}>OwlSwap</div>
    </div>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
