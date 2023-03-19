import * as React from "react";
import Svg, { Path } from "react-native-svg";

const FreeFromSvg = (props) => (
    <Svg
        width={81}
        height={21}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M27.399 5.969v1.106h-4.816v3.507h4.116v1.106h-4.116V16h-1.365V5.969h6.181ZM28.528 16V8.909h.714c.135 0 .229.026.28.077.051.051.086.14.105.266l.084 1.106c.242-.495.541-.88.896-1.155.36-.28.78-.42 1.26-.42.196 0 .373.023.532.07.158.042.306.103.44.182l-.16.931c-.033.117-.105.175-.217.175a1.14 1.14 0 0 1-.301-.063 1.809 1.809 0 0 0-.567-.07c-.434 0-.798.126-1.092.378-.29.252-.532.618-.728 1.099V16h-1.246Zm8.453-7.203c.425 0 .817.072 1.176.217.36.14.67.345.931.616.262.266.465.597.61.994.149.392.223.84.223 1.344 0 .196-.02.327-.063.392-.042.065-.121.098-.238.098h-4.718c.01.448.07.838.182 1.169.112.331.266.609.462.833.196.22.43.385.7.497.271.107.574.161.91.161.313 0 .581-.035.805-.105a4.033 4.033 0 0 0 .994-.469.549.549 0 0 1 .287-.112c.103 0 .182.04.238.119l.35.455c-.154.187-.338.35-.553.49a3.526 3.526 0 0 1-.693.336 4.082 4.082 0 0 1-.756.196 4.41 4.41 0 0 1-.777.07 3.68 3.68 0 0 1-1.358-.245 3.077 3.077 0 0 1-1.07-.728 3.406 3.406 0 0 1-.7-1.19c-.169-.471-.253-1.013-.253-1.624 0-.495.075-.957.224-1.386.154-.43.374-.8.658-1.113a2.954 2.954 0 0 1 1.043-.742c.411-.182.873-.273 1.386-.273Zm.028.917c-.602 0-1.075.175-1.42.525-.346.345-.56.826-.645 1.442h3.857c0-.29-.04-.553-.119-.791a1.73 1.73 0 0 0-.35-.623 1.507 1.507 0 0 0-.567-.406 1.836 1.836 0 0 0-.756-.147Zm7.314-.917c.425 0 .817.072 1.176.217.36.14.67.345.931.616.261.266.465.597.61.994.148.392.223.84.223 1.344 0 .196-.02.327-.063.392-.042.065-.121.098-.238.098h-4.718c.01.448.07.838.182 1.169.112.331.266.609.462.833.196.22.43.385.7.497.27.107.574.161.91.161.313 0 .581-.035.805-.105a4.033 4.033 0 0 0 .994-.469.549.549 0 0 1 .287-.112c.103 0 .182.04.238.119l.35.455c-.154.187-.338.35-.553.49a3.526 3.526 0 0 1-.693.336 4.082 4.082 0 0 1-.756.196 4.41 4.41 0 0 1-.777.07 3.68 3.68 0 0 1-1.358-.245 3.077 3.077 0 0 1-1.07-.728 3.406 3.406 0 0 1-.7-1.19c-.169-.471-.253-1.013-.253-1.624 0-.495.075-.957.224-1.386.154-.43.373-.8.658-1.113a2.954 2.954 0 0 1 1.043-.742c.41-.182.873-.273 1.386-.273Zm.028.917c-.602 0-1.075.175-1.42.525-.346.345-.56.826-.645 1.442h3.857c0-.29-.04-.553-.119-.791a1.73 1.73 0 0 0-.35-.623 1.507 1.507 0 0 0-.567-.406 1.836 1.836 0 0 0-.756-.147ZM51.845 16V9.973l-.784-.091a.694.694 0 0 1-.245-.105.269.269 0 0 1-.091-.217v-.511h1.12v-.686c0-.406.056-.765.168-1.078.117-.317.28-.583.49-.798.215-.22.471-.385.77-.497a2.854 2.854 0 0 1 1.008-.168c.317 0 .611.047.882.14l-.028.623c-.005.093-.044.15-.119.168-.075.019-.18.028-.315.028h-.217c-.215 0-.41.028-.588.084a1.107 1.107 0 0 0-.448.273 1.268 1.268 0 0 0-.294.497c-.065.205-.098.46-.098.763v.651h2.051v.903h-2.009V16h-1.253Zm4.437 0V8.909h.714c.135 0 .228.026.28.077.051.051.086.14.105.266l.084 1.106c.242-.495.541-.88.896-1.155.36-.28.78-.42 1.26-.42.196 0 .373.023.532.07.158.042.305.103.44.182l-.16.931c-.033.117-.105.175-.217.175a1.14 1.14 0 0 1-.301-.063 1.809 1.809 0 0 0-.567-.07c-.434 0-.798.126-1.092.378-.29.252-.532.618-.728 1.099V16h-1.246Zm8.516-7.203c.518 0 .985.086 1.4.259.42.173.775.418 1.064.735.294.317.518.702.672 1.155.159.448.238.95.238 1.505 0 .56-.08 1.064-.238 1.512a3.19 3.19 0 0 1-.672 1.148 2.92 2.92 0 0 1-1.064.735 3.705 3.705 0 0 1-1.4.252c-.518 0-.987-.084-1.407-.252a3 3 0 0 1-1.064-.735c-.294-.317-.52-.7-.679-1.148a4.508 4.508 0 0 1-.238-1.512c0-.555.08-1.057.238-1.505a3.26 3.26 0 0 1 .68-1.155 3 3 0 0 1 1.063-.735c.42-.173.89-.259 1.407-.259Zm0 6.328c.7 0 1.223-.233 1.568-.7.346-.471.518-1.127.518-1.967 0-.845-.172-1.503-.518-1.974-.345-.471-.868-.707-1.568-.707-.354 0-.662.06-.924.182-.261.121-.48.296-.658.525a2.409 2.409 0 0 0-.392.847 4.598 4.598 0 0 0-.126 1.127c0 .42.042.796.126 1.127.089.331.22.611.392.84.178.224.397.397.658.518.262.121.57.182.924.182Zm4.91.875V8.909h.742c.177 0 .289.086.335.259l.091.728c.262-.322.553-.586.875-.791a2.086 2.086 0 0 1 1.134-.308c.481 0 .868.133 1.162.399.3.266.514.625.645 1.078.098-.257.226-.478.385-.665a2.32 2.32 0 0 1 1.183-.728c.228-.056.46-.084.692-.084.374 0 .705.06.995.182.293.117.54.29.742.518.205.229.361.511.469.847a3.7 3.7 0 0 1 .16 1.141V16h-1.245v-4.515c0-.555-.122-.975-.364-1.26-.243-.29-.596-.434-1.058-.434-.205 0-.4.037-.587.112-.182.07-.343.175-.483.315-.14.14-.252.317-.337.532-.079.21-.118.455-.118.735V16h-1.247v-4.515c0-.57-.114-.994-.343-1.274-.228-.28-.562-.42-1-.42-.308 0-.596.084-.862.252a2.776 2.776 0 0 0-.72.672V16h-1.246Z"
            fill="#FD5252"
        />
        <Path
            d="M8 6.5H.5V13H8V6.5ZM8 9h2l1.5 1.5V13H8V9ZM2.75 15.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM9.25 15.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
            stroke="#FD5252"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default FreeFromSvg;
