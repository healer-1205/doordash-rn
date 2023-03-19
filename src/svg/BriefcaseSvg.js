import * as React from "react";
import Svg, { Path } from "react-native-svg";

const BriefcaseSvg = (props) => (
    <Svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"
            stroke="#7D849A"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
            stroke="#7D849A"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default BriefcaseSvg;
