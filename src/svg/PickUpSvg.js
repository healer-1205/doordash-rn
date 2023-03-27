import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 570.152 570.152"
    xmlSpace="preserve"
    {...props}
  >
    <Circle cx={228.625} cy={61.794} r={61.794} />
    <Path d="m206.608 157.679-64.284 50.006-86.696-74.483-29.854 34.749 115.023 98.82 86.42-66.813 63.18 129.595-88.501 65.451-8.532 172.125 61.005 3.023 7.096-143.236 72.282-53.453 4.484-3.151 18.571 110.768 182.955 13.887 4.621-60.906-135.246-10.264-15.014-92.815-61.555-170.108h89.252l53.633 121.307 41.897-18.522-65.692-148.597H315.987z" />
  </Svg>
)

export default SvgComponent
