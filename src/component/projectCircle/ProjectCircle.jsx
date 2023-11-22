import "../projectCircle/projectCircle.scss"

function ProjectCircle({ image, title }) {
    return (
        <div className="globalCircle">
            <div className="whiteCircle">
                <div className="circle">
                    <img src={image} alt="miniature projet" />
                </div>
            </div>
            <h3>{title}</h3>
        </div>
    )
}
export default ProjectCircle;