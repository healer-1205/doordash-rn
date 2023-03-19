import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

const BasketSvg = (props) => (
    <Svg
        width={30}
        height={30}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G
            opacity={0.87}
            stroke="#fff"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <Path d="M3.75 7.5h22.5M10 7.5V5a2.5 2.5 0 0 1 2.5-2.5h5A2.5 2.5 0 0 1 20 5v2.5m3.75 0V25a2.5 2.5 0 0 1-2.5 2.5H8.75a2.5 2.5 0 0 1-2.5-2.5V7.5h17.5ZM12.5 13.75v7.5M17.5 13.75v7.5" />
        </G>
    </Svg>
);

export default BasketSvg;
