import "../button/button.scss"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button({ buttonText, link }) {
    return (
        <a href={link} className="button link">
            {buttonText === "mail" ? (<FontAwesomeIcon icon={faEnvelope} />) : buttonText}
        </a>
    )
}
export default Button