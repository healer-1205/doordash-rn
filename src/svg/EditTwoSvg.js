import * as React from "react";
import Svg, { Path } from "react-native-svg";

const EditTwoSvg = (props) => (
    <Svg
        width={20}
        height={20}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M10 16.667h7.5M13.75 2.917a1.768 1.768 0 0 1 2.5 2.5L5.833 15.833l-3.333.834.833-3.334L13.75 2.917Z"
            stroke="#7D849A"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default EditTwoSvg;
