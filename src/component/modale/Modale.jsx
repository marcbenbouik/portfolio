import Header from "../header/Header";
import "../modale/modale.scss"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { project } from "../../data/project";
import { useState } from "react";
import ProjectHeader from "../projectHeader/ProjectHeader";
import ProjectFooter from "../projectFooter/ProjectFooter";

function Modale({ id, setId, modale, setModale }) {
    const [pictureId, setPictureId] = useState(0)
    const data = project.filter((projet) => projet.id === id)
    const picture = data[0].pictures

    function sliderRight(index, setIndex, array) {
        if (index < array.length - 1) {
            setIndex(index + 1)
        }
        else {
            setIndex(0)
        }
    }

    function sliderLeft(index, setIndex, array) {
        if (index === 0) {
            setIndex(array.length - 1)
        }
        else {
            setIndex(index - 1)
        }
    }

    return (
        <div className="backgroundProject" role="dialog" aria-labelledby="header" aria-describedby="description">
            <div className="chevron chevronLeft" onClick={() => { sliderLeft(id, setId, project); setPictureId(0); }} >
                <ChevronLeftIcon className="left" />
            </div>
            <div className="chevron chevronRight" onClick={() => { sliderRight(id, setId, project); setPictureId(0); }}>
                <ChevronRightIcon />
            </div>
            <div className="globalProject">
                <Header title="Publication" text={data[0].name} id="header" />
                <ChevronLeftIcon className="returnChevron" onClick={() => setModale(!modale)} />
                <ProjectHeader category={data[0].category} />
                <div className="projectPicture">
                    <div className="chevron chevronLeft" onClick={() => sliderLeft(pictureId, setPictureId, picture)}>
                        <ChevronLeftIcon className="left" />
                    </div>
                    <img src={`${process.env.PUBLIC_URL}/pictures/${picture[pictureId].pic}`} alt="" />
                    <div className="chevron chevronRight" onClick={() => sliderRight(pictureId, setPictureId, picture)}>
                        <ChevronRightIcon />
                    </div>
                </div>
                <ProjectFooter id="description" description={data[0].description} github={data[0].github} deploy={data[0].deploiement} />
            </div>
        </div>
    )
}

export default Modale