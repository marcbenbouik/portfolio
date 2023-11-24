import "../projectFooter/projectFooter.scss"
import GitHubIcon from '@mui/icons-material/GitHub';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';

function ProjectFooter({ description }) {
    return (
        <div>
            <div className="modaleIcone">
                <FavoriteBorderRoundedIcon sx={{ fontSize: 30 }} />
                <GitHubIcon sx={{ fontSize: 30 }} />
                <LanguageRoundedIcon sx={{ fontSize: 30 }} />
            </div>
            <p className="projectDescription">{description}</p>
        </div>
    )
}

export default ProjectFooter