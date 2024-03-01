import "./App.css";
import ProjectsPage from "./components/pasta/ProjectsPage";
import ProjectPages from "./components/pizza/ProjectsPage";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./home/HomePage";
import MenuPage from "./home/MenuPage";
import AboutMePage from "./home/AboutMePage";
import ContactPage from "./home/ContactPage";


function App() {
  return (
    <BrowserRouter>
      <header className="sticky">
        <span className="logo">
        </span>

        <span className="logo">
        <img src="logo.png" alt='logo' width="49" height="99"/>
        </span>

        
        <NavLink to="/" className="button rounded nav-link">
          <span className="icon-home"></span>
          Home
        </NavLink>
        <NavLink to="/pizza" className="button rounded nav-link">
         Pasta
        </NavLink>
        <NavLink to="/pasta" className="button rounded nav-link">
         Pizza
        </NavLink>
        <NavLink to="/AboutMe" className="button rounded nav-link">
          About
        </NavLink>
        <NavLink to="/Menu" className="button rounded nav-link">
          Menu
        </NavLink>
        <NavLink to="/Contact" className="button rounded nav-link">
          Contact
        </NavLink>
       
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pizza" element={<ProjectsPage />} />
          <Route path="/pasta" element={<ProjectPages />} />
          <Route path="/AboutMe" element={<AboutMePage />} />
          <Route path="/Menu" element={<MenuPage />} />
          <Route path="/Contact" element={<ContactPage />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;

