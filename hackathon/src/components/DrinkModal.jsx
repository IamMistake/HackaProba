import React from 'react';

const DrinkModal = ({ drink, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md relative">
        <h2 className="text-2xl font-bold mb-4">{drink.drinkName}</h2>
        <img
          src={drink.image}
          alt={drink.drinkName}
          className="w-full h-auto rounded-md mb-4"
        />

        <h3 className="text-xl font-semibold mb-2">Ingredients:</h3>
        <ul className="list-disc list-inside mb-4">
          {drink.ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient.name}: {ingredient.quantity}
              {ingredient.metric}
            </li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-2">Instructions:</h3>
        <p className="mb-4">{drink.instructions}</p>

        <h3 className="text-xl font-semibold mb-2">QR Code:</h3>
        {drink.qrCodeImage ? (
          <img
            src={drink.qrCodeImage}
            alt="QR Code"
            className="w-32 h-auto mx-auto"
          />
        ) : (
          <p className="text-gray-500">No QR code image available</p>
        )}

        <button
          onClick={onClose}
          className="mt-6 w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default DrinkModal;
