import { useNavigate } from 'react-router-dom';

function EshopCard({ movie }) {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate('/WebShop');
    };

    return (
        <div 
            className="newest-movie-card mb-4 flex items-center gap-4 p-4 rounded-[10px] bg-white/30"
            onClick={handleCardClick} // Add click handler here
        >
            <img
                className="w-13 h-13 object-cover rounded-lg bg-white"
                src={movie.imageUrl}
                alt={movie.punchLine}
            />

            <div className="flex-1">
                <h3 className="text-white text-sm font-semibold">{movie.punchLine}</h3>
                {/*<p className="text-gray-400 text-sm">{movie.price}</p>*/}
            </div>
        </div>
    );
}

export default EshopCard;
