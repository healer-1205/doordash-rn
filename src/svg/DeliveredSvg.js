import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const DeliveredSvg = props => (
  <Svg
    width={86}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M9.912 10.988c0 .751-.119 1.435-.357 2.051a4.549 4.549 0 0 1-1.008 1.582c-.434.439-.954.78-1.561 1.022A5.477 5.477 0 0 1 4.97 16H1.218V5.969H4.97c.737 0 1.41.121 2.016.364a4.406 4.406 0 0 1 1.561 1.022c.434.439.77.966 1.008 1.582.238.616.357 1.3.357 2.051Zm-1.393 0c0-.616-.084-1.167-.252-1.652a3.482 3.482 0 0 0-.714-1.232 3.045 3.045 0 0 0-1.12-.77 3.87 3.87 0 0 0-1.463-.266H2.583v7.833H4.97c.537 0 1.024-.089 1.463-.266a3.085 3.085 0 0 0 1.12-.763c.308-.336.546-.747.714-1.232.168-.485.252-1.036.252-1.652Zm5.851-2.191c.425 0 .817.072 1.176.217.36.14.67.345.931.616.261.266.464.597.609.994.15.392.224.84.224 1.344 0 .196-.021.327-.063.392-.042.065-.121.098-.238.098h-4.718c.01.448.07.838.182 1.169.112.331.266.609.462.833.196.22.43.385.7.497.27.107.574.161.91.161.313 0 .581-.035.805-.105a4.033 4.033 0 0 0 .994-.469.549.549 0 0 1 .287-.112c.103 0 .182.04.238.119l.35.455c-.154.187-.338.35-.553.49a3.531 3.531 0 0 1-.693.336 4.086 4.086 0 0 1-.756.196 4.41 4.41 0 0 1-.777.07 3.68 3.68 0 0 1-1.358-.245 3.075 3.075 0 0 1-1.071-.728 3.405 3.405 0 0 1-.7-1.19c-.168-.471-.252-1.013-.252-1.624 0-.495.075-.957.224-1.386.154-.43.373-.8.658-1.113a2.953 2.953 0 0 1 1.043-.742c.41-.182.873-.273 1.386-.273Zm.028.917c-.602 0-1.076.175-1.421.525-.345.345-.56.826-.644 1.442h3.857c0-.29-.04-.553-.119-.791a1.73 1.73 0 0 0-.35-.623 1.507 1.507 0 0 0-.567-.406 1.836 1.836 0 0 0-.756-.147Zm5.893-4.025V16h-1.246V5.689h1.246Zm3.582 3.22V16h-1.246V8.909h1.246Zm.28-2.226a.784.784 0 0 1-.077.343.95.95 0 0 1-.476.469.85.85 0 0 1-.343.07.851.851 0 0 1-.343-.07 1.022 1.022 0 0 1-.28-.189 1.022 1.022 0 0 1-.19-.28.852.852 0 0 1-.07-.343c0-.121.024-.236.07-.343a.88.88 0 0 1 .19-.287.851.851 0 0 1 .623-.266.85.85 0 0 1 .623.266c.084.08.15.175.196.287a.784.784 0 0 1 .077.343Zm1.02 2.226h1.022c.098 0 .18.026.245.077a.437.437 0 0 1 .14.182l1.799 4.564c.065.168.116.336.154.504.037.168.072.334.105.497.037-.163.077-.329.119-.497a4.19 4.19 0 0 1 .16-.504l1.82-4.564a.403.403 0 0 1 .134-.182.373.373 0 0 1 .238-.077h.973L29.19 16h-1.127l-2.891-7.091Zm10.69-.112c.424 0 .816.072 1.175.217.36.14.67.345.931.616.261.266.465.597.61.994.148.392.223.84.223 1.344 0 .196-.02.327-.063.392-.042.065-.121.098-.238.098h-4.718c.01.448.07.838.182 1.169.112.331.266.609.462.833.196.22.43.385.7.497.27.107.574.161.91.161.313 0 .581-.035.805-.105a4.033 4.033 0 0 0 .994-.469.549.549 0 0 1 .287-.112c.103 0 .182.04.238.119l.35.455c-.154.187-.338.35-.553.49a3.531 3.531 0 0 1-.693.336 4.086 4.086 0 0 1-.756.196 4.41 4.41 0 0 1-.777.07 3.68 3.68 0 0 1-1.358-.245 3.075 3.075 0 0 1-1.07-.728 3.405 3.405 0 0 1-.7-1.19c-.169-.471-.253-1.013-.253-1.624 0-.495.075-.957.224-1.386.154-.43.373-.8.658-1.113a2.953 2.953 0 0 1 1.043-.742c.41-.182.873-.273 1.386-.273Zm.027.917c-.602 0-1.075.175-1.42.525-.346.345-.56.826-.645 1.442h3.857c0-.29-.04-.553-.119-.791a1.73 1.73 0 0 0-.35-.623 1.507 1.507 0 0 0-.567-.406 1.836 1.836 0 0 0-.756-.147ZM40.397 16V8.909h.714c.135 0 .229.026.28.077.051.051.086.14.105.266l.084 1.106c.243-.495.541-.88.896-1.155.36-.28.78-.42 1.26-.42.196 0 .373.023.532.07.159.042.306.103.441.182l-.161.931c-.033.117-.105.175-.217.175-.065 0-.166-.021-.301-.063a1.808 1.808 0 0 0-.567-.07c-.434 0-.798.126-1.092.378-.29.252-.532.618-.728 1.099V16h-1.246Zm8.453-7.203c.425 0 .817.072 1.176.217.36.14.67.345.931.616.262.266.465.597.61.994.149.392.224.84.224 1.344 0 .196-.021.327-.063.392-.043.065-.122.098-.239.098h-4.717c.009.448.07.838.181 1.169.112.331.266.609.462.833.197.22.43.385.7.497.271.107.575.161.91.161.313 0 .581-.035.806-.105a4.033 4.033 0 0 0 .993-.469.549.549 0 0 1 .288-.112c.102 0 .181.04.237.119l.35.455c-.154.187-.338.35-.552.49a3.531 3.531 0 0 1-.694.336 4.086 4.086 0 0 1-.756.196 4.41 4.41 0 0 1-.777.07 3.68 3.68 0 0 1-1.358-.245 3.075 3.075 0 0 1-1.07-.728 3.405 3.405 0 0 1-.7-1.19c-.169-.471-.253-1.013-.253-1.624 0-.495.075-.957.224-1.386.154-.43.374-.8.659-1.113a2.953 2.953 0 0 1 1.043-.742c.41-.182.872-.273 1.385-.273Zm.029.917c-.602 0-1.076.175-1.421.525-.346.345-.56.826-.645 1.442h3.857c0-.29-.04-.553-.119-.791a1.73 1.73 0 0 0-.35-.623 1.507 1.507 0 0 0-.566-.406 1.836 1.836 0 0 0-.756-.147ZM58.376 16c-.177 0-.29-.086-.336-.259l-.112-.861a3.766 3.766 0 0 1-1.043.889c-.387.22-.833.329-1.337.329-.406 0-.774-.077-1.106-.231a2.326 2.326 0 0 1-.847-.693c-.233-.303-.413-.681-.539-1.134a5.838 5.838 0 0 1-.189-1.561c0-.523.07-1.008.21-1.456.14-.453.34-.845.602-1.176a2.812 2.812 0 0 1 2.254-1.064c.434 0 .805.075 1.113.224.308.145.584.35.826.616V5.689h1.246V16h-.742Zm-2.415-.91c.406 0 .76-.093 1.064-.28.308-.187.59-.45.847-.791v-3.43c-.228-.308-.48-.523-.756-.644a2.114 2.114 0 0 0-.903-.189c-.662 0-1.171.236-1.526.707-.354.471-.532 1.143-.532 2.016 0 .462.04.859.12 1.19.079.327.195.597.35.812.153.21.342.364.566.462.224.098.48.147.77.147Z"
      fill="#00824B"
    />
    <Path
      d="M84.333 7 77 14.333 73.667 11"
      stroke="#00824B"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default DeliveredSvg;
