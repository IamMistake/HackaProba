function EshopCard({movie}) {
    return (
        <div className="newest-movie-card mb-4 flex items-center gap-4 p-4 bg-gray-600 rounded-[10px]">
            <img
                className="w-13 h-13 object-cover rounded-lg"
                src={movie.url}
                alt={movie.title}
            />

            <div className="flex-1">
                <h3 className="text-white text-lg font-semibold">{movie.title}</h3>
                <p className="text-gray-400 text-sm">{movie.length}</p>
            </div>

            <button
                className="flex items-center justify-center w-7 h-7 bg-gray-500 bg-opacity-90 rounded-full hover:bg-opacity-100 transition-all">
                <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M8 5v14l11-7z"/>
                </svg>
            </button>
        </div>
    )
}

export default EshopCard