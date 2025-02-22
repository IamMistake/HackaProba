import './App.css'
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import WebShop from './pages/WebShop.jsx';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ImamIdeja from "./pages/ImamIdeja.jsx";
import EventRegister from "./pages/EventRegister.jsx";
import StartupRegister from "./pages/StartupRegister.jsx";
import MakeAProduct from './components/MakeAProduct.jsx';

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Home/>}> </Route>
                    <Route path="/WebShop" element={<WebShop/>}> </Route>
                    <Route path="/ImamIdeja" element={<ImamIdeja/>}> </Route>
                    <Route path="/create-event" element={<EventRegister onSubmit={(data) => console.log("Event Created:", data)} />} />
                    <Route path="/create-startup" element={<StartupRegister onSubmit={(data) => console.log("Event Created:", data)} />} />
                    <Route path="/MakeAProduct" element={<MakeAProduct />}> </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App
