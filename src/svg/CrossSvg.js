import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const CrossSvg = (props) => (
    <Svg
        width={25}
        height={26}
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
            <Path d="m7.52 7.864 9.9 9.9M7.52 17.763l9.9-9.9" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path
                    fill="#fff"
                    transform="rotate(-45 15.692 6.5)"
                    d="M0 0h17.678v17.678H0z"
                />
            </ClipPath>
        </Defs>
    </Svg>
);

export default CrossSvg;
