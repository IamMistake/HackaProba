import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MakeAProduct() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [designOption, setDesignOption] = useState("AI");
  const [showPreviews, setShowPreviews] = useState(false);

  const handleSubmit = () => {
    setShowPreviews(true);
  };

  return (
    <div className="px-8 py-4">
      <div className="flex justify-center items-start mt-10">
        <div className="mr-6">
          <button
            onClick={() => navigate("/WebShop")}
            className="mb-auto bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700"
          >
            Go back
          </button>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-xl shadow-green-700 w-full max-w-md">
          <h2 className="text-xl font-bold text-center mb-4">Create a Product</h2>

          <label className="block text-gray-700 font-medium">Enter something:</label>
          <input
            type="text"
            className="w-full p-2 mt-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setInput(e.target.value)}
          />

          <p className="text-gray-600 text-sm mb-4">
            How it works: <span className="font-semibold">BLAH BLAH BLAH</span>
          </p>

          <fieldset className="space-y-3">
            <legend className="text-gray-700 font-medium">Choose an option:</legend>

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
            Submit
          </button>

          {showPreviews && (
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 border shadow-md rounded-[20px] bg-gray-100">
                <h3 className="font-bold">Preview 1</h3>
                <img src="https://via.placeholder.com/150" alt="Preview 1" />
              </div>
              <div className="p-4 border shadow-md rounded-[20px] bg-gray-100">
                <h3 className="font-bold">Preview 2</h3>
                <img src="https://via.placeholder.com/150" alt="Preview 2" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MakeAProduct;
