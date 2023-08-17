import React from 'react'

export const Bubble1: React.FC = () => {
  const svgStyle: React.CSSProperties = {
    mixBlendMode: 'difference', // Set the mix-blend-mode property here
  }

  return (
    <svg
      width="682"
      height="630"
      viewBox="0 0 682 630"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g style={svgStyle}>
        <ellipse
          cx="173.31"
          cy="-7.85446"
          rx="270.27"
          ry="267.498"
          transform="rotate(180 173.31 -7.85446)"
          fill="url(#paint0_linear_1044_5458)"
        />
      </g>
      <g style={svgStyle}>
        <ellipse
          cx="266.112"
          cy="266.574"
          rx="266.112"
          ry="266.574"
          transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 270.793 676.368)"
          fill="url(#paint1_linear_1044_5458)"
        />
      </g>
      <g style={svgStyle}>
        <ellipse
          cx="150.612"
          cy="151.074"
          rx="150.612"
          ry="151.074"
          transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 155.293 560.868)"
          fill="url(#paint2_linear_1044_5458)"
        />
      </g>
      <g style={svgStyle}>
        <circle
          cx="86.394"
          cy="86.394"
          r="86.394"
          transform="matrix(-1 0 0 1 443.58 154.308)"
          fill="url(#paint3_linear_1044_5458)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1044_5458"
          x1="-96.96"
          y1="-275.352"
          x2="512.193"
          y2="-180.364"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA798" />
          <stop offset="1" stopColor="#0BA5EC" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1044_5458"
          x1="0"
          y1="0"
          x2="600.121"
          y2="92.4601"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA798" />
          <stop offset="1" stopColor="#0BA5EC" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1044_5458"
          x1="0"
          y1="0"
          x2="339.672"
          y2="52.2636"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA798" />
          <stop offset="1" stopColor="#0BA5EC" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_1044_5458"
          x1="0"
          y1="0"
          x2="194.815"
          y2="30.0671"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA798" />
          <stop offset="1" stopColor="#0BA5EC" />
        </linearGradient>
      </defs>
    </svg>
  )
}
