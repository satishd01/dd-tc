'use client';

import React from 'react';
import { Video } from './ui/video';
import Image from 'next/image';

const HeroSection = () => {
  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-items-center my-20 bg-transparent max-w-7xl mx-auto">
      <div className="px-7 w-full">
        {/* Logo + Tagline */}
        <div className="flex flex-col items-start -mt-8">
          <div className="w-[550px] h-[300px] relative -ml-24">
            <Image 
              src="/kita3.svg"
              alt="KITA Logo"
              fill
              className="object-contain object-left"
              priority
              style={{ maxWidth: 'none', left: '-20px' }}
            />
          </div>
          <p className="text-xl sm:text-2xl text-[#FDF6E3] font-light italic font-sans -mt-16">
            From 'maybes' to 'memories'
          </p>
        </div>

        {/* Headline */}
        <div className="text-5xl font-bold text-white mt-10 space-y-1">
          <p>Connect with strangers</p>
          <p>who'd rather chase</p>
          <p>sunsets, crash on events</p>
          <p>or vibe at a cricket</p>
          <p>match.</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-8">
          <button
            onClick={() => handleScroll('footer')}
            className="bg-[#ED6D24] text-white px-6 py-3 rounded-lg text-lg font-semibold"
          >
            Join the Community
          </button>
          <button
            onClick={() => handleScroll('products')}
            className="bg-white text-[#ED6D24] px-6 py-3 rounded-lg text-lg font-semibold"
          >
            Explore Merch
          </button>
        </div>
      </div>

      {/* Video Section */}
      <div className="rounded-xl overflow-hidden max-h-[800px] px-10">
        <Video />
      </div>
    </section>
  );
};

export default HeroSection;
