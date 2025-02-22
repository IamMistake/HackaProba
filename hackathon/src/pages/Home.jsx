import NewestMovies from "../components/NewestMovies.jsx";
import FavoriteMovies from "../components/FavoriteMovies.jsx";
import TrendingMovie from "../components/TrendingMovie.jsx";

function Home() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 m-4 mt-1 h-screen sm:grid-rows-[51vh_35vh]">
            <div className="col-span-1 bg-white-900 p-4 text-black
    overflow-y-auto hide-scrollbar rounded-[20px] shadow-xl shadow-yellow-950">
                <NewestMovies/>
            </div>
            <div className="col-span-3 bg-white-500 text-black h-[100%]
    rounded-[20px] overflow-hidden shadow-xl shadow-red-950">
                <TrendingMovie/>
            </div>
            <div className="col-span-1 bg-white-500 p-4 text-black
    overflow-y-auto hide-scrollbar rounded-[20px] shadow-xl shadow-emerald-950">
                <FavoriteMovies/>
            </div>
            <div className="col-span-3 bg-white-500 text-black rounded-[20px] shadow-xl shadow-orange-950 ">
                <div className="p-10">COULD NOT CARE LESS</div>
            </div>
        </div>

    )
}

export default Home