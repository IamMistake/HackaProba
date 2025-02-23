import './App.css'
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import WebShop from './components/WebShop.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BarPage from './pages/BarPage.jsx'

function App() {
  return (
  <Router>
      <div className="App">
        <NavBar/>
        <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/WebShop" element={<WebShop />}> </Route>
        <Route path="/BarPage" element={<BarPage />}> </Route>
        </Routes>
      </div>  </Router>
  );
}

export default App
