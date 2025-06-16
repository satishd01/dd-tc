'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Ahana D',
    trip: 'A trip to mountains',
    feedback:
      'I was nervous at first, but the app’s community vibe and safety features put me at ease. Ended up having a great night.',
    image: '/TestimonialProfile2.jpg',
  },
  {
    name: 'Ria K',
    trip: 'Mountain escape',
    feedback:
      'Met my squad at 2 PM, climbed a mountain by sunset. It was a 10/10 experience, thanks to KITA.',
    image: '/profile.jpg',
  },
  {
    name: 'Aakash N',
    trip: 'Beach Cleanup',
    feedback:
      'Met five strangers for a beach cleanup, now we’re planning a trek together next month!',
    image: '/profile.jpg',
  },
  {
    name: 'Vedika P',
    trip: 'Camping Trip',
    feedback:
      'Found a last minute camping trip on KITA, went solo, came back with 5 new friends!',
    image: '/profile.jpg',
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

export default function TestimonialSlider() {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([
      (page + newDirection + testimonials.length) % testimonials.length,
      newDirection,
    ]);
  };

  const current = testimonials[page];

  return (
    <section className="w-full max-w-3xl mx-auto py-20 px-4 relative overflow-hidden">
      <h2 className="text-4xl font-semibold text-center mb-12 text-white">
        What our travelers say
      </h2>

      <div className="relative h-[350px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full bg-white text-black p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center"
          >
            <Image
              src={current.image}
              alt={current.name}
              width={80}
              height={80}
              className="rounded-full mb-4"
            />
            <h3 className="text-xl font-bold">{current.name}</h3>
            <p className="text-sm text-gray-500">{current.trip}</p>
            <p className="mt-4 text-base text-gray-700 max-w-sm">
              {current.feedback}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-10 flex justify-center gap-8">
        <button
          onClick={() => paginate(-1)}
          className="text-white hover:text-emerald-400 transition"
        >
          ← Prev
        </button>
        <button
          onClick={() => paginate(1)}
          className="text-white hover:text-emerald-400 transition"
        >
          Next →
        </button>
      </div>
    </section>
  );
}
