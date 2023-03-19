import * as React from "react";
import Svg, { Path } from "react-native-svg";

const MapPinSvg = (props) => (
    <Svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0Z"
            stroke="#7D849A"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            stroke="#7D849A"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default MapPinSvg;
