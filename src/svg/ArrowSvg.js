import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowSvg = (props) => (
    <Svg
        width={21}
        height={12}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M.47 5.47a.75.75 0 0 0 0 1.06l4.773 4.773a.75.75 0 1 0 1.06-1.06L2.061 6l4.242-4.243a.75.75 0 0 0-1.06-1.06L.47 5.47ZM21 5.25H1v1.5h20v-1.5Z"
            fill="#222"
        />
    </Svg>
);

export default ArrowSvg;
