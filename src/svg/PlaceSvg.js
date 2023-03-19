import * as React from "react";
import Svg, { Path } from "react-native-svg";

const PlaceSvg = ({ color }) => (
    <Svg width={21} height={26} fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
            d="M6.794 25h7.448m1.553-10.484a6.62 6.62 0 0 0-4.822-10.604M6.097 15.447a6.598 6.598 0 0 0 4.42 1.691 6.597 6.597 0 0 0 4.417-1.688M10.057 3.912A6.621 6.621 0 0 0 5.24 14.516m14.795-3.999A9.517 9.517 0 0 0 10.517 1 9.517 9.517 0 0 0 1 10.517c0 4.422 3.017 8.14 7.104 9.208l2.413 3.484 2.414-3.484c4.087-1.069 7.104-4.786 7.104-9.208Z"
            stroke={color}
            strokeWidth={1.257}
            strokeMiterlimit={10}
        />
    </Svg>
);

export default PlaceSvg;
