import * as React from "react";
import Svg, { Path } from "react-native-svg";

const CheckTwoSvg = ({ color }) => (
    <Svg width={14} height={10} fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
            d="M12.333 1 5 8.333 1.667 5"
            stroke={color}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default CheckTwoSvg;
