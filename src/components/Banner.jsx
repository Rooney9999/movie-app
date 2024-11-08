import { useState, useEffect } from 'react';

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    "https://wallpapercave.com/wp/wp1945939.jpg",
    "https://www.admecindia.co.in/wp-content/uploads/2017/11/Types-of-movie-poster.jpg",
    "https://images.thedirect.com/media/article_full/marvel-posters-ranked.jpg"
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Automatically transitions every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [activeIndex]);

  return (
    <div className="relative w-full p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg shadow-lg">
      <div id="default-carousel" className="relative w-full bg-black bg-opacity-70 rounded-lg py-8">
        {/* Title Section */}
        <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-black via-white to-yellow-500 uppercase tracking-widest py-8 mb-6 shadow-xl transform transition-all duration-300 hover:scale-110 hover:shadow-2xl">
          Explore The Movie Worlds
        </h1>

        {/* Carousel Wrapper with gradient border */}
        <div className=" mx-4 relative h-80 md:h-96 overflow-hidden rounded-lg shadow-lg border-4 p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          <div className="w-full h-full rounded-lg overflow-hidden mx-2">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={` absolute inset-0 transition-opacity duration-700 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                data-carousel-item
              >
                <img
                  src={slide}
                  className="absolute w-full h-full object-fit rounded-lg "
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
