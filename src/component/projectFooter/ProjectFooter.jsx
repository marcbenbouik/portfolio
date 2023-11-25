import "../projectFooter/projectFooter.scss"
import GitHubIcon from '@mui/icons-material/GitHub';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import BookmarkBorderSharpIcon from '@mui/icons-material/BookmarkBorderSharp';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProjectFooter({ description, github, deploy }) {
    return (
        <div>
            <div className="modaleIcone">
                <div className="leftModalIcon">
                    <div className="size">
                        <FavoriteBorderRoundedIcon sx={{ fontSize: 30 }} />
                    </div>
                    <div className="size">
                        <Link to={github} className="link" name="github">
                            <GitHubIcon sx={{ fontSize: 27 }} />
                        </Link>
                    </div>
                    <div className="size">
                        <Link to={deploy} className="link"name="version déployée">
                            <LanguageRoundedIcon sx={{ fontSize: 29 }} />
                        </Link>
                    </div>
                </div>
                <div className="bookmark">
                    <a href="https://www.linkedin.com/in/marc-benbouik-97a5652a1" name="Linkedin">
                        <FontAwesomeIcon icon={faLinkedin} size="xl" />
                    </a>
                    <div className="linkedin">
                        <BookmarkBorderSharpIcon sx={{ fontSize: 29 }} />
                    </div>
                </div>
            </div>
            <p className="projectDescription">{description}</p>
        </div>
    )
}

export default ProjectFooter