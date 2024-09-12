import React from "react";

const cards = [
  {
    id: 1,
    title: "Aggregator",
    description:
      "Enabling buyers and supplier ecosystem to supply the best raw materials across the globe",
    imageUrl: "https://etimg.etb2bimg.com/photo/108931180.cms", // Replace with actual image path
  },
  {
    id: 2,
    title: "Manufacturer",
    description: "Manufacturing top-quality products for various industries",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/57/Tesla_auto_bots.jpg", // Replace with actual image path
  },
  {
    id: 3,
    title: "Importer & Exporter",
    description:
      "Bringing goods from around the world and distributing globally",
    imageUrl:
      "https://www.americanwarehouses.com/hubfs/AmericanWarehouses_Blog_TheBestApproachToLeasingWarehouseSpace.jpg", // Replace with actual image path
  },
  {
    id: 4,
    title: "NBFC Financier",
    description: "Providing financing solutions for businesses of all sizes",
    imageUrl:
      "https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg", // Replace with actual image path
  },
  {
    id: 5,
    title: "SaaS & AI",
    description: "Leveraging SaaS and AI for business growth and automation",
    imageUrl:
      "https://www.mindinventory.com/blog/wp-content/uploads/2023/11/ai-ml-in-business-processes.webp", // Replace with actual image path
  },
];

const FullWidthCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {cards.map((card) => (
        <div
          key={card.id}
          className="relative group h-96 bg-cover bg-center hover:cursor-pointer"
          style={{
            backgroundImage: `url(${card.imageUrl})`,
          }}
        >
          {/* Overlay for hover effect */}
          <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-60 transition-opacity duration-300"></div>

          {/* Title and description container */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h2 className="text-white text-2xl font-bold">{card.title}</h2>

            {/* Description shown only on hover */}
            <p className="text-white text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FullWidthCards;
