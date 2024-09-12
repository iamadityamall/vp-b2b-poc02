import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCheckCircle,
  faCreditCard,
  faShippingFast,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";

const steps = [
  {
    id: 1,
    title: "Search for matches",
    description:
      "Search and filter from millions of product and supplier offerings to find the matching ones for your business.",
    icon: faSearch,
    image: "https://cdn-icons-png.flaticon.com/512/5109/5109721.png", // Replace with actual image path
  },
  {
    id: 2,
    title: "Identify the right one",
    description:
      "Evaluate product quality and supplier capabilities easily and efficiently through verified inspections.",
    icon: faCheckCircle,
    image:
      "https://www.unimart.in/wp-content/themes/picostrap-unimart-child/unimart/images/franchisee/steps-02.png", // Replace with actual image path
  },
  {
    id: 3,
    title: "Pay with confidence",
    description:
      "Pay for your order in over 20 currencies via 20+ secure payment methods, including flexible payment terms.",
    icon: faCreditCard,
    image:
      "https://www.southsouthfacility.org/sites/ssf/files/stepslogo/step3-feature.jpg", // Replace with actual image path
  },
  {
    id: 4,
    title: "Fulfill with transparency",
    description:
      "Get your logistics needs fulfilled with customized solutions at Synergy.",
    icon: faShippingFast,
    image: "https://www.willingways.org/wp-content/uploads/2022/09/Step-4.png", // Replace with actual image path
  },
  {
    id: 5,
    title: "Manage with ease",
    description:
      "Check order status, manage suppliers, track payments, and shipments, and contact after-sales support.",
    icon: faCogs,
    image: "https://www.willingways.org/wp-content/uploads/2022/09/Step-5.png", // Replace with actual image path
  },
];

const OrderingSteps = () => {
  const [activeStep, setActiveStep] = useState(steps[0]); // Default to the first step

  return (
    <div className="flex flex-wrap items-center justify-center py-24 space-y-6 md:space-y-0">
      {/* Left: Steps List */}
      <div className="w-full md:w-1/2 grid gap-y-16">
        <h1 className="text-5xl font-bold mb-6 leading-[4rem]">
          Streamline ordering from search to fulfillment, all in one place
        </h1>
        <ul className="space-y-4">
          {steps.map((step) => (
            <li
              key={step.id}
              onMouseEnter={() => setActiveStep(step)}
              className={`cursor-pointer p-4 flex items-center space-x-4 hover:bg-gray-100 rounded-lg ${
                activeStep.id === step.id ? "bg-orange-200" : "bg-white"
              } transition-colors duration-300`}
            >
              {/* FontAwesomeIcon */}
              <FontAwesomeIcon
                icon={step.icon}
                className={`text-4xl ${
                  activeStep.id === step.id
                    ? "text-orange-500"
                    : "text-gray-500"
                } transition-colors duration-300`}
              />
              <div>
                <h3
                  className={`font-semibold text-xl ${
                    activeStep.id === step.id ? "text-red-900" : "text-gray-800"
                  }`}
                >
                  {step.title}
                </h3>
                {activeStep.id === step.id && (
                  <p className="text-sm text-gray-600 transition-opacity duration-300 opacity-100">
                    {step.description}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: Image Display */}
      <div className="w-full md:w-1/4 ml-20">
        <img
          src={activeStep.image}
          alt={activeStep.title}
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default OrderingSteps;
