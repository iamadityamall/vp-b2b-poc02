import React from "react";

const Services = () => {
  const services = [
    {
      title: "Metal Supplier Network",
      description:
        "We connect metal manufacturers directly to construction companies to streamline the supply chain.",
      icon: "🔗", // Placeholder icon (can be replaced with an actual image or icon component)
    },
    {
      title: "Construction Solutions",
      description:
        "Offering tailored solutions to ensure projects have timely access to high-quality metal materials.",
      icon: "🏗️", // Placeholder icon
    },
    {
      title: "Logistics Support",
      description:
        "We provide end-to-end logistics support, ensuring efficient and timely delivery of materials.",
      icon: "🚚", // Placeholder icon
    },
  ];

  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-6xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
