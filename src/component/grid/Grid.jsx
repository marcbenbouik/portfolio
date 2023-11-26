import { useState } from "react";
import { project } from "../../data/project";
import "../grid/grid.scss"
import { useStore } from "../../store"
import ProjectHeader from "../projectHeader/ProjectHeader";
import ProjectFooter from "../projectFooter/ProjectFooter";
import Modale from "../modale/Modale";
function Grid() {
    const [projectId, setProjectId] = useState(0)
    const [openModale, setOpenModale] = useState(false)
    const display = useStore((state) => state.display)
    function handleOpenModale(projectId) {
        setProjectId(projectId)
        setOpenModale(true)
    }

    function keyCloseModale(e) {
        if (e.key === 'Escape') {
            setOpenModale(false)
        }
    }
    return (
        <div className={display ? "projectList" : "projectGrid"} onKeyDown={keyCloseModale}>
            {project.map((projet) => (
                <div key={projet.id}>
                    {display ? (<ProjectHeader category={projet.category} />) : null}
                    <div tabIndex="0" key={projet.id} className="cover" onClick={() => handleOpenModale(projet.id)}>
                        {/* <img src={`${process.env.PUBLIC_URL}/pictures/${projet.cover}`}
                            alt={`projet ${projet.name}`} width={298} height={298} /> */}
                        <picture>
                            <source media="(max-width: 735px)" srcset={`${process.env.PUBLIC_URL}/pictures/${projet.coverMobile} 735w`} />
                            <source srcset={`${process.env.PUBLIC_URL}/pictures/${projet.cover} 900w`} />
                            <img src={`${process.env.PUBLIC_URL}/pictures/${projet.cover}`}
                                sizes="(max-width: 735px) 735px, 900px"
                                alt={`projet ${projet.name}`}
                                width={298}
                                height={298} />
                        </picture>
                    </div>
                    {display ? (<ProjectFooter description={""} />) : null}
                </div>
            ))}
            {openModale ? <Modale id={projectId} setId={setProjectId} modale={openModale} setModale={setOpenModale} /> : null}
        </div>
    )
}
export default Grid
