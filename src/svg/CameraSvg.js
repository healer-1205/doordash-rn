import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const CameraSvg = (props) => (
    <Svg
        width={16}
        height={16}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G
            clipPath="url(#a)"
            stroke="#7D849A"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <Path d="M15.333 12.667A1.333 1.333 0 0 1 14 14H2a1.334 1.334 0 0 1-1.333-1.333V5.333A1.333 1.333 0 0 1 2 4h2.667L6 2h4l1.333 2H14a1.333 1.333 0 0 1 1.333 1.333v7.334Z" />
            <Path d="M8 11.333A2.667 2.667 0 1 0 8 6a2.667 2.667 0 0 0 0 5.333Z" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h16v16H0z" />
            </ClipPath>
        </Defs>
    </Svg>
);

export default CameraSvg;
