import "./Contact.css";
import { FiUser,FiMail,FiMessageSquare,FiSend,} from "react-icons/fi";
import { useState } from "react";
function Contact(){

    const [form, setForm] = useState({name:" ",email:" ",message:" "});
   const [errors, setErrors] = useState({});

    const handleChange = (e)=>{
        const{name,value}=e.target;
        setForm({...form,[name]:value});
    }
    const handleSubmit = (e)=>{
        e.preventDefault();

        let newErrors={};

        if(!form.name.trim()){
            newErrors.name="Le nom est obligatoire.";
        }
        if(!form.email.trim()){
           newErrors.email="le email est obligatoire."
        } else if(!form.email.includes("@")){
            newErrors.email="Adresse email invalide.";
        }
        if(!form.message.trim()){
            newErrors.message="Le message est obligatoire.";
        }
        setErrors(newErrors);
        
        if(Object.keys(newErrors).length===0){
            alert("Message envoyé avec succès !");
           
            setForm({
                name:"",
                email:"",
                message:""
            })
        }
    }
    
    return(
                   
         <div className="contact py-5" id="Contact">
            <div className="container">
             <div className="text-center mb-5">
                <h6 className="text-primary fw-bold text-uppercase"> Contact </h6>
                <h2 className="mt-3">Parlons de votre projet</h2>
                <p className="text-secondary"> Notre équipe vous répond sous 24h. Essai gratuit sans engagement. </p>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                 <div className="contact-form">
                     <form onSubmit={handleSubmit}>                
                            <div className="mb-4">
                                 <label htmlFor="name" className="form-label fw-semibold"><FiUser className="me-2 form-icon" />Nom complet</label>
                                <input type="text" className="form-control custom-input"  id="name"  name="name" value={form.name} onChange={handleChange} id="name" placeholder="Marie Dupont"/>
                                {errors.name &&(
                                    <small className="text-danger">{errors.name}</small>
                                )}
                            </div>
                            <div className="mb-4">
                                 <label htmlFor="email" className="form-label fw-semibold"> <FiMail className="me-2 form-icon" /> Adresse email</label>
                                 <input type="email" className="form-control custom-input" id="email" name="email" value={form.email}  onChange={handleChange}  placeholder="marie@entreprise.com"/>
                                 {errors.email &&(
                                    <small className="text-danger">{errors.email}</small>
                                 )}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="form-label fw-semibold"><FiMessageSquare className="me-2 form-icon" />Message</label>
                                <textarea  className="form-control custom-input" name="message" id="message"rows="3" value={form.message}  onChange={handleChange}  placeholder="Décrivez votre projet et vos besoins..."></textarea>
                                <small className="text-danger">{errors.message}</small>
                            </div>
                             <button type="submit" className="btn btn-primary w-100"> <FiSend className="me-2" /> Envoyer le message</button>
                            </form>
                    </div>
                 </div>
              </div>
            </div>
        </div>
    )

}
export default Contact;