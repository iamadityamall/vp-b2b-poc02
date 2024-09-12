import React, { useState } from "react";
import navLinks from "../../../constants/navLinks"; // Import navLinks array
import CategoryMenu from "../submenu/CategoryMenu"; // Import the CategoryMenu component

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Filter nav links for the top row (Home, About, Services)
  const topRowLinks = navLinks.filter(
    (link) =>
      link.name === "Home" || link.name === "About" || link.name === "Services"
  );

  // Filter nav links for the second row (left side)
  const secondRowLeftLinks = navLinks.filter(
    (link) =>
      link.name === "All categories" ||
      link.name === "Featured selections" ||
      link.name === "Trade Assurance"
  );

  // Filter nav links for the second row (right side)
  const secondRowRightLinks = navLinks.filter(
    (link) =>
      link.name === "Buyer Central" ||
      link.name === "Help Center" ||
      link.name === "Get the App" ||
      link.name === "Become a Supplier"
  );

  return (
    <nav className="relative w-full">
      {/* First Row */}
      <div
        className={`w-full px-8 py-2 ${
          isHovered ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        <div className="flex justify-between items-center py-2">
          {/* Left Side: Logo */}
          <div className="flex items-center space-x-6">
            <div className="text-xl font-bold">
              <img
                src="/path-to-your-logo"
                alt="Syenergy-Logo"
                className="h-8 inline-block mr-2"
              />
            </div>
          </div>

          {/* Right Side: Iterate over topRowLinks */}
          <ul className="flex space-x-10 items-center">
            {topRowLinks.map((link, index) => (
              <li key={index} className="hover:text-gray-400">
                <a href={link.route}>{link.name}</a>
              </li>
            ))}

            {/* Sign in */}
            <li className="hover:text-gray-400 flex items-center">
              <a href="#">
                <span>👤</span> {/* User Icon */}
                Sign in
              </a>
            </li>

            {/* Sign up */}
            <li>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                Sign up
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Second Row */}
      <div
        className={`w-full px-8 ${
          isHovered ? "bg-white text-black" : "bg-gray-900 text-white"
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Left Side */}
          <ul className="flex text-xs font-medium">
            {secondRowLeftLinks.map((link, index) => (
              <li
                key={index}
                className="hover:text-gray-400 relative p-3"
                onMouseEnter={() =>
                  link.name === "All categories" && setIsHovered(true)
                }
                onMouseLeave={() => setIsHovered(false)}
              >
                {link.name}

                {/* Category Menu */}
                {link.name === "All categories" && isHovered && (
                  <div className="absolute left-0 top-full w-[96vw] bg-white shadow-lg z-50">
                    <CategoryMenu />
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <ul className="flex">
            {secondRowRightLinks.map((link, index) => (
              <li
                key={index}
                className="hover:text-gray-400 p-3 text-xs font-medium"
              >
                {link.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
