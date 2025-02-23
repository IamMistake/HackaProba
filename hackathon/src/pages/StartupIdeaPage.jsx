import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const StartupIdeaPage = () => {
    const { id } = useParams();
    console.log("IDDDDDDDDDDDDDDDD ", id)
    const [startup, setStartup] = useState({
    "id": 3,
    "startupName": "Помошник за commits",
    "creator": 1,
    "description": "Сакам да направам алатка која пресметува веројатност за точно време за комитнување на гитхуб.",
    "participants": [
        1,
        2
    ],
    "firstMeet": "2025-04-10",
    "image": "https://d194ip2226q57d.cloudfront.net/images/Get-More-Involved-In-Organizations_CO-Shutterst.original.jpg"
});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8000/imamideja/api/startup-ideas/${id}/`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch startup idea");
                }
                return response.json();
            })
            .then((data) => {
                setStartup(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="w-full h-64 bg-gray-200 animate-pulse" />;
    if (error) return <p className="text-red-500">Error: {error}</p>;

    return (
        <div className="max-w-2xl mx-auto p-6">
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-bold">{startup.startupName}</h2>
                <img src={startup.image} alt={startup.startupName} className="w-full h-64 object-cover rounded-xl mb-4" />
                <p className="text-gray-600 mb-4">{startup.description}</p>
                <p className="text-gray-800">First Meeting: {new Date(startup.firstMeet).toLocaleDateString()}</p>
                <p className="text-gray-800 mt-2">Participants: {startup.participants.join(", ")}</p>
            </div>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded" onClick={() => window.history.back()}>Go Back</button>
        </div>
    );
};

export default StartupIdeaPage;
