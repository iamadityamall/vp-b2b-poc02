import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Jeff Cripe",
    title: "CEO of Cargo",
    image: "https://randomuser.me/api/portraits/men/32.jpg", // Replace with actual image paths
    quote:
      "Synergy Lorem ipsum dolor sit amet consectetur adipisicing elit. Aba dolor placeat natus, iure, expedita reiciendis ipsam maxime",
  },
  {
    id: 2,
    name: "Thomas A.",
    title: "Solutions Engineer",
    image: "https://randomuser.me/api/portraits/men/43.jpg",
    quote:
      "Synergy Lorem ipsum dolor sit amet consectetur adipisicing elit. Aba dolor placeat natus, iure, expedita reiciendis ipsam maxime",
  },
  {
    id: 3,
    name: "Jonathan Wasserstrum",
    title: "CEO of Squarefoot",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    quote:
      "Synergy Lorem ipsum dolor sit amet consectetur adipisicing elit. Aba dolor placeat natus, iure, expedita reiciendis ipsam maxime.",
  },
  {
    id: 4,
    name: "Jovanna Feliz",
    title: "Operations at Hive",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    quote:
      "Synergy Lorem ipsum dolor sit amet consectetur adipisicing elit. Aba dolor placeat natus, iure, expedita reiciendis ipsam maxime",
  },
];

const logos = [
  {
    id: 1,
    name: "TimesOfIndia",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStg6KGL9c11WQf5zWoe0R7ChBnR8MZLfv0vQ&s",
  }, // Replace with actual logos
  {
    id: 2,
    name: "FinTech",
    logo: "https://media.istockphoto.com/id/914423816/vector/modern-concept-design-for-fintech.jpg?s=612x612&w=0&k=20&c=ZUfX2KH23b9jdXjOAXJad55HMT13t0WhVPg19Plp64U=",
  },
  {
    id: 3,
    name: "TheEconomicTimes",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQooAHQSXw-IP8G13g22Mx3Ebr98uG_ofRS6g&s",
  },
];

const TestimonialsSection = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-32 flex items-center space-x-20">
        {/* Title Section */}
        <div className="text-center mb-12 w-2/3">
          <h2 className="text-4xl font-bold mb-6">
            Loved by teams, remote workers & press.
          </h2>
          <p className="text-gray-600 text-lg italic max-w-xl mx-auto mb-4">
            Synergy Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            a dolor placeat natus, iure, expedita reiciendis ipsam maxime
            voluptatum nisi et iusto sunt accusantium id quia modi distinctio,
            facilis unde!”
          </p>

          {/* Logos Section */}
          <div className="flex justify-center space-x-8">
            {logos.map((logo) => (
              <img
                key={logo.id}
                src={logo.logo}
                alt={logo.name}
                className="h-10"
              />
            ))}
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="w-1/2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              {/* Image */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              {/* Name and Title */}
              <h3 className="text-xl font-bold mb-2">{testimonial.name}</h3>
              <p className="text-gray-500 mb-4">{testimonial.title}</p>
              {/* Quote */}
              <p className="text-gray-600 italic">{`"${testimonial.quote}"`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
