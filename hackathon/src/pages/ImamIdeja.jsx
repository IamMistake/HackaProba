import {Link} from "react-router-dom";

import {useState, useEffect} from "react";

export default function ImamIdeja() {
    const [events, setEvents] = useState([]);
    const [startups, setStartups] = useState([]);

    const handleFormSubmit = (formData) => {
        console.log("Event Data:", formData);
    };

    useEffect(() => {
        fetch("http://localhost:8000/imamideja/api/events/")
            .then(response => response.json())
            .then(data => setEvents(data))
            .catch(error => console.error("Error fetching events:", error));

        fetch("http://localhost:8000/imamideja/api/startup-ideas/")
            .then(response => response.json())
            .then(data => setStartups(data))
            .catch(error => console.error("Error fetching startups:", error));
    }, []);

    return (
        <div className="grid grid-cols-2 gap-4 p-4">
            <div className="border-r border-gray-300 pr-4">
                <h2 className="text-xl font-bold mb-4">Настани</h2>
                <Link to="/create-event">
                    <button
                        className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition">
                        Креирај нов настан
                    </button>
                </Link>
                {events.map(event => (
                    <div key={event.id}
                         className="border p-4 mb-7 rounded-lg shadow-md shadow-orange-950 hover:shadow-lg cursor-pointer">
                        <img src={event.image} alt={event.eventName}
                             className="w-full h-32 object-cover rounded-md mb-2"/>
                        <h3 className="text-lg font-semibold">{event.eventName}</h3>
                        <p className="text-sm text-gray-600">Ментор - {event.mentor || "Нема ментор"}</p>
                        <p className="text-sm text-gray-500">{event.date}</p>
                        <p className="text-sm">{event.description}</p>
                    </div>
                ))}
            </div>

            <div className="pl-4">
                <h2 className="text-xl font-bold mb-4">Старт-апп</h2>
                <Link to="/create-startup">
                    <button
                        className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition">
                        Креирај нов Старт-апп
                    </button>
                </Link>
                {startups.map(startup => (
                    <div key={startup.id}
                         className="border p-4 mb-7 rounded-lg shadow-md shadow-orange-950 hover:shadow-lg cursor-pointer">
                        <img src={startup.image} alt={startup.startupName}
                             className="w-full h-32 object-cover rounded-md mb-2"/>
                        <h3 className="text-lg font-semibold">{startup.startupName}</h3>
                        <p className="text-sm text-gray-500">Прв состанок: {startup.firstMeet}</p>
                        <p className="text-sm">{startup.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}