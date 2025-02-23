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
          drinkName: "Не се плаши1",
          ingredients: ["сок", "лимон"],
          image:
            "https://www.liquor.com/thmb/sUKZSwJj7slc5l-LDyK8eajT0LY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/very-sexy-martini-720x720-primary-b1212ebf73f54f898a56f7f0b60c0a34.jpg",
        },
      ])

      useEffect(() => {
        fetch("http://localhost:8000/api/aibartender/drinks")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setMockDrinks(data)
            })
            .catch(error => console.error("Error fetching bot response:", error));
    }, []);

  return (
    <div className="space-y-4">
      {mockDrinks.map((drink) => (
        <div
          key={drink.drinkName}
          className="flex items-center bg-white rounded-lg shadow-md p-4 shadow-xl shadow-yellow-950"
        >
          {/* Drink Image */}
          <img
            src="data:image/png;base64,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"
            alt={drink.drinkName}
            className="w-12 h-12 object-cover mr-4"
          />
          {/* Drink Details */}
          <div>
            <h3 className="text-sm font-semibold">{drink.drinkName}</h3>
            <ul className="text-xs text-gray-600">
              {drink.ingredients.map((ingredient, index) => (
                <li key={index}>• {ingredient.name}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SidebarDrinks;
