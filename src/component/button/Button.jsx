import "../button/button.scss"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button({ buttonText, link }) {
    return (
        <a href={link} className="link">
            <button className="button">{buttonText === "mail" ? (<FontAwesomeIcon icon={faEnvelope} />) : buttonText}</button>

        </a>
    )
}
export default Button