import * as React from "react";
import Svg, { Path } from "react-native-svg";

const TruckSvg = (props) => (
    <Svg
        width={12}
        height={12}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M8 1.5H.5V8H8V1.5ZM8 4h2l1.5 1.5V8H8V4ZM2.75 10.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM9.25 10.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
            stroke="#7D849A"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default TruckSvg;
