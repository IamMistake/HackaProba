import {Link} from "react-router-dom";

import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

export default function ImamIdeja() {
    const [events, setEvents] = useState([]);
    const [weeklyEvent, setWeeklyEvent] = useState({
        "id": 3,
        "eventName": "Pulse-Eco предавање",
        "type": "regular",
        "mentor": "Дејан Спасов",
        "description": "Пулс Еко претставува иновативен систем за следење...",
        "date": "2025-02-27",
        "image": "https://media.licdn.com/dms/image/v2/C5612AQGqxckJOHf7lQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1520973012383?e=2147483647&v=beta&t=WD04HRlKV74S3x5mlnxopog6cD_nJ1rv_"
    });
    const [startups, setStartups] = useState([]);

    const handleFormSubmit = (formData) => {
        console.log("Event Data:", formData);
    };
    const navigate = useNavigate();

    useEffect(() => {
        const weeklyEventData = events.find(event => event.type === "weekly");

        if (weeklyEventData) {
            setWeeklyEvent(weeklyEventData); // Set the state with the first weekly event
        }
    }, [events]);

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
        <>
            <div onClick={() => navigate(`/EventInfo/${weeklyEvent.id}`)}
                className="w-4/5 ml-[10%] mt-4 mb-8 rounded-lg bg-white text-black p-6 shadow-xl shadow-orange-950 flex flex-col items-center space-y-4">
                <img
                    className="w-full h-[200px] object-cover rounded-lg shadow-md"
                    src={weeklyEvent.image}
                    alt="Event"
                />
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-orange-800">Неделна Дискусија Тема: {weeklyEvent.eventName}</h3>
                    {weeklyEvent.mentor && (
                        <p className="text-lg text-gray-700 font-medium">👤 Mentor: {weeklyEvent.mentor}</p>
                    )}
                    <p className="text-md text-gray-600 mt-2">{weeklyEvent.description}</p>
                    <p className="text-md font-semibold text-orange-700 mt-3">📅 Date: {weeklyEvent.date}</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 p-4">
                <div className="border-r border-gray-300 pr-4">
                    <h2 className="text-xl text-white font-bold mb-4">Настани</h2>
                    <Link to="/create-event">
                        <button
                            className="mb-3 bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition">
                            Креирај нов настан
                        </button>
                    </Link>
                    {events.map(event => (
                        <div onClick={() => navigate(`/EventInfo/${event.id}`)} key={event.id}
                             className=" border p-4 mb-7 bg-white/70 rounded-lg shadow-md shadow-orange-950 hover:shadow-lg cursor-pointer">
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
                    <h2 className="text-xl text-white font-bold mb-4">Старт-апп</h2>
                    <Link to="/create-startup">
                        <button
                            className="mb-3 bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition">
                            Креирај нов Старт-апп
                        </button>
                    </Link>
                    {startups.map(startup => (
                        <div onClick={() => navigate(`/StartupIdea/${startup.id}`)} key={startup.id}
                             className="border p-4 mb-7 bg-white/70 rounded-lg shadow-md shadow-orange-950 hover:shadow-lg cursor-pointer">
                            <img src={startup.image} alt={startup.startupName}
                                 className="w-full h-32 object-cover rounded-md mb-2"/>
                            <h3 className="text-lg font-semibold">{startup.startupName}</h3>
                            <p className="text-sm text-gray-500">Прв состанок: {startup.firstMeet}</p>
                            <p className="text-sm">{startup.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}