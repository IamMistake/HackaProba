import EventCard from "./EventCard.jsx";
import {useState, useEffect} from "react";
import CoctailCard from "./CoctailCard.jsx";

function EventSection() {
    const [events, setEvents] = useState([
        {
            id: 4,
            title: "Dark",
            desc: "Dark e nestoo",
            url: "https://images.unsplash.com/photo-1595495529106-adb18dfe16a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            length: "2h 30mins"
        },
        {
            id: 3,
            title: "The 100",
            desc: "The 100 e survival film",
            url: "https://ntvb.tmsimg.com/assets/p18078200_b_h8_ae.jpg?w=1280&h=720",
            length: "4h"
        },
        {
            id: 1,
            title: "Vikings",
            desc: "Vikinzi imaat jaki zeni",
            url: "https://plus.unsplash.com/premium_photo-1698238183673-66642d292c03?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            length: "3h"
        },
        {
            id: 2,
            title: "La casa de papel",
            desc: "nestoo pojce mnogu lele auf boom u get 5 booms",
            url: "https://images.unsplash.com/photo-1622126812734-35a1d6c46f22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            length: "3 hours and 20 mins"
        },
        {
            id: 5,
            title: "Spider-Man: Across the Spider-Verse",
            desc: "Spider-Man: Across the Spider-Verse is a 2023 American animated superhero film featuring the Marvel Comics character Miles Morales / Spider-Man, produced by Columbia Pictures and Sony Pictures Animation in association with Marvel Entertainment",
            url: "https://wallpaperaccess.com/full/8652624.jpg",
            length: "3h 30mins"
        },
    ]);

    // useEffect(() => {
    //     fetch("http://localhost:8000/api/startup/")
    //         .then(response => response.json())
    //         .then(data => setEvents(data.message))
    //         .catch(error => console.error("Error fetching bot response:", error));
    // }, []);

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextMovie = () => {
        // console.log(currentIndex)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
        // console.log(currentIndex)
    };

    const prevMovie = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + movies.length) % movies.length);
    };

    return (
        <div className="trending-movies relative">
            <EventCard movie={events[currentIndex]}/>

            {/* Text Overlay */}
            <div className="sticky w-[60%] bottom-15 left-0 right-0 p-6 text-white z-10">
                <h2 className="text-2xl font-bold">{events[currentIndex].title}</h2>
                <p className="text-gray-200 mt-2">{events[currentIndex].desc}</p>
            </div>

            {/* Bottom Left Buttons (Play and Download) */}
            <div className="sticky bottom-0 left-0 p-6 flex gap-4 z-10">
                <button
                    className="flex items-center gap-2 bg-gray-500 bg-opacity-90 text-white px-4 py-2 rounded-full hover:bg-opacity-100 transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                    <span>Watch</span>
                </button>
                <button
                    className="flex items-center gap-2 bg-gray-500 bg-opacity-90 text-white px-4 py-2 rounded-full hover:bg-opacity-100 transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 12v7H5v-7H3v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2zM12 2L7 7h4v8h2V7h4l-5-5z"/>
                    </svg>
                    <span>Download</span>
                </button>

                <button onClick={prevMovie}
                        className="flex items-center justify-center w-10 h-10 bg-gray-500 bg-opacity-90 rounded-full hover:bg-opacity-100 transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
                    </svg>
                </button>
                <button onClick={nextMovie}
                        className="flex items-center justify-center w-10 h-10 bg-gray-500 bg-opacity-90 rounded-full hover:bg-opacity-100 transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default EventSection