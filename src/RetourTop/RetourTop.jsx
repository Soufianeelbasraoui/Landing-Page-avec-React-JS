import { FiArrowUp } from "react-icons/fi";
import "./RetourTop.css"

function RetourTop(){

    const scrollToTop=()=>{
        window.scroll({
            top:0,
            behavior:"smooth"
        })
    }
    return(
        <button className="back-top" onClick={scrollToTop}>
        <FiArrowUp />
        </button>
    )


}
export default RetourTop;