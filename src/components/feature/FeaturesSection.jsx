import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCubes,
  faShieldAlt,
  faShippingFast,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons"; // Import the icons you want to use

const features = [
  {
    id: 1,
    icon: faCubes, // FontAwesome icon
    title: "Millions of business offerings",
    description:
      "Explore products and suppliers for your business from millions of offerings worldwide.",
  },
  {
    id: 2,
    icon: faShieldAlt, // FontAwesome icon
    title: "Assured quality and transactions",
    description:
      "Ensure production quality from verified suppliers, with your orders protected from payment to delivery.",
  },
  {
    id: 3,
    icon: faShippingFast, // FontAwesome icon
    title: "One-stop trading solution",
    description:
      "Order seamlessly from product/supplier search to order management, payment, and fulfillment.",
  },
  {
    id: 4,
    icon: faBriefcase, // FontAwesome icon
    title: "Tailored trading experience",
    description:
      "Get curated benefits, such as exclusive discounts, enhanced protection, and extra support.",
  },
];

const FeaturesSection = () => {
  return (
    <div className="bg-red-950 py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="cursor-pointer bg-brown-800 text-white rounded-2xl p-6 transition-transform transform hover:scale-105 hover:bg-red-900"
          >
            <div className="mb-4 text-4xl">
              {/* Icon is clickable and hoverable */}
              <a
                href="#"
                className="transition-transform transform hover:scale-101"
              >
                <FontAwesomeIcon
                  icon={feature.icon}
                  className="text-white hover:text-orange-300 transition-colors duration-300"
                />
              </a>
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
