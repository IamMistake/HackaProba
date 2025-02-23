import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MakeAProduct() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [designOption, setDesignOption] = useState("AI");
  const [productType, setProductType] = useState("shirt");
  const [showPreviews, setShowPreviews] = useState(false);
  const [selectedImage, setSelectedImage] = useState(""); // State for modal image

  const handleSubmit = () => {
    setShowPreviews(true);
  };

  const handleAddToCart = (previewNumber) => {
    alert(`Product ${previewNumber} added to cart!`);
    // Implement your cart logic here
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl); // Set the clicked image to show in the modal
  };

  const handleCloseModal = () => {
    setSelectedImage(""); // Close the modal by clearing the selected image
  };

  return (
    <div className="px-8 py-4">
      <div className="flex justify-center items-start mt-10">
        <div className="mr-6">
          <button
            onClick={() => navigate("/WebShop")}
            className="mb-auto bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700"
          >
            Назад
          </button>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-xl shadow-green-700 w-full max-w-md">
          <h2 className="text-xl font-bold text-center mb-4">Направи производ</h2>

          <label className="block text-gray-700 font-medium">Напиши:</label>
          <input
            type="text"
            className="w-full p-2 mt-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setInput(e.target.value)}
          />

          <p className="text-gray-600 text-sm mb-4">
            Информации како работи: <span className="font-semibold">
              Внесете текст кој сакате да биде отпечатен на маица или чаша. 
              Изберете дали да користите AI за автоматско генерирање или да го дизајнирате сами. 
              Подолу можете да ги видите прегледите.
            </span>
          </p>

          {/* Product Type Selection */}
          <fieldset className="space-y-3">
            <legend className="text-gray-700 font-medium">Одбери производ:</legend>

            {["shirt", "mug"].map((type) => (
              <div key={type} className="flex items-center p-2 border border-gray-300 rounded-md shadow-sm">
                <input
                  id={type}
                  type="radio"
                  name="product-type"
                  value={type}
                  checked={productType === type}
                  onChange={() => setProductType(type)}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor={type} className="ml-2 text-gray-900">
                  {type === "shirt" ? "Маица" : "Чаша"}
                </label>
              </div>
            ))}
          </fieldset>

          <fieldset className="space-y-3  mt-4">
            <legend className="text-gray-700 font-medium">Одбери опција:</legend>

            {["AI", "Со твое"].map((option) => (
              <div key={option} className="flex items-center p-2 border border-gray-300 rounded-md shadow-sm">
                <input
                  id={option}
                  type="radio"
                  name="product-option"
                  value={option}
                  checked={designOption === option}
                  onChange={() => setDesignOption(option)}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor={option} className="ml-2 text-gray-900">
                  {option}
                </label>
              </div>
            ))}
          </fieldset>

          <button
            onClick={handleSubmit}
            className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
          >
            Генерирај
          </button>

          {showPreviews && (
            <div className="mt-8 grid grid-cols-2 gap-4">
              {/* Preview 1 */}
              <div className="p-4 border shadow-md rounded-[20px] bg-gray-100">
                <h3 className="font-bold">Preview 1</h3>
                <img
                  src="https://via.placeholder.com/150"
                  alt="Preview 1"
                  onClick={() => handleImageClick("https://via.placeholder.com/150")}
                  className="cursor-pointer"
                />
                <button
                  onClick={() => handleAddToCart(1)}
                  className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
                >
                  Додај во кошничка
                </button>
              </div>

              {/* Preview 2 */}
              <div className="p-4 border shadow-md rounded-[20px] bg-gray-100">
                <h3 className="font-bold">Preview 2</h3>
                <img
                  src="https://via.placeholder.com/150"
                  alt="Preview 2"
                  onClick={() => handleImageClick("https://via.placeholder.com/150")}
                  className="cursor-pointer"
                />
                <button
                  onClick={() => handleAddToCart(2)}
                  className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
                >
                  Додај во кошничка
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal for image preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleCloseModal}
        >
          <div className="relative bg-white p-4 rounded-lg max-w-3xl">
            <span
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-xl font-bold cursor-pointer text-red-500"
            >
              ×
            </span>
            <img src={selectedImage} alt="Full-size preview" className="max-w-full h-auto" />
          </div>
        </div>
      )}
    </div>
  );
}

export default MakeAProduct;
