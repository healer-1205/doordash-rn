import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      x={5}
      y={4}
      width={14}
      height={17}
      rx={2}
      stroke="#33363F"
      strokeWidth={2}
    />
    <Path
      d="M9 9h6M9 13h6M9 17h4"
      stroke="#33363F"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
)

export default SvgComponent
