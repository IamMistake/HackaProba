import {Link} from "react-router-dom";

function ImamIdeja() {
    const handleFormSubmit = (formData) => {
        console.log("Event Data:", formData);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">Welcome to Event Manager</h1>

            {/* Button to go to the Event Form page */}
            <Link to="/create-event">
                <button
                    className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition">
                    Креирај нов настан
                </button>
            </Link>
            <Link to="/create-startup">
                <button
                    className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition">
                    Креирај нов Старт-апп
                </button>
            </Link>
        </div>
    )
}

export default ImamIdeja