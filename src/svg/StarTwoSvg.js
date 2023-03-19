import * as React from "react";
import Svg, { Path } from "react-native-svg";

const StarTwoSvg = (props) => (
    <Svg
        width={12}
        height={12}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="m6 1 1.545 3.13L11 4.635 8.5 7.07l.59 3.44L6 8.885 2.91 10.51l.59-3.44L1 4.635l3.455-.505L6 1Z"
            stroke="#222"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default StarTwoSvg;
