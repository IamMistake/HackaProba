import EshopCard from "./EshopCard.jsx";
import {useState, useEffect} from "react";

function Eshop() {
    const [shopComponents, setShopComponents] = useState([
    {
        "id": 1,
        "productName": "Classic White Mug",
        "type": "Mug",
        "size": "350ml",
        "price": "9.99",
        "color": "White",
        "imageUrl": "https://i.ibb.co/4g9THftJ/Screenshot-3.jpg"
    },
    {
        "id": 2,
        "productName": "Black Coffee Mug",
        "type": "Mug",
        "size": "400ml",
        "price": "11.49",
        "color": "Black",
        "imageUrl": "https://i.ibb.co/FLG5nfnp/Screenshot-2.jpg"
    },
    {
        "id": 3,
        "productName": "Travel Mug",
        "type": "Mug",
        "size": "500ml",
        "price": "14.99",
        "color": "Blue",
        "imageUrl": "https://i.ibb.co/tk2wbxp/Screenshot-1.jpg"
    },
    {
        "id": 4,
        "productName": "Casual T-Shirt",
        "type": "Shirt",
        "size": "L",
        "price": "19.99",
        "color": "Grey",
        "imageUrl": "https://i.ibb.co/LDGMG0sq/Screenshot-6.jpg"
    },
    {
        "id": 5,
        "productName": "Graphic Tee",
        "type": "Shirt",
        "size": "M",
        "price": "22.99",
        "color": "Black",
        "imageUrl": "https://i.ibb.co/s91dBfsV/Screenshot-5.jpg"
    },
    {
        "id": 6,
        "productName": "Sporty Polo",
        "type": "Shirt",
        "size": "XL",
        "price": "29.99",
        "color": "Blue",
        "imageUrl": "https://i.ibb.co/jk2hHgkG/Screenshot-4.jpg"
    }
]);

    useEffect(() => {
        fetch("http://localhost:8000/api/merch/aiproducts")
            .then(response => response.json())
            .then(data => setShopComponents(data))
            .catch(error => console.error("Error fetching bot response:", error));
    }, []);

    return (
        <div className="fav-movies">
            <h3 className="mb-4 heading-text font-bold">❤️ Е-продавница </h3>
            {shopComponents.map(movie => <EshopCard movie={movie} key={movie.id}/>)}
        </div>
    )
}

export default Eshop