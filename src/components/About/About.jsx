import { FiCheckCircle } from "react-icons/fi";
import "./About.css"
function About(){
    return(
        <div className="about-container" id="About">
            <div className="container">
                <h5 className="text-center text-primary mb-3">À propos</h5>

                <div className="row">
                    <div className="col-lg-6">
                        <h2>Le chaos des projets, c'est terminé.</h2>
                         <p><strong>Le problème :</strong> Les équipes agiles jonglent entre 5 à 8 outils différents — et passent 30 % de leur temps à synchroniser l'information plutôt qu'à produire.</p>
                         <p><strong>Notre solution :</strong> FlowSync centralise la planification, l'exécution et le reporting dans une interface unifiée, conçue dès le départ pour les équipes qui livrent vite.</p> 
                         <p><strong>Pour qui :</strong> Start-ups, scale-ups et divisions tech des grandes entreprises qui pratiquent Scrum, Kanban ou des méthodologies hybrides.</p>
                         <p><FiCheckCircle className="text-success text-4xl me-2" /><strong>Onboarding en 5 minutes </strong> — Importez vos projets existants depuis Jira, Trello ou Asana en un clic.</p>
                         <p><FiCheckCircle className="text-success text-4xl me-2" /><strong>Zéro courbe d'apprentissage</strong> — Interface intuitive pensée pour des équipes non-techniques et tech.</p>
                         <p><FiCheckCircle className="text-success text-4xl me-2" /><strong>Scalable de 2 à 2000 utilisateurs</strong> — Grandit avec vous : PME, scale-ups ou grandes entreprises.</p>
                         <p><FiCheckCircle className="text-success text-4xl me-2" /><strong>Support humain 24/7</strong> — Une vraie équipe, pas un bot — disponible par chat, email et téléphone.</p>
                    </div>
                    <div className="col-lg-6">
                        <div className="card-Roadmap">
                             <div className="reodmap mb-3">
                                 <div><h6>Roadmap Q3 2025</h6></div>
                                 <div className="roadmap-encour"><h6 className="text-success">En cours</h6></div>
                             </div>

                             <div container-Q3>
                               <div className="Q3 mb-1"><p><FiCheckCircle className="text-success text-4xl me-2"/>Auth & onboarding</p></div>
                               <div className="Q3 mb-1"><p><FiCheckCircle className="text-success text-4xl me-2"/>Tableau Kanban</p></div>
                               <div className="Q3 mb-1"><p><FiCheckCircle className="text-success text-4xl me-2"/>Backlog & sprints</p></div>
                               <div className="Q3 mb-1"><p><FiCheckCircle className="text-success text-4xl me-2"/>Intégrations GitHub</p></div>
                               <div className="Q3 mb-1"><p><FiCheckCircle className="text-success text-4xl me-2"/>Reporting avancé</p></div>
                               <div className="Q3 mb-1"><p><FiCheckCircle className="text-success text-4xl me-2"/>App mobile v1</p></div>
                                <div className="progres-group mt-2">
                                  <span>Progression globale</span> 
                                  <div className="progress" style={{ height: "10px" }}>
                                   <div className="progress-bar bg-info" style={{width:"50%"}}>
                                   </div>
                                </div>
                                </div>
                             </div>
                        </div>
                    </div>

                </div>
            </div>

            

        </div>
    )
}
export default About;