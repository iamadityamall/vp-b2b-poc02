import React from "react";

const CTASection = () => {
  return (
    <div
      className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://media.licdn.com/dms/image/C5612AQE27ISSEyxrew/article-cover_image-shrink_600_2000/0/1520100259241?e=2147483647&v=beta&t=5oJbqpi8cWnX6IpclX09LIRqfAUsAaN7NNQUsEKWiok')`, // Replace with your actual image path
      }}
    >
      {/* Orange overlay with backdrop-filter */}
      <div className="absolute inset-0 bg-orange-900 opacity-90"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <h2 className="text-5xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-xl mb-6">
          Explore millions of products from trusted suppliers by signing up
          today!
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-full font-bold text-xl">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default CTASection;
