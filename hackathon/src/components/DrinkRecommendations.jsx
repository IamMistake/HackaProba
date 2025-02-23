import React, { useState } from 'react';
import DrinkCard from '../components/DrinkCard.jsx';
import DrinkModal from '../components/DrinkModal.jsx';

const DrinkRecommendations = ({ recommendedDrinks }) => {
  const [selectedDrink, setSelectedDrink] = useState(null);

  const handleDrinkClick = (drink) => {
    setSelectedDrink(drink);
  };

  const closeModal = () => {
    setSelectedDrink(null);
  };

  if (!recommendedDrinks || recommendedDrinks.length === 0) {
    return <p>No drinks were selected!</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {recommendedDrinks.map((drink, index) => (
        <DrinkCard 
          key={index} 
          drink={drink} 
          onClick={() => handleDrinkClick(drink)}
        />
      ))}
      {selectedDrink && (
        <DrinkModal drink={selectedDrink} onClose={closeModal} />
      )}
    </div>
  );
};

export default DrinkRecommendations;
