import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function StartupCard({data}) {
    return (
    <Link to={`StartupIdea/${data.id}`} className="w-[20%] h-full bg-white/45 rounded-[20px] shadow-xl shadow-orange-950 flex flex-col relative overflow-hidden">
      {/* Image */}
      <div className="w-full h-[50%]">
        <img
          src={data.image}
          alt={data.startupName}
          className="w-full h-full object-cover rounded-t-[20px]"
        />
      </div>

      {/* Text Content */}
      <div className="w-[80%] h-[20%] pl-3 pr-6 flex flex-col justify-between rounded-b-[20px] mt-1">
        {/* Title */}
        <h3 className="text-md font-bold text-white">{data.startupName}</h3>
        {/* Description */}
        <p className="text-sm text-gray-200">{data.description}</p>

        {/* Button */}
        <div className="absolute right-2 bottom-2 justify-end">
          <button className="bg-gray-500 text-white p-2 rounded-full shadow-md hover:bg-gray-500 transition">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </Link>
  );
}

export default StartupCard