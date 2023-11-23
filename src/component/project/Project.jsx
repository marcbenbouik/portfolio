import { Link } from "react-router-dom";
import soon from "../../pictures/soon.png"
import "../project/project.scss"
import ProjectCircle from "../projectCircle/ProjectCircle";

function Project() {
    return (
        <div className="projectDiv">
            <Link to="/project">
                <ProjectCircle title="React" image={soon} />
            </Link>
            <ProjectCircle title="SEO" image={soon} />
            <ProjectCircle title="Responsive" image={soon} />
            <ProjectCircle title="API" image={soon} />
            <ProjectCircle title="Full stack" image={soon} />
        </div>
    )
}
export default Project