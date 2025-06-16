import Image from 'next/image';
import React from 'react';

const ContactUs = () => {
  return (
    <div className="flex items-center justify-center relative max-w-7xl mx-auto my-10 max-md:mb-30 md:mb-30 ">
      <div className="w-[90%] sm:w-[80%] md:w-[70%]">
        <Image
          src={'/contact-Us.png'}
          alt="Contact us background"
          width={1000}
          height={1000}
          className="object-contain rounded-2xl w-full h-full"
        />
      </div>

      <div className="w-[80%] absolute right-4 top-[40%] sm:top-[50%] md:top-[60%] lg:top-[35%] md:w-[50%]">
        <div className="bg-[#3d3d3d3b] backdrop-blur-sm rounded-xl p-6 flex flex-col items-center shadow-md">
          <h2 className="text-4xl font-semibold text-center mb-12 text-white capitalize">
            Contact Us
          </h2>
          <form className="flex flex-col items-center w-full max-w-sm text-black">
            <div className="w-full flex items-center gap-4 mb-4">
              <input
                type="text"
                placeholder="Name"
                aria-label="Your Name"
                className="w-full p-2 font-semibold text-white  border-b border-gray-300 outline-none rounded placeholder:text-white"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                aria-label="Phone Number"
                className="w-full p-2 font-semibold text-white  border-b border-gray-300 outline-none rounded placeholder:text-white"
              />
            </div>

            <textarea
              placeholder="Your Message"
              aria-label="Your Message"
              className="w-full p-2 font-medium text-white  border-b border-gray-300 outline-none rounded mb-4 placeholder:text-white"
              rows={3}
            />

            <button
              type="submit"
              className="py-4 px-6 cursor-pointer mt-2 w-full p-2 text-white bg-[#ED6D24] rounded-lg font-semibold hover:bg-[#d65f1f] transition"
            >
              Contact Us
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
