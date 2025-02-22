import FavCardMovie from "./FavCardMovie.jsx";

function FavoriteMovies() {
    const newestMovie = [
        {id: 5, title: "Spider-Man", url: "https://wallpaperaccess.com/full/8652624.jpg", length: "3h 30mins"},
        {id: 4, title: "Dark", url: "https://images.unsplash.com/photo-1595495529106-adb18dfe16a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", length: "2h 30mins"},
        {id: 3, title: "The 100", url: "https://ntvb.tmsimg.com/assets/p18078200_b_h8_ae.jpg?w=1280&h=720", length: "4h"},
        {id: 1, title: "Vikings", url: "https://plus.unsplash.com/premium_photo-1698238183673-66642d292c03?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", length: "3h"},
        {id: 2, title: "La casa de papel", url: "https://images.unsplash.com/photo-1622126812734-35a1d6c46f22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", length: "3 hours and 20 mins"},
    ]

    return (
        <div className="fav-movies">
            <h3 className="mb-4 heading-text font-bold">❤️ Your Favorite Movies</h3>
            {newestMovie.map(movie => <FavCardMovie movie={movie} key={movie.id}/>)}
        </div>
    )
}

export default FavoriteMovies