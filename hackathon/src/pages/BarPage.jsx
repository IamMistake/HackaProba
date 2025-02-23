import React, { useState } from "react";
import QuizForm from "../components/QuizForm.jsx";
import DrinkRecommendations from "../components/DrinkRecommendations.jsx";
import SidebarDrinks from "../components/SidebarDrinks.jsx";

const BarPage = () => {
  const [recommendedDrinks, setRecommendedDrinks] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Mock function to simulate getting cocktail suggestions based on quiz answers
  const getCocktailSuggestions = (quizAnswers) => {
    const suggestedCocktails = [
      {
        id: 1,
        drinkName: "Mojito",
        type: "Cocktail",
        ingredients: [
          { name: "White Rum", quantity: 50, metric: "ml" },
          { name: "Mint Leaves", quantity: 10, metric: "pcs" },
        ],
        price: 8,
        instructions: "Mix ingredients and serve.",
        image: "https://www.liquor.com/thmb/sUKZSwJj7slc5l-LDyK8eajT0LY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/very-sexy-martini-720x720-primary-b1212ebf73f54f898a56f7f0b60c0a34.jpg",
      },
      {
        id: 2,
        drinkName: "Cosmopolitan",
        type: "Cocktail",
        ingredients: [
          { name: "Vodka", quantity: 40, metric: "ml" },
          { name: "Cranberry Juice", quantity: 20, metric: "ml" },
        ],
        price: 9,
        instructions: "Mix ingredients and serve.",
        image: "https://www.liquor.com/thmb/sUKZSwJj7slc5l-LDyK8eajT0LY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/very-sexy-martini-720x720-primary-b1212ebf73f54f898a56f7f0b60c0a34.jpg",
      },
      {
        id: 3,
        drinkName: "Negroni",
        type: "Cocktail",
        ingredients: [
          { name: "Gin", quantity: 30, metric: "ml" },
          { name: "Campari", quantity: 30, metric: "ml" },
        ],
        price: 10,
        instructions: "Mix ingredients and serve.",
        image: "https://www.liquor.com/thmb/sUKZSwJj7slc5l-LDyK8eajT0LY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/very-sexy-martini-720x720-primary-b1212ebf73f54f898a56f7f0b60c0a34.jpg",
      },
      {
        id: 4,
        drinkName: "Old Fashioned",
        type: "Cocktail",
        ingredients: [
          { name: "Bourbon", quantity: 60, metric: "ml" },
          { name: "Sugar", quantity: 1, metric: "spoon" },
        ],
        price: 11,
        instructions: "Mix ingredients and serve.",
        image: "https://www.liquor.com/thmb/sUKZSwJj7slc5l-LDyK8eajT0LY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/very-sexy-martini-720x720-primary-b1212ebf73f54f898a56f7f0b60c0a34.jpg",
      },
      {
        id: 5,
        drinkName: "Margarita",
        type: "Cocktail",
        ingredients: [
          { name: "Tequila", quantity: 50, metric: "ml" },
          { name: "Lime Juice", quantity: 30, metric: "ml" },
        ],
        price: 9,
        instructions: "Mix ingredients and serve.",
        image: "https://www.liquor.com/thmb/sUKZSwJj7slc5l-LDyK8eajT0LY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/very-sexy-martini-720x720-primary-b1212ebf73f54f898a56f7f0b60c0a34.jpg",
      },
    ];

    return suggestedCocktails;
  };

  const handleQuizSubmit = (jsonAnswers) => {
    const answers = JSON.parse(jsonAnswers);
    const isEmpty =
      !answers.personality.length &&
      !answers.feelings.length &&
      !answers.taste &&
      !answers.alcohol.length &&
      !answers.juice &&
      !answers.misc.length;

    if (isEmpty) {
      setErrorMessage("Nothing selected. Please answer all the questions.");
      setRecommendedDrinks(null);
    } else {
      setErrorMessage(""); // Clear any previous error messages
      const suggestions = getCocktailSuggestions(answers);
      setRecommendedDrinks(suggestions);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-gray-100 p-4 rounded-lg shadow-md">
        <SidebarDrinks />
      </div>

      {/* Main Content Area */}
      <div className="w-full md:w-3/4 flex justify-center">
        {/* Quiz Form */}
        <div className="max-w-2xl">
          <QuizForm onSubmit={handleQuizSubmit} />

          {/* Error Message */}
          {errorMessage && (
            <div className="mt-4 text-red-500 text-center">{errorMessage}</div>
          )}

          {/* Drink Recommendations */}
          {recommendedDrinks && (
            <div className="mt-6">
              <DrinkRecommendations recommendedDrinks={recommendedDrinks} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BarPage;
