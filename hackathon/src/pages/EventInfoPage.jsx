import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EventInfoPage = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8000/imamideja/api/events/${id}/`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch event");
                }
                return response.json();
            })
            .then((data) => {
                setEvent(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="w-full h-64 bg-gray-200 animate-pulse" />;
    if (error) return <p className="text-red-500">Error: {error}</p>;

    return (
        <div className="max-w-2xl mx-auto p-6">
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-bold">{event.eventName}</h2>
                <img src={event.image} alt={event.eventName} className="w-full h-64 object-cover rounded-xl mb-4" />
                <p className="text-gray-600 mb-4">{event.description}</p>
                <p className="text-gray-800">Date: {new Date(event.date).toLocaleDateString()}</p>
                <p className="text-gray-800 mt-2">Mentor: {event.mentor}</p>
                <p className="text-gray-800 mt-2">Type: {event.type}</p>
            </div>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded" onClick={() => window.history.back()}>Go Back</button>
        </div>
    );
};

export default EventInfoPage;
