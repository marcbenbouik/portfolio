import "../projectFooter/projectFooter.scss"
import GitHubIcon from '@mui/icons-material/GitHub';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import { Link } from "react-router-dom";

function ProjectFooter({ description, github, deploy }) {
    return (
        <div>
            <div className="modaleIcone">
                <div className="size">
                <FavoriteBorderRoundedIcon sx={{ fontSize: 30 }} />
                </div>
                <div className="size">
                <Link to={github} className="link">
                    <GitHubIcon sx={{ fontSize: 27 }} />
                </Link>
                </div>
                <div className="size">
                <Link to={deploy} className="link">
                    <LanguageRoundedIcon sx={{ fontSize: 29 }} />
                </Link>
                </div>
            </div>
            <p className="projectDescription">{description}</p>
        </div>
    )
}

export default ProjectFooter