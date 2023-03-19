import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

const FacebookSvg = (props) => (
    <Svg
        width={50}
        height={50}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M28 16.003 25.925 16c-2.331 0-3.838 1.546-3.838 3.938v1.815h-2.086a.326.326 0 0 0-.326.326v2.631c0 .18.146.326.326.326h2.086v6.638c0 .18.146.326.326.326h2.722c.18 0 .326-.146.326-.326v-6.638h2.44c.18 0 .326-.146.326-.326l.001-2.63a.327.327 0 0 0-.326-.327h-2.44v-1.539c0-.74.176-1.115 1.14-1.115h1.397c.18 0 .326-.147.326-.327V16.33a.326.326 0 0 0-.325-.327Z"
            fill="#3B5999"
        />
        <Rect
            x={1}
            y={1}
            width={48}
            height={48}
            rx={24}
            stroke="#3B5999"
            strokeWidth={2}
        />
    </Svg>
);

export default FacebookSvg;
