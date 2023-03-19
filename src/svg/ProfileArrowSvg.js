import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ProfileArrowSvg = (props) => (
    <Svg
        width={11}
        height={12}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M10.53 5.47a.75.75 0 0 1 0 1.06l-4.773 4.773a.75.75 0 1 1-1.06-1.06L8.939 6 4.697 1.757a.75.75 0 0 1 1.06-1.06L10.53 5.47ZM0 5.25h10v1.5H0v-1.5Z"
            fill="#7D849A"
        />
    </Svg>
);

export default ProfileArrowSvg;
