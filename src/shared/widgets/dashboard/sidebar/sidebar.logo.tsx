import React from 'react'


const SidebarLogo = () => {
  return (
    <div className='relative flex items-center'>
      <svg
        width="300"
        height="40"
        viewBox="320 0 210 210"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="200" height="200" rx="20" fill="#3f48d1" />
        <path
          d="M60 60 L100 100 L140 60 V140 H60 Z"
          fill="white"
        />
        <path
          d="M100 100 L60 150 L140 140 Z"
          fill="#3f48d1"
        />
        <text
          x="110%"
          y="140"
          textAnchor="right"
          fontSize="100"
          fontWeight="900"
          fill="black"
          fontFamily="Jetbrains Mono, monospace"
        >
          Nletterly
        </text>
      </svg>
    </div>
  )
}

export default SidebarLogo