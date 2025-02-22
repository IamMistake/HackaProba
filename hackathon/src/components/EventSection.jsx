import EventCard from "./EventCard.jsx";
import {useState, useEffect} from "react";

function EventSection() {
    const [events, setEvents] = useState([{
        "id": 1,
        "eventName": "Event1",
        "type": "regular",
        "mentor": "Andrea Kulakov",
        "description": "predavanje za mrza",
        "date": "2025-02-25"
    }]);

    useEffect(() => {
        fetch("http://localhost:8000/imamideja/api/events/")
            .then(response => response.json())
            .then(data => {
                setEvents(data)
            })
            .catch(error => console.error("Error fetching bot response:", error));
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextMovie = () => {
        // console.log(currentIndex)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
        // console.log(currentIndex)
    };

    const prevMovie = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
    };

    return (
        <div className="trending-movies relative">
            <EventCard eventce={events[currentIndex]}/>

            {/* Text Overlay */}
            <div className="sticky w-[60%] bottom-15 left-0 right-0 p-6 text-white z-10">
                <h2 className="text-2xl font-bold">{events[currentIndex].eventName}</h2>
                {events[currentIndex].mentor !== null && events[currentIndex].mentor !== "" && (
                    <p className="text-gray-200 mt-2">Ментор: {events[currentIndex].mentor}</p>
                )}
                <p className="text-gray-200 mt-2">{events[currentIndex].description}</p>
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