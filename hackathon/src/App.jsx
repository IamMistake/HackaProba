import './App.css'
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BarPage from './pages/BarPage.jsx'
import WebShop from './pages/WebShop.jsx';
import ImamIdeja from "./pages/ImamIdeja.jsx";
import EventRegister from "./pages/EventRegister.jsx";
import StartupRegister from "./pages/StartupRegister.jsx";
import MakeAProduct from './components/MakeAProduct.jsx';
import StartupIdeaPage from "./pages/StartupIdeaPage.jsx";
import EventInfoPage from "./pages/EventInfoPage.jsx";
import Podcast from "./pages/Podcast.jsx";

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Home />}> </Route>
                    <Route path="/BarPage" element={<BarPage/>}> </Route>
                    <Route path="/WebShop" element={<WebShop/>}> </Route>
                    <Route path="/Podcast" element={<Podcast/>}> </Route>
                    <Route path="/ImamIdeja" element={<ImamIdeja/>}> </Route>
                    <Route path="/create-event" element={<EventRegister onSubmit={(data) => console.log("Event Created:", data)} />} />
                    <Route path="/create-startup" element={<StartupRegister onSubmit={(data) => console.log("Event Created:", data)} />} />
                    <Route path="/MakeAProduct" element={<MakeAProduct />}> </Route>
                    <Route path="/StartupIdea/:id" element={<StartupIdeaPage />}> </Route>
                    <Route path="/EventInfo/:id" element={<EventInfoPage />}> </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App
