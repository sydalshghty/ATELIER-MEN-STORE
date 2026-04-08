import { useState, useEffect } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=2070&auto=format&fit=crop"
          alt="Man in stylish jacket"
          className={`w-full h-full object-cover object-center transition-all duration-1000 ${isLoaded ? 'scale-100' : 'scale-105'
            }`}
        />
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Subtitle */}
          <p className="text-white/90 text-xs sm:text-sm md:text-base uppercase tracking-[0.3em] mb-4 sm:mb-6 font-light">
            The Curated Collection
          </p>

          {/* Main Heading */}
          <h1 className="text-white font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight mb-6 sm:mb-8 md:mb-10">
            The Art of
            <br />
            Precision
          </h1>

          {/* CTA Button */}
          <button className="group relative rounded-[4px] cursor-pointer inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 bg-[#C4A564] hover:bg-[#D4B574] text-white font-medium tracking-widest text-xs sm:text-sm uppercase transition-all duration-300 transform hover:scale-105">
            <span className="relative z-10">Shop Now</span>
            {/* Button hover effect */}
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Scroll Indicator (Desktop Only) */}
      <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
