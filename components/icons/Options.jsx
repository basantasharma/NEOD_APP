import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function Options(props) {
  return (
    <Svg
      width="32px"
      height="32px"
      viewBox="0 0 24 24"
      fill="white"
      stroke={"white"}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G fillRule="evenodd" clipRule="evenodd" fill="white">
        <Path d="M20.75 7a.75.75 0 01-.75.75H4a.75.75 0 010-1.5h16a.75.75 0 01.75.75zM20.75 12a.75.75 0 01-.75.75H4a.75.75 0 010-1.5h16a.75.75 0 01.75.75zM20.75 17a.75.75 0 01-.75.75H4a.75.75 0 010-1.5h16a.75.75 0 01.75.75z" />
      </G>
    </Svg>
  )
}

export default Options
