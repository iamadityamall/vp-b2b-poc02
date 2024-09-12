import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faMobileAlt,
  faGem,
  faTools,
  faCar,
  faUser,
  faHome,
  faIndustry,
  faChild,
  faTshirt,
  faCouch,
  faBoxOpen,
} from "@fortawesome/free-solid-svg-icons";

const categories = [
  { id: 1, icon: faUser, title: "Business Services" },
  { id: 2, icon: faMobileAlt, title: "Consumer Electronics" },
  { id: 3, icon: faHome, title: "Home & Garden" },
  { id: 4, icon: faTshirt, title: "Apparel & Accessories" },
  { id: 5, icon: faGem, title: "Jewelry, Eyewear" },
  { id: 6, icon: faChild, title: "Mother, Kids & Toys" },
  { id: 7, icon: faTools, title: "Tools & Hardware" },
  { id: 8, icon: faCouch, title: "Furniture" },
  { id: 9, icon: faCar, title: "Vehicle Parts & Accessories" },
  { id: 10, icon: faBoxOpen, title: "Packaging & Printing" },
  { id: 11, icon: faIndustry, title: "Industrial Machinery" },
];

const CategorySection = () => {
  return (
    <div className=" bg-white py-24">
      <div className="container mx-auto px-32">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-5xl font-bold w-3/4 p-3">
              Explore millions of products tailored to your business needs
            </h2>
            <h2 className="text-xl font-bold w-3/4 p-3 text-gray-500">
              Tap to access expertise across supply chains. Get Quotations,
              Prices, and Latest News Instantly
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-x-28 gap-y-5">
            <div className="text-right">
              <h3 className="text-orange-500 text-[3rem] font-bold">200M+</h3>
              <p className="text-gray-500 text-[1rem]">products</p>
            </div>
            <div className="text-right">
              <h3 className="text-orange-500 text-[3rem] font-bold">5,900</h3>
              <p className="text-gray-500 text-[1rem]">product categories</p>
            </div>
            <div className="text-right">
              <h3 className="text-orange-500 text-[3rem] font-bold">200K+</h3>
              <p className="text-gray-500 text-[1rem]">suppliers</p>
            </div>
            <div className="text-right">
              <h3 className="text-orange-500 text-[3rem] font-bold">200+</h3>
              <p className="text-gray-500 text-[1rem]">countries and regions</p>
            </div>
          </div>
        </div>

        {/* Category Circles */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 justify-items-start mt-[5rem]">
          {categories.map((category) => (
            <a
              key={category.id}
              href="#"
              className="relative group w-[180px] h-[180px] flex flex-col justify-center items-center border border-gray-200 rounded-full hover:border-orange-500 hover:text-orange-500 transition-all duration-300"
            >
              {/* Icon */}
              <FontAwesomeIcon
                icon={category.icon}
                className="text-3xl mb-2 text-gray-500 group-hover:text-orange-500 transition-colors duration-300"
              />
              {/* Title */}
              <span className="text-xl font-medium text-gray-600 group-hover:text-orange-500 text-center">
                {category.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
