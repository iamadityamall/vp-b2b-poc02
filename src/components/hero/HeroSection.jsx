import React from "react";

const HeroSection = () => {
  // Scroll to the Call to Action section
  const scrollToCTA = () => {
    const ctaSection = document.getElementById("cta-section");
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center justify-center"
      style={{
        backgroundImage: `url('https://t3.ftcdn.net/jpg/03/15/13/00/360_F_315130016_cH2oeokyrGpS1P3aEgCzQqgLvkaLb3R3.jpg')`, // Replace with actual path
      }}
    >
      {/* Remove Blur: Keep background image clear */}

      {/* Overlay for text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content inside the hero section */}
      <div className="relative z-10 text-center text-white px-4">
        {/* Learn More Section */}
        <a
          href="#"
          className="text-sm font-medium flex items-center justify-center mb-4 hover:underline"
        >
          <span className="material-icons mr-2">play_circle_outline</span>
          Learn about Synenergy.com
        </a>

        {/* Main Heading */}
        <h1 className="text-5xl font-bold mb-6">
          The leading B2B platform for global trade
        </h1>

        {/* Subheading and Search Input */}
        <div className="relative w-full max-w-md mx-auto mb-8">
          <input
            type="text"
            placeholder="Super September"
            className="w-full py-3 px-4 pr-16 rounded-full text-black"
          />
          {/* Search Button Positioned Inside the Input */}
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-full">
            Search
          </button>
        </div>

        {/* Frequently Searched Items */}
        <div className="mt-8 flex justify-center space-x-4">
          <h3 className="text-sm font-medium mb-2 place-content-center">
            Frequently searched:
          </h3>
          <div className="flex space-x-4 justify-center">
            <button className="text-white px-4 py-1 rounded-full shadow text-sm border font-bold">
              lorem ipsum
            </button>
            <button className="text-white px-4 py-1 rounded-full shadow text-sm border font-bold">
              lorem ipsum
            </button>
            <button className="text-white px-4 py-1 rounded-full shadow text-sm border font-bold">
              lorem ipsum
            </button>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="mt-8">
          <button
            onClick={scrollToCTA}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full"
          >
            Get Quotation
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
