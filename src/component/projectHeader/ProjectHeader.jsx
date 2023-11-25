import "../projectHeader/projectHeader.scss"
import Circle from "../circle/Circle"

function ProjectHeader({ category }) {
    return (
        <div className="projectHeader">
            <Circle dimension={45} className="circle" />
            <div className="projectHeaderText">
                <h2>Marc Ben Bouik</h2>
                <h3>{category}</h3>
            </div>
        </div>
    )
}

export default ProjectHeader