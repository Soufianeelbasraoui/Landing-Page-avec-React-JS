import { FaBolt, FaMoon } from "react-icons/fa";
import "./Header.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">

        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <div className="logo-icon"> <FaBolt /></div>
          <span className="logo-text">
            Flow<span className="text-primary-custom">Sync</span>
          </span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">

          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-4">
            <li className="nav-item">
              <a className="nav-link" href="#">Accueil</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Fonctionnalités</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">À propos</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Témoignages</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Tarifs</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3">

            <button className="theme-btn">
              <FaMoon />
            </button>

            <button className="btn btn-primary start-btn">
              Commencer
            </button>

          </div>

        </div>
      </div>
    </nav>
  );
}

export default Header;