import * as React from "react";
import Svg, { Path } from "react-native-svg";

const PhoneSvg = (props) => (
    <Svg
        width={18}
        height={18}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M16.5 12.69v2.25a1.502 1.502 0 0 1-1.635 1.5 14.843 14.843 0 0 1-6.472-2.302 14.625 14.625 0 0 1-4.5-4.5A14.843 14.843 0 0 1 1.59 3.135 1.5 1.5 0 0 1 3.083 1.5h2.25a1.5 1.5 0 0 1 1.5 1.29 9.63 9.63 0 0 0 .525 2.108A1.5 1.5 0 0 1 7.02 6.48l-.952.953a12 12 0 0 0 4.5 4.5l.952-.953a1.5 1.5 0 0 1 1.583-.337c.68.253 1.387.43 2.107.525a1.5 1.5 0 0 1 1.29 1.522Z"
            stroke="#7D849A"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default PhoneSvg;
