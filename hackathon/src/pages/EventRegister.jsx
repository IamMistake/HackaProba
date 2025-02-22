import {useState, useEffect} from "react";

export default function EventRegister({onSubmit}) {
    const [formData, setFormData] = useState({
        eventName: "",
        type: "weekly",
        mentor: "null",
        description: "",
        date: "",
    });

    const [users, setUsers] = useState([
        {
            id: 1,
            name: "nikola",
            skills: ["1", "2"]
        },
        {
            id: 2,
            name: "viktor",
            skills: ["2", "3"]
        },
        {
            id: 3,
            name: "goch",
            skills: ["5", "4"]
        }
    ])

    useEffect(() => {
        fetch("http://localhost:8000/imamideja/api/users/")
            .then(response => response.json())
            .then(data => {
                setUsers(data)
            })
            .catch(error => console.error("Error fetching bot response:", error));
    }, []);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-xl p-6 w-full max-w-lg mx-auto mt-5 shadow-xl shadow-orange-950"
        >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Креирај настан</h2>

            {/* Event Name */}
            <label className="block mb-2 text-gray-700">Име на настанот</label>
            <input
                type="text"
                name="eventName"
                value={formData.eventName}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg mb-4"
                placeholder="Напиши име"
                required
            />

            {/* Type */}
            <label className="block mb-2 text-gray-700">Тип на настан</label>
            <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg mb-4"
            >
                <option value="Неделен">Неделен</option>
                <option value="Регуларен">Регуларен</option>
            </select>

            {/* Mentor */}
            <label className="block mb-2 text-gray-700">Ментор</label>
            <select
                name="mentor"
                value={formData.mentor}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg mb-4"
            >
                <option value="null">Никој</option>
                {users.map((user) => (
                    <option key={user.id} value={user.name}>
                        {user.name}
                    </option>
                ))}
            </select>

            {/* Description */}
            <label className="block mb-2 text-gray-700">Опис</label>
            <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg mb-4"
                placeholder="Внеси опис"
                rows="3"
            />

            {/* Date */}
            <label className="block mb-2 text-gray-700">Датум</label>
            <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg mb-4"
                required
            />

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-orange-500 text-white p-2 rounded-lg shadow-md hover:bg-orange-600 transition"
            >
                Креирај настан
            </button>
        </form>
    );
}
