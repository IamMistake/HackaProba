import CocktailSection from "../components/CocktailSection.jsx";
import Eshop from "../components/Eshop.jsx";
import EventSection from "../components/EventSection.jsx";
import StartupsCards from "../components/StartupsCards.jsx";

function Home() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 m-4 mt-1 h-[80%] sm:grid-rows-[51vh_35vh] mt-2">
            <div className="col-span-1 bg-white-900 p-4 text-white
    overflow-y-auto hide-scrollbar rounded-[20px] shadow-xl shadow-yellow-950 bg-black/15">
                <CocktailSection/>
            </div>
            <div className="col-span-3 bg-white-500 text-white h-[100%] bg-black/15
    rounded-[20px] overflow-hidden shadow-xl shadow-red-950">
                <EventSection/>
            </div>
            <div className="col-span-1 bg-white-500 p-4 text-white
    overflow-y-auto hide-scrollbar rounded-[20px] shadow-xl shadow-emerald-950 bg-black/15">
                <Eshop/>
            </div>
            <div className="col-span-3  text-white rounded-[20px]">
                <StartupsCards/>
            </div>
        </div>

    )
}

export default Home