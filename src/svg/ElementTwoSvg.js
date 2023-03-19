import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ElementTwoSvg = (props) => (
    <Svg
        width={13}
        height={108}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 108c8.094-14.425 13-33.319 13-54C13 33.319 8.094 14.425 0 0h13v108H0Z"
            fill="#fff"
        />
    </Svg>
);

export default ElementTwoSvg;
