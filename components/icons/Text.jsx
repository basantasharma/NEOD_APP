import * as React from "react"
import Svg, { Path } from "react-native-svg"

function TextIcon(props) {
  return (
    <Svg
      width="10px"
      height="10px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12 3v18m-3 0h6m4-15V3H5v3"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default TextIcon
