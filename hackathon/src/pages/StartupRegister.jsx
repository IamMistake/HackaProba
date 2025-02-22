import { useState } from "react";

export default function StartupRegister({ onSubmit }) {
  const [formData, setFormData] = useState({
    startupName: "",
    description: "",
    firstMeet: "",
    creator: 1, // Default creator ID (can be dynamic)
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-xl p-6 w-full max-w-lg mx-auto mt-18 shadow-xl shadow-orange-950"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Креирај Старт-апп идеа</h2>

      {/* Startup Name */}
      <label className="block mb-2 text-gray-700">Име на Старт-апп идеа</label>
      <input
        type="text"
        name="startupName"
        value={formData.startupName}
        onChange={handleChange}
        className="w-full p-2 border rounded-lg mb-4"
        placeholder="Внеси име"
        required
      />

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

      {/* First Meeting Date */}
      <label className="block mb-2 text-gray-700">Прв митинг датум</label>
      <input
        type="date"
        name="firstMeet"
        value={formData.firstMeet}
        onChange={handleChange}
        className="w-full p-2 border rounded-lg mb-4"
        required
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-orange-500 text-white p-2 rounded-lg shadow-md hover:bg-orange-600 transition"
      >
        Креирај Старт-апп идеа
      </button>
    </form>
  );
}
