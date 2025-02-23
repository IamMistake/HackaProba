import CoctailCard from "./CoctailCard.jsx";
import {useState, useEffect} from "react";

function CocktailSection() {
    const [coctails, setCoctails] = useState([
    {
        "drinkName": "Fiery Sunrise",
        "type": "Cocktail",
        "ingredients": [
            {
                "name": "Tequila",
                "quantity": 50.0,
                "metric": "ml",
                "drink": 1
            },
            {
                "name": "Orange Juice",
                "quantity": 100.0,
                "metric": "ml",
                "drink": 1
            },
            {
                "name": "Lime Juice",
                "quantity": 15.0,
                "metric": "ml",
                "drink": 1
            },
            {
                "name": "Chili Powder",
                "quantity": 1.0,
                "metric": "pinch",
                "drink": 1
            }
        ],
        "instructions": "In a shaker, combine tequila, orange juice, lime juice, and a pinch of chili powder. Fill with ice and shake vigorously. Strain into a glass filled with ice. Garnish with a lime wheel.",
        "price": 12.0
    },
    {
        "drinkName": "Spicy Mint Mojito",
        "type": "Cocktail",
        "ingredients": [
            {
                "name": "Rum",
                "quantity": 50.0,
                "metric": "ml",
                "drink": 2
            },
            {
                "name": "Lime Juice",
                "quantity": 25.0,
                "metric": "ml",
                "drink": 2
            },
            {
                "name": "Orange Juice",
                "quantity": 30.0,
                "metric": "ml",
                "drink": 2
            },
            {
                "name": "Mint Leaves",
                "quantity": 10.0,
                "metric": "leaves",
                "drink": 2
            },
            {
                "name": "Chili Powder",
                "quantity": 1.0,
                "metric": "pinch",
                "drink": 2
            },
            {
                "name": "Soda Water",
                "quantity": 100.0,
                "metric": "ml",
                "drink": 2
            }
        ],
        "instructions": "Muddle mint leaves in a glass with lime juice and chili powder. Add rum and orange juice. Fill the glass with ice and top it off with soda water. Stir gently and garnish with a mint sprig.",
        "price": 11.0
    }
])

    useEffect(() => {
        fetch("http://localhost:8000/api/aibartender/drinks")
            .then(response => response.json())
            .then(data => setCoctails(data))
            .catch(error => console.error("Error fetching bot response:", error));
    }, []);

    return (
        <div className="newest-movies ">
            <h3 className="mb-3 heading-text font-bold">🔥 Последно порачани коктели </h3>
            {coctails.map(cocktail => <CoctailCard cocktail={cocktail} key={cocktail.drinkName}/>)}
        </div>
    )
}

export default CocktailSection