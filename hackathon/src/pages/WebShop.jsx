import NavBar from "../components/NavBar.jsx";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// const products = [
//   { id: 1, productName: "Red Shirt", type: "shirt", color: "red", size: "M" }
// ];

function WebShop() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([
  { id: 1, productName: "Red Shirt", type: "shirt", color: "red", size: "M", imageUrl: "https://ibb.co/nZ1qDnM" }
]);
  const [filterType, setFilterType] = useState("all");
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  useEffect(() => {
        fetch("http://localhost:8000/api/merch/products")
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Error fetching bot response:", error));
    }, []);


      {/* Define translations */}
    const typeTranslations = {
      shirt: "Маица",
      mug: "Чаша"
    };

    const colorTranslations = {
      red: "Црвена",
      blue: "Сина",
      green: "Зелена",
      black: "Црна",
      white: "Бела"
    };

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

        <h2 className="font-bold text-lg mb-2">Филтери</h2>

        {/* Type Filter */}
        <div>
        <label className="block font-bold">Тип:</label>
        {[
          { key: "all", label: "Сите" },
          { key: "Shirt", label: "Маица" },
          { key: "Mug", label: "Чаша" }
        ].map(({ key, label }) => (
          <div key={key}>
            <input
              type="radio"
              id={key}
              name="type"
              value={key}
              checked={filterType === key}
              onChange={() => setFilterType(key)}
              className="mr-2"
            />
            <label htmlFor={key} className="capitalize">{label}</label>
          </div>
        ))}
        </div>

        {/* Color Filter */}
                  {filterType !== "all" && (
            <div className="mt-4">
              <label className="block font-bold">Боја:</label>
              {[
                { key: "Red", label: "Црвена" },
                { key: "Blue", label: "Сина" },
                { key: "Green", label: "Зелена" },
                { key: "Black", label: "Црна" },
                { key: "White", label: "Бела" }
              ].map(({ key, label }) => (
                <div key={key}>
                  <input
                    type="checkbox"
                    id={key}
                    value={key}
                    checked={selectedColors.includes(key)}
                    onChange={() => handleCheckboxChange(key, setSelectedColors, selectedColors)}
                    className="mr-2"
                  />
                  <label htmlFor={key} className="capitalize">{label}</label>
                </div>
              ))}
            </div>
          )}

        {/* Size Filter (Only for Shirts) */}
        {filterType === "shirt" && (
          <div className="mt-4">
            <label className="block font-bold">Големина:</label>
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
  {/* Search Bar and Shopping Cart Icon in the same div */}
  <div className="flex items-center space-x-2 my-4 bg-white p-2 rounded-md shadow-md">
    <input
      type="text"
      placeholder="Пребарај производи..."
      className="w-full border-none focus:ring-0"
      onChange={(e) => setSearch(e.target.value)}
    />
    <img
      src="https://static.vecteezy.com/system/resources/previews/014/767/647/non_2x/magnifying-glass-or-search-icon-on-white-background-illustration-eps-10-vector.jpg"
      alt="Search Icon"
      className="h-8 w-8 text-gray-500 cursor-pointer"
    />
      <img
      src="https://img.freepik.com/premium-vector/shopping-cart-icon-isolated-white-background-vector-illustration_736051-305.jpg"
      alt="Shopping Cart Icon"
      className="h-14 w-14 text-gray-500 cursor-pointer"
    />
  </div>

  {/* Product Grid */}
  <div className="grid grid-cols-3 gap-6">
    {filteredProducts.map((product) => (
        <div key={product.id} className="relative p-4 border shadow-md rounded-[20px] bg-gray-100">
            {/* Image in the top-right corner */}
            <img src={product.imageUrl + "/Screenshot-1.jpg"} alt={product.productName}
                 className="absolute top-2 right-2 w-26 h-26 object-cover rounded-full"/>

            <h3 className="font-bold">{product.productName}</h3>
            <p>Тип: {typeTranslations[product.type] || product.type}</p>
            <p>Боја: {colorTranslations[product.color] || product.color}</p>
            {product.size && <p>Големина: {product.size}</p>}

            {/* Add to Cart Button */}
            <button className="mt-2 w-full bg-gradient-to-r from-green-400 to-green-600 text-white py-2 px-4 rounded-lg
    hover:from-green-500 hover:to-green-700 transition">
                Додади во кошничка
            </button>
        </div>


    ))}
  </div>
      </div>

        <button
            onClick={() => navigate("/MakeAProduct")}
            className="mb-auto w-full bg-gradient-to-r from-green-400 to-green-600 text-white py-3 px-6 rounded-full shadow-md hover:from-green-500 hover:to-green-700 transition duration-300"
        >
            Креирај свој продукт
        </button>
    </div>
  );
}

export default WebShop;
