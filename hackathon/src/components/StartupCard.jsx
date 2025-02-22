import { FaArrowRight } from "react-icons/fa";

function StartupCard({data}) {
    return (
    <div className="w-[20%] h-full bg-white rounded-[20px] shadow-xl shadow-orange-950 flex flex-col relative overflow-hidden">
      {/* Image */}
      <div className="w-full h-[60%]">
        <img
          src={data.image}
          alt={data.startupName}
          className="w-full h-full object-cover rounded-t-[20px]"
        />
      </div>

      {/* Text Content */}
      <div className="w-[80%] h-[20%] pl-3 pr-6 flex flex-col justify-between rounded-b-[20px]">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900">{data.startupName}</h3>
        {/* Description */}
        <p className="text-sm text-gray-500">{data.description}</p>

        {/* Button */}
        <div className="absolute right-2 bottom-2 justify-end">
          <button className="bg-gray-500 text-white p-2 rounded-full shadow-md hover:bg-gray-500 transition">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default StartupCard