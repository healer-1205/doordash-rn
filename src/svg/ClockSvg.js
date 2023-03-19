import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ClockSvg = (props) => (
    <Svg
        width={18}
        height={19}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M9 17A7.5 7.5 0 1 0 9 2a7.5 7.5 0 0 0 0 15Z"
            stroke="#7D849A"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M9 5v4.5l3 1.5"
            stroke="#7D849A"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default ClockSvg;
