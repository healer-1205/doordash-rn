import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ElementSvg = (props) => (
    <Svg
        width={22}
        height={140}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 140c13.523-17.365 22-42.298 22-70 0-27.702-8.477-52.635-22-70h22v140H0Z"
            fill="#fff"
        />
    </Svg>
);

export default ElementSvg;
