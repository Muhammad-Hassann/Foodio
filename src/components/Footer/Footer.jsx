import React from "react";
import { Logo, Button } from "../index";
import BottomFooter from "./BottomFooter";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function Foooter() {
  return (
    <div className='relative w-full flex flex-col  justify-between  pt-20 bg-cover bg-center bg-[url("../bg-overlay.webp")]'>
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>

      <div className="w-full flex flex-col lg:flex-row z-10 px-12">
        <div className="lg:w-1/3 w-full lg:rounded-l-xl rounded-t-xl h-[400px] p-8 bg-purple">
          <Logo className="w-44 " />
          <p className="text-white text-lg font-narrow pt-4 flex items-center">
            <span className="material-icons mr-2">
              <FaClock />
            </span>
            Everyday: 12:00 PM - 11:00 PM
          </p>

          <p className="text-white text-lg font-narrow pt-4 flex items-center">
            <span className="material-icons mr-2">
              <FaPhoneAlt />
            </span>
            (123) 456-7890
          </p>

          <p className="text-white text-lg font-narrow pt-4 flex items-center">
            <span className="material-icons mr-2">
              <FaEnvelope />
            </span>
            reservations@restaurant.com
          </p>

          <p className="text-white text-lg font-narrow pt-4 flex items-center">
            <span className="material-icons mr-2">
              <FaMapMarkerAlt />
            </span>
            1234 Foodie Street, Gourmet City, USA
          </p>

          <p className="text-white text-md font-rubik italic pt-6">
            "Savor the flavors in every bite!" 🍽️
          </p>
        </div>

        <div className="lg:w-2/3 w-full lg:h-[400px] flex-col sm:flex-row bg-[#F4F4F4] lg:rounded-r-xl rounded-b-xl flex justify-between p-12">
          {/* About Section */}
          <div className="sm:w-1/3 w-full p-4">
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about-us"
                  className="hover:text-purple font-narrow font-semibold transition-all"
                >
                  &gt; About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/our-story"
                  className="hover:text-purple font-narrow font-semibold transition-all"
                >
                  &gt; Our Story
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="hover:text-purple font-narrow font-semibold transition-all"
                >
                  &gt; Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-purple font-narrow font-semibold transition-all"
                >
                  &gt; Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Menu Section */}
          <div className="sm:w-1/3 w-full p-4">
            <h2 className="text-2xl font-bold mb-4">Menu</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/pizza"
                  className="hover:text-purple font-narrow font-semibold  transition-all"
                >
                  &gt; Pizza
                </Link>
              </li>
              <li>
                <Link
                  to="/burger"
                  className="hover:text-purple font-narrow font-semibold transition-all"
                >
                  &gt; Burger
                </Link>
              </li>
              <li>
                <Link
                  to="/bbq"
                  className="hover:text-purple font-narrow font-semibold transition-all"
                >
                  &gt; BBQ
                </Link>
              </li>
              <li>
                <Link
                  to="/desserts"
                  className="hover:text-purple font-narrow font-semibold transition-all"
                >
                  &gt; Desserts
                </Link>
              </li>
              <li>
                <Link
                  to="/coffee"
                  className="hover:text-purple font-narrow font-semibold transition-all"
                >
                  &gt; Coffee
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="sm:w-1/3 w-full p-4">
            <h2 className="text-2xl font-bold mb-4">Newsletter</h2>
            <p className="mb-4 font-narrow font-semibold ">
              Subscribe to get the latest updates and offers.
            </p>
            <form>
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 w-full mb-2 text-black outline-none rounded-md"
              />
              <Button children="Subcribe" className="mt-2" />
            </form>
          </div>
        </div>
      </div>
      <div className="w-full mt-16 h-[4px] bg-yellow z-20"></div>
      <BottomFooter />
    </div>
  );
}

export default Foooter;
