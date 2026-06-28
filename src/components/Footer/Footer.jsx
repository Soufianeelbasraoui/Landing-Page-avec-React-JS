import {FiTwitter, FiLinkedin,FiGithub,FiInstagram,FiZap,} from "react-icons/fi";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-3">
            <h3 className="logo d-flex align-items-center">
              <span className="logo-icon">
                <FiZap />
              </span>
              Flow<span className="text-primary">Sync</span>
            </h3>
            <p className="text-secondary mt-2">
              La plateforme de gestion de projets pour équipes agiles modernes.
              Synchronisez, livrez, itérez.
            </p>
            <div className="social-icons mt-2">
              <a href="#"><FiTwitter /></a>
              <a href="#"><FiLinkedin /></a>
              <a href="#"><FiGithub /></a>
              <a href="#"><FiInstagram /></a>
            </div>
          </div>
          <div className="col-lg-3">
            <h5>Produit</h5>
            <ul className="footer-links">
              <li><a href="#">Fonctionnalités</a></li>
              <li><a href="#">Tarifs</a></li>
              <li><a href="#">Changelog</a></li>
              <li><a href="#">Roadmap</a></li>
              <li><a href="#">Statut</a></li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h5>Entreprise</h5>
            <ul className="footer-links">
              <li><a href="#">À propos</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Carrières</a></li>
              <li><a href="#">Presse</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h5>Ressources</h5>
            <ul className="footer-links">
              <li><a href="#">Documentation</a></li>
              <li><a href="#">API Reference</a></li>
              <li><a href="#">Guides</a></li>
              <li><a href="#">Communauté</a></li>
              <li><a href="#">Templates</a></li>
            </ul>
          </div>
        </div>
        <hr className="my-3" />
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <p className="text-secondary mb-0"> © 2026 FlowSync SAS. Tous droits réservés.</p>
          <div className="footer-bottom-links">
            <a href="#">Confidentialité</a>
            <a href="#">CGU</a>
            <a href="#">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;