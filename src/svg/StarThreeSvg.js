import * as React from "react";
import Svg, { Path } from "react-native-svg";

const StarThreeSvg = (props) => (
    <Svg
        width={13}
        height={13}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="m6.5 1.083 1.674 3.391 3.743.547L9.209 7.66l.639 3.727L6.5 9.626l-3.347 1.76.639-3.727-2.708-2.638 3.742-.547L6.5 1.084Z"
            stroke="#FD5252"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default StarThreeSvg;
