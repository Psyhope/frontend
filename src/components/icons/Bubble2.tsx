import React from 'react'

export const Bubble2: React.FC = () => {
  const svgStyle: React.CSSProperties = {
    mixBlendMode: 'difference', // Set the mix-blend-mode property here
  }

  return (
    <svg
      width="468"
      height="376"
      viewBox="0 0 468 376"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g style={svgStyle}>
        <ellipse
          cx="504.81"
          cy="268.146"
          rx="270.27"
          ry="267.498"
          transform="rotate(180 504.81 268.146)"
          fill="url(#paint0_linear_1044_5459)"
        />
      </g>
      <g style={svgStyle}>
        <circle
          cx="151.998"
          cy="151.998"
          r="151.998"
          transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 304.764 503.304)"
          fill="url(#paint1_linear_1044_5459)"
        />
      </g>
      <g style={svgStyle}>
        <circle
          cx="324.786"
          cy="324.786"
          r="324.786"
          transform="matrix(-1 0 0 1 1013.47 191.916)"
          fill="url(#paint2_linear_1044_5459)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1044_5459"
          x1="234.54"
          y1="0.647522"
          x2="843.693"
          y2="95.6365"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA798" />
          <stop offset="1" stopColor="#0BA5EC" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1044_5459"
          x1="0"
          y1="0"
          x2="342.75"
          y2="52.8989"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA798" />
          <stop offset="1" stopColor="#0BA5EC" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1044_5459"
          x1="0"
          y1="0"
          x2="732.38"
          y2="113.033"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA798" />
          <stop offset="1" stopColor="#0BA5EC" />
        </linearGradient>
      </defs>
    </svg>
  )
}
