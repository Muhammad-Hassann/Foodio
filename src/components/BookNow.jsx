import React from "react";
import ReserveTable from "./Home/ReserveTable";
import Testimonial from "./Testimonial";
import { FaClock } from "react-icons/fa";

const BookNow = () => {
  return (
    <div className="book-now-page">
      {/* Reservation Form */}
      <section className="flex justify-center items-center flex-col bg-yellow pt-44 py-16">
        <h1 className="font-rubik text-5xl lg:text-6xl text-center font-bold text-purple">
          Reserve Your Table
        </h1>
        <p className="text-xl mt-4 text-black">
          Experience fine dining with us
        </p>
        <ReserveTable />
      </section>

      <div className="w-full flex flex-col lg:flex-row justify-between gap-8 bg-purple py-12 px-6 lg:py-24 lg:px-12">
      <div className="lg:w-1/2 w-full">
        {/* Left Side - Opening Hours Cards */}
        <h2 className="text-4xl lg:text-6xl font-bold font-rubik mb-8 text-white text-center lg:text-left">
          Visit Us
        </h2>
        <div className="flex flex-col lg:flex-row w-full gap-4">
          {/* Card 1 - Weekday Timings */}
          <div className="flex-1 border-2 border-yellow flex flex-col items-center p-4 lg:p-6 rounded-lg shadow-md">
            <FaClock className="text-yellow text-4xl lg:text-6xl mb-2" />
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
              Weekday Hours
            </h3>
            <p className="text-base lg:text-lg text-white text-center">
              Monday - Saturday: 10:00 AM - 10:00 PM
            </p>
          </div>

          {/* Card 2 - Sunday Timings */}
          <div className="flex-1 border-2 border-yellow flex flex-col items-center p-4 lg:p-6 rounded-lg shadow-md">
            <FaClock className="text-yellow text-4xl lg:text-6xl mb-2" />
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
              Sunday Hours
            </h3>
            <p className="text-base lg:text-lg text-white text-center">
              Sunday: 12:00 PM - 8:00 PM
            </p>
          </div>
        </div>

        {/* Location Map and Address */}
        <div className="w-full mt-8">
          {/* Map */}
          <div className="map-container w-full h-40 lg:h-64 rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Restaurant Location"
              src="https://maps.google.com/maps?width=600&height=400&hl=en&q=your+restaurant+location&z=14&output=embed"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
          </div>

          {/* Address with Location Icon */}
          <div className="flex items-center mt-4 space-x-2 lg:space-x-3 text-base lg:text-lg text-yellow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 lg:h-6 lg:w-6 text-yellow-500"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12 2C8.1 2 5 5.1 5 9c0 5.3 5.8 11.3 6.1 11.7.2.2.5.3.7.3s.5-.1.7-.3C13.2 20.3 19 14.3 19 9c0-3.9-3.1-7-7-7zm0 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-white text-center lg:text-left">
              123 Restaurant St, Food City, FC 45678
            </p>
          </div>
        </div>
      </div>

      {/* Right Column - Images */}
      <div className="lg:w-1/2 w-full flex flex-col lg:flex-row lg:pl-10 items-center">
        <div className="flex flex-col md:flex-row w-full items-center justify-center gap-6 lg:gap-8">
          <img
            src="../../../chefs/restaurant.webp"
            alt="Restaurant Interior"
            className="w-48 h-64 lg:w-[250px] lg:h-[400px] object-cover object-left rounded-lg shadow-lg"
          />
          <img
            src="../../../chefs/chef-cooking.webp"
            alt="Chef Cooking"
            className="w-48 h-64 lg:w-[250px] lg:h-[400px] object-cover object-left mt-12 rounded-lg shadow-lg hidden md:block"
          />
        </div>
      </div>
    </div>
    

      {/* Customer Reviews */}
      <div className="reviews-carousel">
        <Testimonial />
      </div>
    </div>
  );
};

export default BookNow;
