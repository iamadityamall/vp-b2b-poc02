import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const TopBanner = () => {
  return (
    <div className="w-full bg-pink-100 py-1">
      <div className="container mx-auto flex justify-between items-center px-8">
        {/* Left side: Email, Contact Number, Social Media, and Working Hours */}
        <div className="flex items-center space-x-4">
          {/* Email and Contact */}
          <span className="text-sm font-medium text-black">
            📧 Email: support@example.com
          </span>
          <span className="text-sm font-medium text-black">
            📞 Contact: +123-456-7890
          </span>

          {/* Working Hours */}
          <span className="text-sm font-medium text-black">
            📅 Mon - Fri: 9 AM - 6 PM
          </span>

          {/* Social Media Icons */}
          <div className="flex space-x-3">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-orange-500"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-orange-500"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-orange-500"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        {/* Right side: Call to Action, Language Selector */}
        <div className="flex items-center space-x-4">
          {/* Call to Action */}
          <button className="text-sm font-bold text-black hover:text-orange-500">
            Explore now &rarr;
          </button>

          {/* Language Selector */}
          <select className="text-sm font-medium bg-white border border-gray-300 rounded p-1">
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
