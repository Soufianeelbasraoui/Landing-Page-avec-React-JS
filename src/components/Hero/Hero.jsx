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
              <div className="dashboard-card">
                <div className="cards-row">
                  <div className="task-card">
                       <h5>À faire</h5>
                        <h2>4</h2>
                  </div>
                  <div className="task-card en-cours">
                    <h5>En cours</h5>
                    <h2>6</h2>
                  </div>
                  <div className="task-card termine">
                    <h5>Terminé</h5>
                    <h2>12</h2>
                  </div>
                </div>
                   <h5 className="mt-5">SPRINT 12 — SEMAINE 3/4</h5>

                   <div className="progress-group">
                    <span>Frontend</span>
                     <div className="progress" style={{ height: "10px" }}>
                      <div className="progress-bar"  style={{ width: "78%" }}>
                      </div>
                     </div>
                   </div>
                   
                   <div className="progress-group">
                    <span>Backend API</span>
                    <div className="progress" style={{ height: "10px" }}>
                      <div className="progress-bar bg-success"   style={{ width: "91%" }}>
                      </div>
                    </div>
                   </div>

                   <div className="progress-group">
                     <span>Tests QA</span> 
                     <div className="progress" style={{ height: "10px" }}>
                      <div className="progress-bar bg-info" style={{width:"50%"}}>
                      </div>
                     </div>
                   </div>

              </div>
            </div>
          </div>
        </div>
       </section>
    )

}
export default Hero;