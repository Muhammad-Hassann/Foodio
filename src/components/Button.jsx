import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-yellow',
    textColor = 'text-purple',
    className = '',
    ...props
}) {
  return (
    <button className={`px-4 py-2 rounded-lg text-xl font-narrow font-bold ${bgColor} ${textColor} ${className}`} {...props}>
        {children}
    </button>
  )
}

export default Button
