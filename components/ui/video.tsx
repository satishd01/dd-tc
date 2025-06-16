'use client';

export function Video() {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden rounded-4xl">
      <video
        className="w-full h-full object-cover "
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/fallback.jpg" // Optional fallback image
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Optional Text/CTA
      <div className="absolute z-20 inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-5xl font-bold">Welcome to Our Store</h1>
        <p className="mt-4 text-lg">
          Discover amazing products curated just for you.
        </p>
      </div> */}
    </div>
  );
}
