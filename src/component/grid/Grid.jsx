import { useState } from "react";
import { project } from "../../data/project";
import "../grid/grid.scss"
import ProjectPage from "../../pages/ProjectPage";
import { useStore } from "../../store"
import ProjectHeader from "../projectHeader/ProjectHeader";
import ProjectFooter from "../projectFooter/ProjectFooter";
function Grid() {
    const [projectId, setProjectId] = useState(0)
    const [openModale, setOpenModale] = useState(false)
    const display = useStore((state) => state.display)
    console.log(project)
    function handleOpenModale(projectId) {
        setProjectId(projectId)
        setOpenModale(true)
    }
    return (
        <div className={display ? "projectList" : "projectGrid"}>
            {project.map((projet) => (
                <div>
                    {display ? (<ProjectHeader category={projet.category} />) : null}
                    <div key={projet.id} className="cover" onClick={() => handleOpenModale(projet.id)}>
                        <img src={`${process.env.PUBLIC_URL}/pictures/${projet.cover}`} alt="" />
                    </div>
                    {display ? (<ProjectFooter description={""} />) : null}
                </div>
            ))}
            {openModale ? <ProjectPage id={projectId} setId={setProjectId} modale={openModale} setModale={setOpenModale} /> : null}
        </div>
    )
}
export default Grid
