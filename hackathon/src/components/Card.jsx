function Card({movie}) {
    return (
        <div className="newest-movie-card relative mb-4">
            <img className="w-full h-auto rounded-[20px]" src={movie.url} alt={movie.title}/>

            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-100 p-4 rounded-b-[20px]">
                <div className="flex justify-between items-center">
                    <h3 className="text-white text-lg font-semibold">{movie.title}</h3>

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
            </div>
        </div>
    )
}

export default Card