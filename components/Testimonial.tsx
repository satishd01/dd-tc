'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TravelCard {
  id: number;
  name: string;
  subtitle: string;
  quote: string;
  image?: string | StaticImageData;
}

import TestimonialProfile2 from '../public/TestimonialProfile2.jpg';
import Image, { StaticImageData } from 'next/image';
import { Quote } from 'lucide-react';

export default function TravelCardCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  // const controls = useAnimation();
  const [hoveredId, setHoveredId] = useState<null | number>(null);

  const travelCards: TravelCard[] = [
    {
      id: 0,
      name: 'Ahana D',
      subtitle: 'A trip to the mountains',
      quote:
        "I was nervous at first, but the app's community, vibe, and safety features put me at ease. I ended up having a great night!",
      image: TestimonialProfile2,
    },
    {
      id: 1,
      name: 'Ria K',
      subtitle: 'Mountain escape',
      quote:
        'Met my squad at 2 PM, climbed a mountain by sunset. It was a 10/10 experience, thanks to KITA.',
      image: '/personTestimonials.png',
    },
    {
      id: 2,
      name: 'Aakash N',
      subtitle: 'Beach cleanup',
      quote:
        "Met five strangers for a beach cleanup. Now we're planning a trek together next month!",
      image: '/personTestimonials.png',
    },
    {
      id: 4,
      name: 'Kavya R',
      subtitle: 'Weekend getaway',
      quote:
        'Love how I get to choose who joins my hangouts. Finally, an app that feels safe!',
      image: '/personTestimonials.png',
    },
    {
      id: 5,
      name: 'Vedika P',
      subtitle: 'Solo camping trip',
      quote:
        'Found a last-minute camping trip on KITA, went solo, and came back with five new friends!',
      image: '/personTestimonials.png',
    },
  ];

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 relative">
      <h2 className="text-5xl max-sm:text-4xl font-normal text-center mb-10">
        What Our Explorers Say
      </h2>
      {/* Optional Illustration */}
      <div className="absolute right-0 sm:right-10 -top-0 opacity-80 ">
        <Image
          src="/cheers.png"
          alt="Cheers"
          width={320}
          height={220}
          className="w-52 h-52 sm:w-[420px] sm:h-[420px] object-contain"
        />
      </div>

      {/* Carousel */}
      <div className="overflow-hidden py-10">
        <motion.div
          ref={carousel}
          className="py-20 px-10 relative "
          whileTap={{ cursor: 'grabbing' }}
        >
          <motion.div
            className="flex gap-6"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            animate={{ x: -activeIndex * (300 + 24) }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          >
            {travelCards.map((card) => (
              <div key={card.id} className="min-w-[300px] h-[320px] relative">
                {/* Background card - rotates left on hover */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-full bg-amber-100 rounded-3xl overflow-hidden pointer-events-none"
                  initial={{ zIndex: 0 }}
                  variants={{
                    initial: {
                      rotate: 0,
                      y: 0,
                      x: 0,
                      scale: 1,
                      zIndex: 0,
                    },
                    hover: {
                      rotate: -15,
                      y: -70,
                      x: -100,
                      scale: 1.02,
                      zIndex: 0,
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    },
                  }}
                  animate={
                    // This ties the animation to the hover state of the parent group
                    hoveredId === card.id ? 'hover' : 'initial'
                  }
                  transition={{ type: 'tween', duration: 0.3 }}
                >
                  <div className="h-full w-full overflow-hidden rounded-3xl">
                    <Image
                      alt={card.name}
                      src={card.image as string}
                      width={1000}
                      height={1000}
                      className="object-cover h-full w-full"
                    />
                  </div>
                </motion.div>

                {/* Foreground card - rotates right on hover */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-full bg-amber-100 rounded-3xl p-6 flex flex-col justify-between cursor-pointer"
                  initial={{ zIndex: 1 }}
                  whileHover={{
                    rotate: 15,
                    y: -10,
                    x: 100,
                    scale: 1.02,
                    zIndex: 10,
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                  }}
                  animate={hoveredId === card.id ? 'hover' : 'initial'}
                  onHoverStart={() => setHoveredId(card.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  transition={{ type: 'tween', duration: 0.3 }}
                >
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {card.name}
                    </h3>
                    <p className="text-gray-600">{card.subtitle}</p>
                  </div>
                  <div>
                    <Quote className="text-teal-700 mb-2 h-6 w-6" />
                    <p className="text-gray-700">{card.quote}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Optional: Navigation buttons */}
          <div className="flex justify-center gap-2 mt-6">
            {travelCards.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full ${
                  activeIndex === index ? 'bg-teal-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// For SAFETY

// <motion.div
// ref={carousel}
// className="overflow-hidden py-20 px-10 relative"
// whileTap={{ cursor: 'grabbing' }}
// >
// {/* Background Image Card*/}
// <motion.div
//   className="flex gap-6 absolute top-0 left-0 -z-10 hover:z-0"
//   drag="x"
//   dragConstraints={{ right: 0, left: -width }}
//   animate={{ x: -activeIndex * (300 + 24) }} // Card width + gap
//   transition={{ type: 'spring', damping: 20, stiffness: 100 }}
// >
//   {travelCards.map((card) => (
//     <motion.div
//       key={card.id}
//       className="min-w-[300px] h-[320px] bg-amber-100 rounded-3xl  flex flex-col justify-between"
//       whileHover={{
//         y: -10,
//         scale: 1.02,
//         rotate: -15,
//         backgroundColor: 'rgba(255, 255, 255, 1)',
//       }}
//       transition={{ type: 'spring', stiffness: 300, damping: 20 }}
//     >
//       <div className="h-full w-[320px] overflow-hidden sm:h-[220px] rounded-3xl ">
//         <Image
//           alt="profile"
//           src={card.image as string}
//           width={1000}
//           height={1000}
//           className=" object-cover"
//         />
//       </div>
//     </motion.div>
//   ))}
// </motion.div>
// <motion.div
//   className="flex gap-6"
//   drag="x"
//   dragConstraints={{ right: 0, left: -width }}
//   animate={{ x: -activeIndex * (300 + 24) }} // Card width + gap
//   transition={{ type: 'spring', damping: 20, stiffness: 100 }}
// >
//   {travelCards.map((card) => (
//     <motion.div
//       key={card.id}
//       className="min-w-[300px] h-[320px] bg-amber-100 rounded-3xl p-6 flex flex-col justify-between"
//       whileHover={{
//         y: -10,
//         scale: 1.02,
//         rotate: 15,
//         backgroundColor: 'rgba(255, 255, 255, 1)',
//       }}
//       transition={{ type: 'spring', stiffness: 300, damping: 20 }}
//     >
//       <div>
//         <h3 className="text-2xl font-bold text-gray-800">
//           {card.name}
//         </h3>
//         <p className="text-gray-600">{card.subtitle}</p>
//       </div>
//       <div>
//         <Quote className="text-teal-700 mb-2 h-6 w-6" />
//         <p className="text-gray-700">{card.quote}</p>
//       </div>
//     </motion.div>
//   ))}
// </motion.div>
// </motion.div>
