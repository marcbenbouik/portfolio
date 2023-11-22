import Circle from "../component/circle/Circle";
import Header from "../component/header/Header";
import photo from "../pictures/nina-carducci/nina.png"
import "../pages/projectPage.scss"
import GitHubIcon from '@mui/icons-material/GitHub';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { project } from "../data/project";
import { useState } from "react";

function ProjectPage({ id, setId, modale, setModale }) {
    const [pictureId, setPictureId] = useState(0)
    console.log(id)
    const data = project.filter((projet) => projet.id === id)
    console.log(data[0])
    const picture = data[0].pictures
    console.log(picture)

    function sliderRight(index, setIndex, array) {
        console.log(array, array.length, index)
        if (index < array.length - 1) {
            setIndex(index + 1)
        }
        else {
            setIndex(0)
        }
    }

    function sliderLeft(index, setIndex, array) {
        console.log(array, array.length, index)
        if (index === 0) {
            setIndex(array.length - 1)
        }
        else {
            setIndex(index - 1)
        }
    }

    return (
        <div className="backgroundProject">
            <div className="chevron chevronLeft" onClick={() => { sliderLeft(id, setId, project); setPictureId(0); }} >
                <ChevronLeftIcon className="left" />
            </div>
            <div className="chevron chevronRight" onClick={() => { sliderRight(id, setId, project); setPictureId(0); }}>
                <ChevronRightIcon />
            </div>
            <div className="globalProject">
                <Header title="Publication" text={data[0].name} />
                <ChevronLeftIcon className="returnChevron" onClick={() => setModale(!modale)} />
                <div className="projectHeader">
                    <Circle dimension={45} className="circle" />
                    <div className="projectHeaderText">
                        <h2>Marc Ben Bouik</h2>
                        <h3>{data[0].category}</h3>
                    </div>
                </div>
                <div className="projectPicture">
                    <div className="chevron chevronLeft" onClick={() => sliderLeft(pictureId, setPictureId, picture)}>
                        <ChevronLeftIcon className="left" />
                    </div>
                    <img src={`../../../pictures/${picture[pictureId].pic}`} alt="" />
                    <div className="chevron chevronRight" onClick={() => sliderRight(pictureId, setPictureId, picture)}>
                        <ChevronRightIcon />
                    </div>
                </div>
                <div className="modaleIcone">
                    <FavoriteBorderRoundedIcon sx={{ fontSize: 30 }} />
                    <GitHubIcon sx={{ fontSize: 30 }} />
                    <LanguageRoundedIcon sx={{ fontSize: 30 }} />
                </div>
                <p className="projectDescription">{data[0].description}</p>
            </div>
        </div>
    )
}

export default ProjectPage