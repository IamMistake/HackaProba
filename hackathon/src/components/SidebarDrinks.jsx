import {useState, useEffect} from "react";
import React from "react";

const SidebarDrinks = () => {
    const [mockDrinks, setMockDrinks] = useState([
        {
          id: 1,
          drinkName: "Не се плаши",
          ingredients: ["сок", "лимон"],
          image:
            "https://www.liquor.com/thmb/sUKZSwJj7slc5l-LDyK8eajT0LY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/very-sexy-martini-720x720-primary-b1212ebf73f54f898a56f7f0b60c0a34.jpg",
        },
        {
          id: 2,
          drinkName: "Не Bytam",
          ingredients: ["сок", "лимон"],
          image:
            "https://www.liquor.com/thmb/sUKZSwJj7slc5l-LDyK8eajT0LY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/very-sexy-martini-720x720-primary-b1212ebf73f54f898a56f7f0b60c0a34.jpg",
        },
        {
          id: 3,
          drinkName: "Ав Ав Ав!",
          ingredients: ["сок", "лимон"],
          image:
            "https://www.liquor.com/thmb/sUKZSwJj7slc5l-LDyK8eajT0LY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/very-sexy-martini-720x720-primary-b1212ebf73f54f898a56f7f0b60c0a34.jpg",
        },
        {
          id: 4,
          drinkName: "Не се плаши",
          ingredients: ["сок", "лимон"],
          image:
            "https://www.liquor.com/thmb/sUKZSwJj7slc5l-LDyK8eajT0LY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/very-sexy-martini-720x720-primary-b1212ebf73f54f898a56f7f0b60c0a34.jpg",
        },
      ])

      useEffect(() => {
        fetch("http://localhost:8000/aibartender/drinks/")
            .then(response => response.json())
            .then(data => {
                setMockDrinks(data)
            })
            .catch(error => console.error("Error fetching bot response:", error));
    }, []);

  return (
    <div className="space-y-4">
      {mockDrinks.map((drink) => (
        <div
          key={drink.id}
          className="flex items-center bg-white rounded-lg shadow-md p-4 shadow-xl shadow-yellow-950"
        >
          {/* Drink Image */}
          <img
            src={drink.image}
            alt={drink.drinkName}
            className="w-12 h-12 object-cover mr-4"
          />
          {/* Drink Details */}
          <div>
            <h3 className="text-sm font-semibold">{drink.drinkName}</h3>
            <ul className="text-xs text-gray-600">
              {drink.ingredients.map((ingredient, index) => (
                <li key={index}>• {ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SidebarDrinks;
