import * as React from "react"
import Svg, { Path } from "react-native-svg"

function User(props) {
  return (
    <Svg
      width="32px"
      height="32px"
      viewBox="0 0 24.00 24.00"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="white"
      {...props}
    >
      <Path
        d="M5 21a7 7 0 1114 0M16 7a4 4 0 11-8 0 4 4 0 018 0z"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default User
