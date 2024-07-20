import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Badal(props) {
  return (
    <Svg
      width="32px"
      height="32px"
      viewBox="0 0 24 24"
      fill="none"
      stroke={"white"}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7 12h10M8 8.5S9 9 10 9c1.5 0 2.5-1 4-1 1 0 2 .5 2 .5m-8 7s1 .5 2 .5c1.5 0 2.5-1 4-1 1 0 2 .5 2 .5m5-3.5a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Badal
