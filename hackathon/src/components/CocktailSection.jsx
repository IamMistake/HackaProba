import CoctailCard from "./CoctailCard.jsx";
import {useState, useEffect} from "react";

function CocktailSection() {
    const [coctails, setCoctails] = useState([
        {id: 1, title: "Vikings", url: "https://plus.unsplash.com/premium_photo-1698238183673-66642d292c03?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        {id: 2, title: "La casa de papel", url: "https://images.unsplash.com/photo-1622126812734-35a1d6c46f22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        {id: 3, title: "The 100", url: "https://ntvb.tmsimg.com/assets/p18078200_b_h8_ae.jpg?w=1280&h=720"},
        {id: 4, title: "Dark", url: "https://images.unsplash.com/photo-1595495529106-adb18dfe16a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        {id: 5, title: "Spider-Man", url: "https://wallpaperaccess.com/full/8652624.jpg"}
    ])

    // useEffect(() => {
    //     fetch("http://localhost:8000/api/startup/")
    //         .then(response => response.json())
    //         .then(data => setCoctails(data.message))
    //         .catch(error => console.error("Error fetching bot response:", error));
    // }, []);

    return (
        <div className="newest-movies ">
            <h3 className="mb-3 heading-text font-bold">🔥 Newest Movies</h3>
            {coctails.map(movie => <CoctailCard movie={movie} key={movie.id}/>)}
        </div>
    )
}

export default CocktailSection