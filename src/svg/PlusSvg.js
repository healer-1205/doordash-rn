import * as React from "react";
import Svg, { Path } from "react-native-svg";

const PlusSvg = (props) => (
    <Svg
        width={16}
        height={16}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M8 3.333v9.334M3.333 8h9.334"
            stroke="#7D849A"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default PlusSvg;
