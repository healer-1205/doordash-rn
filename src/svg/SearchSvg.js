import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SearchSvg = ({ color }) => (
    <Svg width={21} height={21} fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.75 1.5a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5ZM0 8.75a8.75 8.75 0 1 1 17.5 0 8.75 8.75 0 0 1-17.5 0Z"
            fill={color}
        />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.043 14.043a1 1 0 0 1 1.414 0l4.35 4.35a1 1 0 0 1-1.414 1.414l-4.35-4.35a1 1 0 0 1 0-1.414Z"
            fill={color}
        />
    </Svg>
);

export default SearchSvg;
