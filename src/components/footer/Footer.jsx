import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto px-32">
        {/* Top section: Supplier by country or region */}
        <div className="flex justify-between items-center pb-10 border-b border-gray-300">
          <h2 className="text-xl font-bold">
            Find suppliers by country or region
          </h2>
          <a href="#" className="text-orange-500 hover:underline">
            View more →
          </a>
        </div>

        {/* Countries and Regions */}
        <div className="flex justify-between space-x-6 py-8 w-full">
          {[
            {
              name: "Japan",
              flag: "🇯🇵",
              img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/640px-Flag_of_Japan.svg.png",
            },
            {
              name: "Italy",
              flag: "🇮🇹",
              img: "https://cdn.britannica.com/59/1759-050-FCD5A574/Flag-Italy.jpg",
            },
            {
              name: "Turkey",
              flag: "🇹🇷",
              img: "https://cdn.britannica.com/82/4782-050-8129909C/Flag-Turkey.jpg",
            },
            {
              name: "Malaysia",
              flag: "🇲🇾",
              img: "https://img.freepik.com/free-vector/illustration-malaysia-flag_53876-27133.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1726099200&semt=ais_hybrid",
            },
            {
              name: "South Korea",
              flag: "🇰🇷",
              img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/800px-Flag_of_South_Korea.svg.png",
            },
            {
              name: "Vietnam",
              flag: "🇻🇳",
              img: "https://cdn.britannica.com/41/4041-050-BB4577F8/Flag-Vietnam.jpg",
            },
            {
              name: "Russia",
              flag: "🇷🇺",
              img: "https://cdn.britannica.com/42/3842-050-68EEE2C4/Flag-Russia.jpg",
            },
            {
              name: "Thailand",
              flag: "🇹🇭",
              img: "https://cdn.britannica.com/38/4038-050-BDDBA6AB/Flag-Thailand.jpg",
            },
          ].map((country, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center"
            >
              <div className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center mb-2">
                <img
                  src={country.img}
                  alt={country.flag}
                  className="h-full w-full object-contain rounded-full"
                />
              </div>
              <span className="text-[14px] text-center">{country.name}</span>
            </div>
          ))}
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-10 border-t border-gray-300">
          <div>
            <h3 className="font-bold text-lg mb-3">Get support</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Live chat
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Check order status
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Refunds
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Report abuse
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Trade Assurance</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Safe and easy payments
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Money-back policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  On-time shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  After-sales protections
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Product monitoring services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Source on Syenergy.com</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Request for Quotation
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Membership program
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Syenergy.com Logistics
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Sales tax and VAT
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Syenergy.com Reads
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Sell on Syenergy.com</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Start selling
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Seller Central
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Become a Verified Supplier
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Partnerships
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Download the app for suppliers
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between border-t border-gray-300">
          {/* Social Media Links */}
          <div className="flex justify-center space-x-4 py-6 ">
            <a href="#" className="text-gray-500 hover:text-orange-500">
              <FontAwesomeIcon icon={faLinkedin} size="x" />
            </a>
            <a href="#" className="text-gray-500 hover:text-orange-500">
              <FontAwesomeIcon icon={faFacebook} size="x" />
            </a>
            <a href="#" className="text-gray-500 hover:text-orange-500">
              <FontAwesomeIcon icon={faTwitter} size="x" />
            </a>
            <a href="#" className="text-gray-500 hover:text-orange-500">
              <FontAwesomeIcon icon={faInstagram} size="x" />
            </a>
            <a href="#" className="text-gray-500 hover:text-orange-500">
              <FontAwesomeIcon icon={faYoutube} size="x" />
            </a>
            <a href="#" className="text-gray-500 hover:text-orange-500">
              <FontAwesomeIcon icon={faTiktok} size="x" />
            </a>
          </div>
          {/* App Store Links */}
          <div className="flex justify-center space-x-4 py-6">
            <a href="#" className="w-32">
              <img
                src="https://w7.pngwing.com/pngs/506/939/png-transparent-app-store-logo-iphone-app-store-get-started-now-button-electronics-text-telephone-call.png" // Replace with the actual path
                alt="Download on the App Store"
              />
            </a>
            <a href="#" className="w-32">
              <img
                src="https://freelogopng.com/images/all_img/1664287128google-play-store-logo-png.png" // Replace with the actual path
                alt="Get it on Google Play"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
