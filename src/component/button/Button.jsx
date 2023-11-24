import "../button/button.scss"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button({ buttonText }) {
    return (
        <button className="button">{buttonText === "mail" ? (<FontAwesomeIcon icon={faEnvelope} />) : buttonText}</button>
    )
}
export default Button