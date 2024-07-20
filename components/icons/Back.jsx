import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Back(props) {
  return (
    <Svg
      width="32px"
      height="32px"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      stroke={"white"}
    >
      <Path fill={"white"} d="M224 480h640a32 32 0 110 64H224a32 32 0 010-64z" />
      <Path fill={"white"} d="M237.248 512l265.408 265.344a32 32 0 01-45.312 45.312l-288-288a32 32 0 010-45.312l288-288a32 32 0 1145.312 45.312L237.248 512z" />
    </Svg>
  )
}

export default Back
