import * as React from "react";
import Svg, { Path } from "react-native-svg";

const TruckTwoSvg = (props) => (
    <Svg
        width={18}
        height={18}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M12 2.25H.75V12H12V2.25ZM12 6h3l2.25 2.25V12H12V6ZM4.125 15.75a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75ZM13.875 15.75a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75Z"
            stroke="#7D849A"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default TruckTwoSvg;
