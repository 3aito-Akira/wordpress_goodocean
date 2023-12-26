import * as React from "react";
const SvgArArgentina = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={12}
    fill="none"
    {...props}
  >
    <mask
      id="AR_-_Argentina_svg__a"
      width={16}
      height={12}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path fill="#fff" d="M0 0h16v12H0z" />
    </mask>
    <g mask="url(#AR_-_Argentina_svg__a)">
      <path
        fill="#F7FCFF"
        fillRule="evenodd"
        d="M0 0v12h16V0H0Z"
        clipRule="evenodd"
      />
      <mask
        id="AR_-_Argentina_svg__b"
        width={16}
        height={12}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M0 0v12h16V0H0Z"
          clipRule="evenodd"
        />
      </mask>
      <g
        fillRule="evenodd"
        clipRule="evenodd"
        mask="url(#AR_-_Argentina_svg__b)"
      >
        <path fill="#58A5FF" d="M0 0v4h16V0H0ZM0 8v4h16V8H0Z" />
        <path
          fill="#FFD018"
          stroke="#F19900"
          strokeOpacity={0.98}
          strokeWidth={0.25}
          d="M8.276 7.244s-.51 1.059-.96 1.276c.194-.486.265-1.477.265-1.477s-1.165.462-1.575.378c.492-.344 1.175-.98 1.175-.98s-1.509-.494-1.472-.704c.682.122 1.618-.011 1.618-.011s-1.058-1.27-.95-1.364c.16.157 1.43.82 1.43.82s.091-1.13.364-1.511c.033.269.416 1.486.416 1.486s.77-.771 1.198-.771c-.187.233-.632 1.256-.632 1.256s1.108-.018 1.53.19c-.51.072-1.405.521-1.405.521s1.165.884 1.058 1.068a5.166 5.166 0 0 0-1.348-.408s.2 1.23.038 1.507c-.157-.41-.75-1.276-.75-1.276Z"
        />
        <path
          fill="#FFD018"
          stroke="#F19900"
          strokeOpacity={0.98}
          strokeWidth={0.25}
          d="M8.21 6.67a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
        />
      </g>
    </g>
  </svg>
);
export default SvgArArgentina;
