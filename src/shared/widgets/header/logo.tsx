import React from 'react'


const Logo = () => {
  return (
    <div className='relative flex items-center'>
      <svg
        width="200"
        height="40"
        viewBox="400 0 210 200"
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
          x="220"
          y="140"
          textAnchor="right"
          fontSize="120"
          fontWeight="900"
          fill="black"
          fontFamily="Jetbrains Mono, monospace"
          className='hidden md:inline'
        >
          Nletterly
        </text>
      </svg>
    </div>
  )
}

export default Logo