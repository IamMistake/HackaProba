import NavBar from "../components/NavBar.jsx";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const products = [
  { id: 1, productName: "Red Shirt", type: "shirt", color: "red", size: "M" },
  { id: 2, productName: "Blue Shirt", type: "shirt", color: "blue", size: "L" },
  { id: 3, productName: "Green Shirt", type: "shirt", color: "green", size: "S" },
  { id: 4, productName: "Black Mug", type: "mug", color: "black" },
  { id: 5, productName: "White Mug", type: "mug", color: "white" },
  { id: 6, productName: "Red Mug", type: "mug", color: "red" },
];

function WebShop() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]); 

  // Toggle function for checkboxes
  const handleCheckboxChange = (value, setter, selectedValues) => {
    if (selectedValues.includes(value)) {
      setter(selectedValues.filter((item) => item !== value)); 
    } else {
      setter([...selectedValues, value]); 
    }
  };

  const filteredProducts = products.filter((product) => {
    return (
      product.productName.toLowerCase().includes(search.toLowerCase()) &&
      (filterType === "all" || product.type === filterType) &&
      (selectedColors.length === 0 || selectedColors.includes(product.color)) &&
      (selectedSizes.length === 0 || product.size === undefined || selectedSizes.includes(product.size))
    );
  });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 m-4 mt-1 h-screen sm:grid-rows-[51vh_35vh]">
      
      {/* Sidebar - Filters */}
      <div className="col-span-1 bg-white p-4 text-black overflow-y-auto hide-scrollbar 
  rounded-[20px] shadow-xl shadow-green-800 flex-grow mt-20">

        <h2 className="font-bold text-lg mb-2">Filters</h2>

        {/* Type Filter */}
        <div>
          <label className="block font-bold">Type:</label>
          {["all", "shirt", "mug"].map((type) => (
            <div key={type}>
              <input
                type="radio"
                id={type}
                name="type"
                value={type}
                checked={filterType === type}
                onChange={() => setFilterType(type)}
                className="mr-2"
              />
              <label htmlFor={type} className="capitalize">{type}</label>
            </div>
          ))}
        </div>

        {/* Color Filter */}
        {filterType !== "all" && (
          <div className="mt-4">
            <label className="block font-bold">Color:</label>
            {["red", "blue", "green", "black", "white"].map((color) => (
              <div key={color}>
                <input
                  type="checkbox"
                  id={color}
                  value={color}
                  checked={selectedColors.includes(color)}
                  onChange={() => handleCheckboxChange(color, setSelectedColors, selectedColors)}
                  className="mr-2"
                />
                <label htmlFor={color} className="capitalize">{color}</label>
              </div>
            ))}
          </div>
        )}

        {/* Size Filter (Only for Shirts) */}
        {filterType === "shirt" && (
          <div className="mt-4">
            <label className="block font-bold">Size:</label>
            {["S", "M", "L"].map((size) => (
              <div key={size}>
                <input
                  type="checkbox"
                  id={size}
                  value={size}
                  checked={selectedSizes.includes(size)}
                  onChange={() => handleCheckboxChange(size, setSelectedSizes, selectedSizes)}
                  className="mr-2"
                />
                <label htmlFor={size}>{size}</label>
              </div>
            ))}
          </div>
        )}
      </div>


      {/* Main Content - Products */}
      <div className="col-span-3 bg-white p-6 text-black rounded-[20px] min-h-[80vh] shadow-xl shadow-green-800">
      
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search products..."
          className="w-full p-2 my-4 border rounded-md"
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Product Grid */}
        <div className="grid grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="p-4 border shadow-md rounded-[20px] bg-gray-100">
              <h3 className="font-bold">{product.productName}</h3>
              <p>Type: {product.type}</p>
              <p>Color: {product.color}</p>
              {product.size && <p>Size: {product.size}</p>}

              {/* Add to Cart Button */}
              <button className="mt-2 w-full bg-blue-500 text-white py-2 px-4 rounded-lg 
                hover:bg-blue-600 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>

      </div>
       <button
          onClick={() => navigate("/MakeAProduct")}
          className="mb-auto bg-blue-500 text-white p-2 rounded-md shadow-md hover:bg-blue-700"
        >
          Креирај свој продукт  
        </button>
    </div>
  );
}

export default WebShop;
