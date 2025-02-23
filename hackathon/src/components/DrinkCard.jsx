import React from 'react';

const DrinkCard = ({ drink, onClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center cursor-pointer" onClick={onClick}>
      <div className="text-lg font-semibold text-center mb-2 mt-4">{drink.drinkName}</div>
      <img
        src={drink.image || "/default-drink.png"}
        alt={drink.drinkName}
        className="w-24 h-24 object-cover mb-2 mt-2"
      />
      <div className="text-sm text-gray-600">
        {drink.ingredients.slice(0, 2).map((ingredient, index) => (
          <div key={index}>• {ingredient.name}</div>
        ))}
      </div>
    </div>
  );
};

export default DrinkCard;
