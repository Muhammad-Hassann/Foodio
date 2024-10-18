import React from 'react'
import {
    FaInstagram,
    FaFacebook,
    FaTwitter,
    FaLinkedin,
  } from "react-icons/fa"
import { Link } from "react-router-dom"

function BottomFooter() {
  return (
    <div className="w-full flex justify-between items-center mt-8 py-4 md:px-16 px-4 bg-purple text-white z-20">
    {/* Left side - Copyright Text */}
    <div className="text-sm">
      © {new Date().getFullYear()} Foodio. All rights reserved.
    </div>

    {/* Right side - Social Media Links */}
    <div className="flex space-x-4">
      <Link
        to="https://instagram.com"
        target="_blank"
        className="hover:text-gray-300 transition-all"
      >
        <FaInstagram className="text-2xl" />
      </Link>
      <Link
        to="https://facebook.com"
        target="_blank"
        className="hover:text-gray-300 transition-all"
      >
        <FaFacebook className="text-2xl" />
      </Link>
      <Link
        to="https://twitter.com"
        target="_blank"
        className="hover:text-gray-300 transition-all"
      >
        <FaTwitter className="text-2xl" />
      </Link>
      <Link
        to="https://linkedin.com"
        target="_blank"
        className="hover:text-gray-300 transition-all"
      >
        <FaLinkedin className="text-2xl" />
      </Link>
    </div>
  </div>
  )
}

export default BottomFooter
