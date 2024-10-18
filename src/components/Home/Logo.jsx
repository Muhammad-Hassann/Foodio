import React from 'react'
import { Link } from 'react-router-dom'

function Logo(
    {
      className = '',
    }
) {
  return (
    <div className={`${className}`} >
        <Link to="/" >
          <img src="../../logo.png" alt="" className={`w-full object-cover object-center`}/>
          </Link>
        </div>
  )
}

export default Logo
