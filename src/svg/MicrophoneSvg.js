import * as React from "react";
import Svg, { Path } from "react-native-svg";

const MicrophoneSvg = (props) => (
    <Svg
        width={13}
        height={18}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M0 8.848c0 1.104.225 2.084.676 2.94a5.442 5.442 0 0 0 1.901 2.063c.812.512 1.755.814 2.831.904v1.969H2.273a.62.62 0 0 0-.456.186.62.62 0 0 0-.186.456.61.61 0 0 0 .186.448.62.62 0 0 0 .456.186H9.82a.62.62 0 0 0 .456-.186.61.61 0 0 0 .186-.448.62.62 0 0 0-.186-.456.62.62 0 0 0-.456-.186H6.685v-1.97c1.076-.09 2.02-.39 2.83-.903a5.377 5.377 0 0 0 1.893-2.062c.457-.857.685-1.837.685-2.941V7.132a.61.61 0 0 0-.186-.447.61.61 0 0 0-.448-.186.62.62 0 0 0-.456.186.61.61 0 0 0-.186.447v1.665c0 .958-.197 1.797-.592 2.518a4.196 4.196 0 0 1-1.664 1.682c-.71.395-1.547.592-2.51.592-.964 0-1.803-.197-2.519-.592-.715-.4-1.27-.96-1.664-1.681-.395-.722-.592-1.561-.592-2.519V7.132a.61.61 0 0 0-.186-.447.62.62 0 0 0-.456-.186.61.61 0 0 0-.448.186.61.61 0 0 0-.186.447v1.716Zm6.05 2.924c.558 0 1.049-.13 1.471-.389a2.6 2.6 0 0 0 .989-1.073c.236-.462.355-.995.355-1.597V3.059c0-.603-.119-1.132-.355-1.589A2.588 2.588 0 0 0 7.52.39C7.1.129 6.608 0 6.051 0c-.564 0-1.057.13-1.48.389-.422.259-.751.62-.988 1.081-.237.457-.355.986-.355 1.59v5.653c0 .602.118 1.135.355 1.597.237.456.566.814.989 1.073.422.26.915.389 1.479.389Z"
            fill="#7D849A"
        />
    </Svg>
);

export default MicrophoneSvg;
