import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ViewAllSvg = (props) => (
    <Svg
        width={71}
        height={21}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M70.53 9.47a.75.75 0 0 1 0 1.06l-4.773 4.773a.75.75 0 0 1-1.06-1.06L68.939 10l-4.242-4.243a.75.75 0 1 1 1.06-1.06L70.53 9.47ZM60 9.25h10v1.5H60v-1.5ZM9.436 5.969 5.348 16H4.13L.042 5.969h1.085c.121 0 .22.03.294.091a.56.56 0 0 1 .168.231l2.828 7.077c.06.159.119.331.175.518.06.187.114.383.161.588.047-.205.096-.401.147-.588.051-.187.107-.36.168-.518l2.821-7.077a.499.499 0 0 1 .161-.217.455.455 0 0 1 .301-.105h1.085Zm2.342 2.94V16h-1.246V8.909h1.246Zm.266-2.226a.785.785 0 0 1-.077.343.951.951 0 0 1-.196.28.878.878 0 0 1-.287.189.85.85 0 0 1-.343.07.85.85 0 0 1-.616-.259 1.022 1.022 0 0 1-.19-.28.85.85 0 0 1-.07-.343.85.85 0 0 1 .07-.343.88.88 0 0 1 .19-.287c.079-.084.17-.15.273-.196a.85.85 0 0 1 .343-.07.85.85 0 0 1 .343.07.826.826 0 0 1 .287.196c.084.08.149.175.196.287a.785.785 0 0 1 .077.343Zm6.527 4.998c0-.29-.042-.553-.126-.791a1.676 1.676 0 0 0-.357-.623 1.507 1.507 0 0 0-.567-.406 1.886 1.886 0 0 0-.763-.147c-.597 0-1.071.175-1.421.525-.345.345-.56.826-.644 1.442h3.878Zm1.008 3.325c-.154.187-.338.35-.553.49a3.531 3.531 0 0 1-.693.336 4.086 4.086 0 0 1-.756.196 4.41 4.41 0 0 1-.777.07 3.68 3.68 0 0 1-1.358-.245 3.075 3.075 0 0 1-1.071-.728 3.405 3.405 0 0 1-.7-1.19c-.168-.471-.252-1.013-.252-1.624 0-.495.075-.957.224-1.386.154-.43.373-.8.658-1.113a2.953 2.953 0 0 1 1.043-.742c.41-.182.873-.273 1.386-.273.425 0 .817.072 1.176.217.364.14.677.345.938.616.266.266.474.597.623.994.15.392.224.84.224 1.344 0 .196-.021.327-.063.392-.042.065-.121.098-.238.098h-4.74c.015.448.076.838.183 1.169.112.331.266.609.462.833.196.22.43.385.7.497.27.107.574.161.91.161.313 0 .58-.035.805-.105a4.033 4.033 0 0 0 .994-.469.549.549 0 0 1 .287-.112c.103 0 .182.04.238.119l.35.455Zm11.353-6.097L28.636 16h-.987c-.121 0-.205-.08-.252-.238l-1.568-4.809a2.773 2.773 0 0 1-.091-.322 38.554 38.554 0 0 0-.07-.329l-.07.329a3.174 3.174 0 0 1-.091.329l-1.596 4.802c-.042.159-.135.238-.28.238h-.938l-2.296-7.091h.98c.098 0 .18.026.245.077.07.051.117.112.14.182l1.358 4.564c.08.336.142.653.189.952l.126-.469c.047-.159.096-.32.147-.483L25.08 9.14a.38.38 0 0 1 .119-.175.346.346 0 0 1 .217-.07h.546c.093 0 .17.023.231.07a.36.36 0 0 1 .126.175l1.463 4.592c.051.163.098.324.14.483.042.159.082.315.119.469a7.949 7.949 0 0 1 .203-.952l1.386-4.564a.345.345 0 0 1 .133-.182.363.363 0 0 1 .231-.077h.938Zm8.351 3.899c-.574.019-1.064.065-1.47.14-.401.07-.73.163-.987.28-.252.117-.436.254-.553.413a.901.901 0 0 0-.168.532c0 .187.03.348.091.483.06.135.143.247.245.336.107.084.231.147.371.189.145.037.299.056.462.056.22 0 .42-.021.602-.063.182-.047.352-.112.511-.196.163-.084.318-.184.462-.301.15-.117.294-.25.434-.399v-1.47ZM35.258 9.91a4.05 4.05 0 0 1 1.267-.847c.453-.187.955-.28 1.505-.28.397 0 .75.065 1.057.196.308.13.567.313.777.546.21.233.369.516.476.847.107.331.161.695.161 1.092V16h-.553a.572.572 0 0 1-.28-.056c-.065-.042-.117-.121-.154-.238l-.14-.672a7.539 7.539 0 0 1-.546.462c-.177.13-.364.243-.56.336a3.016 3.016 0 0 1-.63.203c-.22.051-.464.077-.735.077-.275 0-.534-.037-.777-.112a1.878 1.878 0 0 1-.637-.35 1.696 1.696 0 0 1-.427-.581 2.11 2.11 0 0 1-.154-.84c0-.28.077-.548.231-.805.154-.261.404-.492.75-.693.344-.2.795-.364 1.35-.49.556-.13 1.237-.205 2.044-.224v-.553c0-.55-.119-.966-.357-1.246-.238-.285-.586-.427-1.043-.427-.308 0-.567.04-.777.119a2.759 2.759 0 0 0-.539.259c-.15.093-.28.18-.392.259a.56.56 0 0 1-.322.112.372.372 0 0 1-.217-.063.664.664 0 0 1-.154-.168l-.224-.399Zm8.43-4.221V16H42.44V5.689h1.246Zm3.308 0V16H45.75V5.689h1.246Z"
            fill="#FD5252"
        />
    </Svg>
);

export default ViewAllSvg;
