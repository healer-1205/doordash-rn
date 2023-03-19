import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SelectSvg = (props) => (
    <Svg
        width={13}
        height={10}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M11.262 1 4.207 8.33 1 4.998"
            stroke="#00824B"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default SelectSvg;
