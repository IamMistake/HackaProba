import './App.css'
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import WebShop from './components/WebShop.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
  <Router>
      <div className="App">
        <NavBar/>
        <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/WebShop" element={<WebShop />}> </Route>
        </Routes>
      </div>  </Router>
  );
}

export default App
