function EventCard({movie}) {
    return (
        <div className="relative h-[100%] overflow-hidden rounded-[20px]">
            <div className="w-full h-full relative">
                {/* Full-Size Image */}
                <img className="w-full h-full object-cover" src={movie.url} alt={movie.title}/>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            </div>
        </div>

    )
}

export default EventCard