import React from "react";
import { Badge } from "@/components/ui/badge";
import { ListFilter } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FilterBar = ({
  selectedPower,
  onFilterChange,
  onSortChange,
  isSortOpen,
  toggleSortOptions,
  isFilterOpen,
  toggleFilterOptions,
}) => {
  const navigate = useNavigate();

  const handleFilterChange = (power) => {
    onFilterChange(power);
    if (power === "all") {
      navigate("/products");
    } else {
      navigate(`/products?power=${power}`);
      toggleFilterOptions();
    }
  };

  const handleSortChange = (sortOption) => {
    onSortChange(sortOption);
    toggleSortOptions();
  };

  const getBadgeColor = (power) => {
    switch (power) {
      case "luck":
        return "bg-green-600";
      case "love":
        return "bg-pink-600";
      case "success":
        return "bg-yellow-600";
      case "strength":
        return "bg-blue-600";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <section className="container mx-auto">
      <div className="flex justify-between py-8">
        {/* left */}
        <div className="flex gap-2">
          {selectedPower && (
            <Badge
              className={`uppercase text-base ${getBadgeColor(selectedPower)}`}
            >
              {selectedPower}
            </Badge>
          )}
        </div>
        {/* right */}
        <div className="flex gap-8">
          {/* sort */}
          <div className="flex items-center gap-2 relative">
            <p className={`${isSortOpen ? "font-bold" : ""}`}>Sort by</p>
            <ChevronDown
              onClick={toggleSortOptions}
              className={`w-6 h-6 ${
                isSortOpen
                  ? "rotate-180 duration-300 text-primary"
                  : "duration-300"
              }`}
            />
            {isSortOpen && (
              <div className="w-[160px] absolute left-0 z-10 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg top-full">
                <ul className="py-2">
                  {[
                    "Alphabetically",
                    "Price Low to High",
                    "Price High to Low",
                  ].map((category, index) => (
                    <li
                      key={index}
                      onClick={() => handleSortChange(category)}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {/* filter */}
          <div className="flex items-center gap-2 relative">
            <p className={`${isFilterOpen ? "text-primary" : ""}`}>Filter</p>
            <ListFilter
              onClick={toggleFilterOptions}
              className={`w-6 h-6 ${
                isFilterOpen ? "duration-300 text-primary" : "duration-300"
              }`}
            />
            {isFilterOpen && (
              <div className="absolute left-0 z-10 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg top-full">
                <ul className="py-2">
                  {["all", "luck", "love", "success"].map((power, index) => (
                    <li
                      key={index}
                      onClick={() => handleFilterChange(power)}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    >
                      {power}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterBar;
