'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Marquee } from './magicui/marquee';
import { Lora } from 'next/font/google';
import Image from 'next/image';

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const travelItems = [
  {
    id: 1,
    tag: '#ExploreTogether',
  },
  {
    id: 2,
    tag: '#TravelBuddies',
  },
  {
    id: 3,
    tag: '#StrangersToFriends',
  },
  {
    id: 4,
    tag: '#WhereToNext',
  },
  {
    id: 5,
    image: '/sliderImage.png',
  },
  {
    id: 6,
    tag: '#EventEscapes',
  },
  {
    id: 7,
    tag: '#LostInTransit',
  },
  {
    id: 8,
    tag: '#KitaCulture',
  },
  {
    id: 9,
    tag: '#SharedJourneys',
  },
  {
    id: 10,
    tag: '#KitaVibes',
  },
  {
    id: 11,
    tag: '#KitaCommunity',
  },
];

const people = [
  {
    src: '/person.png',
    className:
      '-top-6 right-28 w-12 h-12 sm:top-0 sm:right-42 sm:w-14 sm:h-14 xl:right-72 xl:w-18 xl:h-18',
  },
  {
    src: '/person1.png',
    className:
      'top-5 left-10 w-12 h-12 sm:top-0 sm:left-20 sm:w-14 sm:h-14 xl:left-56 xl:w-18 xl:h-18',
  },
  {
    src: '/person2.png',
    className:
      '-top-26 right-4 w-24 h-24 sm:top-0 sm:right-0 sm:w-28 sm:h-28 xl:-top-32 xl:w-36 xl:h-36',
  },
  {
    src: '/person3.png',
    className:
      'bottom-5 right-10 w-14 h-14 sm:bottom-0 sm:right-24 sm:w-16 sm:h-16 xl:right-40 xl:w-20 xl:h-20',
  },
  {
    src: '/person4.png',
    className:
      'bottom-0 left-5 w-14 h-14 sm:bottom-0 sm:left-24 sm:w-16 sm:h-16 xl:left-40 xl:w-18 xl:h-18',
  },
  {
    src: '/person6.png',
    className:
      '-bottom-20 left-24 w-24 h-24 sm:-bottom-18 sm:left-44  sm:w-28 sm:h-28 xl:left-60 xl:w-32 xl:h-32',
  },
];

const AnimatedCounter = ({ value }: { value: number }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = React.useState(0);

  useEffect(() => {
    if (isInView) {
      // Start counting animation
      const duration = 8.5; // seconds
      const startValue = 100;
      const endValue = value;
      const startTime = Date.now();

      const animate = () => {
        const elapsed = (Date.now() - startTime) / 1000;
        const progress = Math.min(elapsed / duration, 1);

        // Use easing function for smoother animation
        const easedProgress = easeOutQuad(progress);
        const currentValue = Math.floor(
          easedProgress * (endValue - startValue) + startValue
        );

        setDisplayValue(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
      controls.start({ opacity: 1 });
    }
  }, [isInView, value, controls]);

  // Easing function for smooth animation
  const easeOutQuad = (t: number) => {
    return t * (2 - t);
  };

  return (
    <motion.span ref={ref} initial={{ opacity: 0 }} animate={controls}>
      {new Intl.NumberFormat('en-IN').format(displayValue)}
    </motion.span>
  );
};

const Community = () => {
  return (
    <div className="">
      <h1 className="text-6xl text-center max-w-2xl mx-auto font-normal ">
        People who ditched the word 'Awkard' packed their bags instead !
      </h1>

      <div className="relative my-10 w-full  py-12 gap-5 ">
        {' '}
        <h1 className="text-[#ED6D24] font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-center">
          <AnimatedCounter value={9935349} />
        </h1>
        {people.map((person, idx) => (
          <motion.img
            key={idx}
            src={person.src}
            alt={`person-${idx}`}
            className={`absolute ${person.className} object-cover rounded-full `}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, delay: idx * 0.2 }}
          />
        ))}
      </div>

      <div className="relative w-full overflow-hidden py-12 ">
        <Marquee className="[--duration:40s]" pauseOnHover>
          {travelItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 mx-4 rounded-xl space-x-10 flex items-center "
            >
              <div className="p-4 flex items-center ">
                <p
                  className={`${lora.className} text-white font-normal uppercase text-5xl tracking-wider space-x-3`}
                >
                  {item.tag}
                </p>
                {item.image && (
                  <Image
                    src={item.image}
                    alt="slider"
                    width={1000}
                    height={1000}
                    className="object-cover w-full h-full"
                  />
                )}
              </div>
            </div>
          ))}
        </Marquee>

        {/* Gradient overlays for better UX */}
        {/* <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-sky-100 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-emerald-100 to-transparent z-10" /> */}
      </div>
    </div>
  );
};

export default Community;
