
import {FiZap,FiBarChart2,FiCpu,FiShield,FiSmartphone} from "react-icons/fi";
import { FaUserGroup } from "react-icons/fa6";
import "./Feature.css"
function Feature(){
    const features = [
        {
          icon: FaUserGroup,
          title: "Collaboration temps réel",
          description:
            "Éditez des tâches, commentez et assignez en simultané. Toute l'équipe voit les changements instantanément sans rechargement.",
        },
        {
          icon: FiZap,
          title: "Automatisation intelligente",
          description:
            "Créez des workflows personnalisés pour automatiser les tâches répétitives : assignations, notifications, transitions de statut.",
        },
        {
          icon: FiBarChart2,
          title: "Analytiques avancées",
          description:
            "Tableaux de bord interactifs, burndown charts, vélocité d'équipe et KPIs projet en temps réel pour piloter vos sprints.",
        },
        {
          icon: FiCpu,
          title: "100+ Intégrations",
          description:
            "Connectez GitHub, Slack, Figma, Jira, Notion et bien d'autres via nos intégrations natives ou notre API REST publique.",
        },
        {
          icon: FiShield,
          title: "Sécurité enterprise",
          description:
            "Chiffrement AES-256, SSO/SAML, audit logs, 2FA obligatoire et conformité SOC 2 Type II pour vos données sensibles.",
        },
        {
          icon: FiSmartphone,
          title: "Mobile first",
          description:
            "Applications iOS et Android natives avec mode hors-ligne, notifications push et synchronisation bi-directionnelle.",
        },
      ];
     
    return(
        <div className="feature py-5" id="Features">
            <div className="container">
          
              <div className="text-center mb-5">
                <h6 className="text-primary fw-bold text-uppercase">
                  Fonctionnalités
                </h6>
                <h2 className="mt-3">
                  Tout ce dont votre équipe a besoin
                </h2>
                <p className="text-secondary w-75 mx-auto">
                  FlowSync réunit chaque outil dont une équipe agile a besoin —
                  sans les silos, sans la complexité.
                </p>
              </div>

              <div className="row g-4">
                 {features.map((feature,index)=>{
                    const Icon=feature.icon;
                    return(
                        <div className="col-lg-4 col-md-6" key={index}>
                            <div className="card feature-card border-0  h-100">
                                <div className="card-body p-3">
                                    <div className="icon-box mb-2 text-primary w-5"><Icon/></div>
                                    <h4 className="fw-bold mb-2">{feature.title}</h4>
                                    <p >{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                 })}
              </div>
                

            </div>

        </div>
    )

}
export default Feature;