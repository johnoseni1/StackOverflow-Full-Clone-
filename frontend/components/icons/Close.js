import * as React from 'react'

function SvgClose(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="close_svg__feather close_svg__feather-x"
      {...props}
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  )
}

export default SvgClose
