import * as React from "react";
import Svg, { Path } from "react-native-svg";

const InfoSvg = (props) => (
    <Svg
        width={40}
        height={40}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M20 36.667c9.205 0 16.667-7.462 16.667-16.667 0-9.205-7.462-16.667-16.667-16.667-9.205 0-16.666 7.462-16.666 16.667 0 9.205 7.461 16.667 16.666 16.667ZM20 26.667V20M20 13.333h.017"
            stroke="#fff"
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default InfoSvg;
