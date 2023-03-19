import * as React from "react";
import Svg, { Path } from "react-native-svg";

const MapPinTwoSvg = (props) => (
    <Svg
        width={18}
        height={18}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M15.75 7.5c0 5.25-6.75 9.75-6.75 9.75s-6.75-4.5-6.75-9.75a6.75 6.75 0 0 1 13.5 0Z"
            stroke="#7D849A"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M9 9.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
            stroke="#7D849A"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default MapPinTwoSvg;
