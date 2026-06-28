
import { MdOutlineStar } from "react-icons/md";
import "./Temoignages.css";
function Temoignages(){

    return(
        <div className="temoignages  py-5" id="Testimonials">
            <diV className="container">
                <div className="text-center mb-5">
                <h6 className="text-primary fw-bold text-uppercase">
                  Témoignages
                </h6>
                <h2 className="mt-3">
                 Ils livrent plus vite
                </h2>
                <p className="text-secondary w-75 mx-auto">
                       Plus de 500 équipes font confiance à FlowSync pour piloter leur développement produit.
                </p>
              </div>

              <div className="row g-4">
                <div className="col-lg-4 col-md-6">
                    <div className="card temoignages-card border-0 h-100">
                        <div className="card-body p-3">
                               <div className="icon-box mb-2 text-warning w-5">
                                   <MdOutlineStar />
                                   <MdOutlineStar />
                                   <MdOutlineStar />
                                   <MdOutlineStar />
                                   <MdOutlineStar />
                               </div>
                               <p className="text-muted">“FlowSync a divisé par deux notre temps de synchronisation d'équipe. Nos sprints sont désormais prévisibles et nos livraisons, systématiques. C'est l'outil qu'on attendait depuis des années.”</p>
                               <h6 className="fw-bold mb-0">Jean Dupont</h6>
                        </div>
                    </div>
                </div>

                 <div className="col-lg-4 col-md-6">
                    <div className="card temoignages-card border-0 h-100">
                        <div className="card-body p-3">
                               <div className="icon-box mb-2 text-warning w-5">
                                   <MdOutlineStar />
                                   <MdOutlineStar />
                                   <MdOutlineStar />
                                   <MdOutlineStar />
                                   <MdOutlineStar />
                               </div>
                               <p className="text-muted">“FlowSync a divisé par deux notre temps de synchronisation d'équipe. Nos sprints sont désormais prévisibles et nos livraisons, systématiques. C'est l'outil qu'on attendait depuis des années.”</p>
                               <h6 className="fw-bold mb-0">Jean Dupont</h6>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="card temoignages-card border-0 h-100">
                        <div className="card-body p-3">
                               <div className="icon-box mb-2 text-warning w-5">
                                   <MdOutlineStar />
                                   <MdOutlineStar />
                                   <MdOutlineStar />
                                   <MdOutlineStar />
                                   <MdOutlineStar />
                               </div>
                               <p className="text-muted">“FlowSync a divisé par deux notre temps de synchronisation d'équipe. Nos sprints sont désormais prévisibles et nos livraisons, systématiques. C'est l'outil qu'on attendait depuis des années.”</p>
                               <h6 className="fw-bold mb-0">Jean Dupont</h6>
                        </div>
                    </div>
                </div>
                 
              </div>

              <div className="trust-section text-center py-5">
                   <p className="trust-text mb-4"> Ils nous font confiance </p>
                   <div className="d-flex justify-content-center align-items-center flex-wrap gap-5">
                     <h3 className="brand-name">Nexora</h3>             
                     <h3 className="brand-name">DataFlow</h3>                
                     <h3 className="brand-name">Pulse</h3>
                     <h3 className="brand-name">Synapse</h3>
                     <h3 className="brand-name">Orbital</h3>
                     <h3 className="brand-name">Vertex</h3>
                   </div>

                 </div>

            </diV>

        </div>
    )

}
export default Temoignages;