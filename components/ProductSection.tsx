'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

interface ProductCard {
  id: number;
  productName: string;
  image?: string | StaticImageData;
}

export default function ProductSection() {
  const [clickedCardId, setClickedCardId] = useState<number | null>(null);
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  const productCards: ProductCard[] = [
    { id: 0, productName: 'Vibe Wear – T-shirt', image: '/productTshirt.png' },
    { id: 1, productName: 'Vibe Wear – T-shirt', image: '/merchShoot1.jpg' },
    { id: 2, productName: 'Vibe Cap – cap', image: '/productHat.png' },
    { id: 3, productName: 'Kita Fit', image: '/productTshirt.png' },
    { id: 4, productName: 'Vibe Kit – entire kit', image: '/productHat.png' },
    // Duplicated for infinite scroll
    { id: 5, productName: 'Vibe Wear – T-shirt', image: '/productTshirt.png' },
    { id: 6, productName: 'Vibe Wear – T-shirt', image: '/merchShoot1.jpg' },
    { id: 7, productName: 'Vibe Cap – cap', image: '/productHat.png' },
    { id: 8, productName: 'Kita Fit', image: '/productTshirt.png' },
    { id: 9, productName: 'Vibe Kit – entire kit', image: '/productHat.png' },
  ];

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="mt-24">
        <h2 className="text-4xl font-normal mb-8">
          KITA Merchandise: Earn Your Fit
        </h2>
        <div className="mb-10">
          <h3 className="text-white text-xl font-medium mb-2">
            Style that speaks for itself
          </h3>
          <ul className="list-disc ml-6 text-white text-base">
            <li>Style that speaks so you don't have to</li>
            <li>Easy to carry, easier to live in</li>
            <li>For wanderers chasing the weird and wonderful</li>
          </ul>
        </div>

        <motion.div
          ref={carousel}
          className="overflow-hidden py-10 cursor-grab"
          whileTap={{ cursor: 'grabbing' }}
        >
          <motion.div
            className="flex gap-4"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            transition={{ ease: 'easeOut' }}
          >
            {productCards.map((card) => {
              const isActive = clickedCardId === card.id;
              return (
                <motion.div
                  key={card.id}
                  className="min-w-[250px] h-[250px] relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  onClick={() => setClickedCardId(isActive ? null : card.id)}
                >
                  <motion.div
                    className="w-full h-full overflow-hidden relative rounded-full"
                    animate={{ scale: isActive ? 1.1 : 1 }}
                    transition={{ duration: 0.3, type: 'spring' }}
                  >
                    {card.image && (
                      <Image
                        src={card.image}
                        alt={card.productName}
                        width={250}
                        height={250}
                        className="object-cover w-full h-full"
                        priority={card.id < 5} // Prioritize first set of images
                      />
                    )}
                    <div className="absolute inset-x-0 bottom-4 bg-black bg-opacity-50 py-1">
                      <h3 className="text-lg font-semibold text-white text-center">
                        {card.productName}
                      </h3>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
