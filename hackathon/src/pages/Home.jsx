import NewestMovies from "../components/NewestMovies.jsx";
import FavoriteMovies from "../components/FavoriteMovies.jsx";
import TrendingMovie from "../components/TrendingMovie.jsx";

function Home() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 m-4 mt-1 h-screen sm:grid-rows-[51vh_35vh]">
            <div className="col-span-1 bg-gray-500 p-4 text-white
            overflow-y-auto hide-scrollbar rounded-[20px]">
                <NewestMovies/>
            </div>
            <div className="col-span-3 bg-gray-500 text-white h-[100%] rounded-[20px] overflow-hidden">
                <TrendingMovie/>
            </div>
            <div className="col-span-1 bg-gray-500 p-4 text-white
            overflow-y-auto hide-scrollbar rounded-[20px]">
                <FavoriteMovies/>
            </div>
            <div className="col-span-3 bg-gray-500 text-white rounded-[20px]">
                <div className="p-10">COULD NOT CARE LESS</div>
            </div>
        </div>
    )
}

export default Home