import { FaArrowRight,FaPlay } from "react-icons/fa";
import "./Hero.css"
function Hero(){
    return(
       <section className="hero py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="hero-title">
              Synchronisez <br />
              <span>votre équipe.</span>
              <br />
              Livrez plus vite.
              </h1>
              <p className="hero-text">FlowSync unifie vos sprints, vos tâches et vos communications en une seule plateforme agile. Moins de friction, plus de livraisons.</p>

             <div className="d-flex gap-3 flex-wrap mt-4">
                <button className=" hero-btn">
                Commencer gratuitement
                 <FaArrowRight className="ms-2"/>
                </button>
                <button className=" demo-btn">
                  <FaPlay className="FaPlay"/>
                  <span>Voir la démo</span>
                </button>
             </div>
             <div  className="d-flex gap-5 mt-5">
              <div>
                <h2>500+</h2>
                <p>Clients actifs</p>
              </div>
              <div>
                <h2>24/7</h2>
                <p>Support</p>
              </div>
              <div>
                <h2>99%</h2>
                <p>Uptime garanti</p>
              </div>
             </div>
            </div>

            <div className="col-lg-6">

            </div>
           
          </div>


        </div>
       </section>
    )

}
export default Hero;