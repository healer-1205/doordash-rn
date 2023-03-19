import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SmallMapPinTwo = (props) => (
    <Svg
        width={12}
        height={12}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M10.5 5c0 3.5-4.5 6.5-4.5 6.5S1.5 8.5 1.5 5a4.5 4.5 0 0 1 9 0Z"
            stroke="#7D849A"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M6 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
            stroke="#7D849A"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default SmallMapPinTwo;
