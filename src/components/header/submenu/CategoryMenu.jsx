import React, { useState } from "react";
import { categories, subcategories, cards } from "../../../constants/menuData"; // Import constants

const CategoryMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState("industrial");
  const [hoveredCategory, setHoveredCategory] = useState(null); // Track the hovered category
  const [selectedSubcategory, setSelectedSubcategory] = useState("machinery");
  const [hoveredSubcategory, setHoveredSubcategory] = useState(null); // Track the hovered subcategory

  // Determine the category and subcategory being shown (hovered or selected)
  const activeCategory = hoveredCategory || selectedCategory;
  const activeSubcategory = hoveredSubcategory || selectedSubcategory;

  // Check if the category has subcategories
  const categoryHasSubcategories = subcategories[activeCategory]?.length > 0;

  return (
    <div className="flex mx-auto px-2 py-2">
      {/* Left Column: Categories */}
      <div className="w-1/4 border-r border-gray-200">
        <ul className="">
          {categories.map((category) => (
            <li
              key={category.id}
              className={`px-4 py-2 cursor-pointer ${
                category.id === activeCategory ? "bg-gray-200 font-bold" : ""
              }`}
              onMouseEnter={() => setHoveredCategory(category.id)} // Hover effect
              onMouseLeave={() => setHoveredCategory(null)} // Reset hover on leave
              onClick={() => {
                setSelectedCategory(category.id);
                setSelectedSubcategory(null); // Reset subcategory on new category selection
              }} // Select on click
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Middle Column: Subcategories */}
      <div className="w-1/4 border-r border-gray-200 px-4">
        <ul className="space-y-2">
          {categoryHasSubcategories ? (
            subcategories[activeCategory]?.map((subcategory) => (
              <li
                key={subcategory.id}
                className={`px-4 py-2 cursor-pointer ${
                  subcategory.id === activeSubcategory
                    ? "bg-gray-200 font-bold"
                    : ""
                }`}
                onMouseEnter={() => setHoveredSubcategory(subcategory.id)} // Hover effect
                onMouseLeave={() => setHoveredSubcategory(null)} // Reset hover on leave
                onClick={() => setSelectedSubcategory(subcategory.id)} // Select on click
              >
                {subcategory.name}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500">
              No subcategories available
            </li>
          )}
        </ul>
      </div>

      {/* Right Column: Circular Cards */}
      <div className="w-1/2 px-8 py-3">
        {categoryHasSubcategories && activeSubcategory && (
          <>
            <h3 className="font-bold mb-10">
              {
                subcategories[activeCategory]?.find(
                  (sub) => sub.id === activeSubcategory
                )?.name
              }
            </h3>
            <div className="grid grid-cols-4 gap-6">
              {cards[activeSubcategory]?.map((card, index) => (
                <div key={index} className="text-center">
                  <div
                    style={{ backgroundColor: card.color }}
                    className="w-16 h-16 rounded-full mx-auto mb-2"
                  ></div>
                  <p className="text-sm">{card.name}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CategoryMenu;
