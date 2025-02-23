// Question.jsx
import React from "react";

const Question = ({ category, options, value, onChange }) => {

  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">{category}</h3>
      <div className="grid grid-cols-4 gap-2">
        {options.map((option, index) => (
          <label
            key={option}
            className="flex items-center p-3 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer"
          >
            <input
              type="checkbox"
              value={option}
              checked={value.includes(option)}
              onChange={() => onChange(category, option)}
              className="mr-2"
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Question;
