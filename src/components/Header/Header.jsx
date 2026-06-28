import { FaBolt, FaMoon } from "react-icons/fa";
import "./Header.css";
import { useState } from "react";
import { FaSun } from "react-icons/fa6";
function Header() {

  const[darkMod,setDarkMod]=useState(false);
  const toggleTheme=()=>{
    setDarkMod(!darkMod);
    document.body.classList.toggle("dark-theme");
  }
  return (
    <nav className="navbar navbar-expand-lg custom-navbar " id="Header">
      <div className="container">

        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <div className="logo-icon"> <FaBolt /></div>
          <span className="logo-text">
            Flow<span className="text-primary-custom">Sync</span>
          </span>
        </a>

        <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">

          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-4">
            <li className="nav-item"> <a className="nav-link" href="#">Accueil</a></li>
            <li className="nav-item"> <a className="nav-link" href="#Features">Fonctionnalités</a> </li>
            <li className="nav-item"> <a className="nav-link" href="#About">À propos</a> </li>
            <li className="nav-item"><a className="nav-link" href="#Testimonials">Témoignages</a> </li>
            <li className="nav-item"><a className="nav-link" href="#Contact">Contact</a></li>
          </ul>

          <div className="d-flex align-items-center gap-3">
            <button className="theme-btn" onClick={toggleTheme}>{darkMod ? <FaSun/>:<FaMoon/>} </button>
            <a href="#Contact" className="btn  btn-primary start-btn">   Commencer</a>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Header;