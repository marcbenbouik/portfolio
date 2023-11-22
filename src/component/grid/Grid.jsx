import { useState } from "react";
import { project } from "../../data/project";
import "../grid/grid.scss"
import ProjectPage from "../../pages/ProjectPage";
function Grid() {
    const [projectId, setProjectId] = useState(0)
    const [openModale, setOpenModale] = useState(false)
    console.log(project)
    function handleOpenModale(projectId) {
        setProjectId(projectId)
        setOpenModale(true)
    }
    return (
        <div className="projectGrid">
            {project.map((projet) => (
                <div key={projet.id} className="cover" onClick={() => handleOpenModale(projet.id)}>

                    <img src={`../../../pictures/${projet.cover}`} alt="" />
                </div>
            ))}
            {openModale ? <ProjectPage id={projectId} setId={setProjectId} modale={openModale} setModale={setOpenModale}/> : null}
        </div>
    )
}
export default Grid
