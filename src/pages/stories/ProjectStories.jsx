import "../stories/projectStories.scss"

import { project } from "../../data/project"
import { useRef, useState } from "react"
import Circle from "../../component/circle/Circle"
import VerifiedSharpIcon from '@mui/icons-material/VerifiedSharp';
import { faPlay, faPause, faVolumeXmark, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProjectStories() {
    const [activeStory, setActiveStory] = useState(1)
    const [leftStory, setLeftStory] = useState(0)
    const [rightStory, setRightStory] = useState(2)
    const carouselRef = useRef(null);
    const touchStart = useRef(null);

    const getActiveStory = (story) => (activeStory === story ? "active" : "")
    const getLeftStory = (story) => (leftStory === story ? "left" : "")
    const getRightStory = (story) => (rightStory === story ? "right" : "")
    const categories = {}
    const filteredArray = project.filter((projet) => {
        if (!categories[projet.category]) {
            categories[projet.category] = true
            return true
        }
        else {
            return false
        }
    })

    const filteredProjects = filteredArray.filter(projet => projet.id === activeStory || projet.id === leftStory || projet.id === rightStory);


    function carousel(id) {
        setActiveStory(id)
        setRightStory(id + 1)
        if (id === 0) {
            setLeftStory(null)
        }
        else {
            setLeftStory(id - 1)
        }
        console.log(filteredProjects)
    }

    function startSwipe(e) {
        touchStart.current = e.touches[0].clientX
    }

    function endSwipe(e) {
        const toucheEnd = e.changedTouches[0].clientX
        const delta = toucheEnd - touchStart.current
        if (delta < 50 && delta > -50) {
            return
        }
        else if (delta > 50) {
            if (activeStory > 0) {
                setActiveStory(activeStory - 1)
                setRightStory(rightStory - 1);
                if (activeStory === 0) {
                    setLeftStory(null)
                }
                else {
                    setLeftStory(leftStory - 1)
                }
            }
        }
        else if (delta < -50) {
            if (activeStory !== project.length - 1) {
                setActiveStory(activeStory + 1);
                setLeftStory(leftStory + 1)
                if (activeStory === project.length - 1) {
                    setRightStory(null)
                }
                else {
                    setRightStory(rightStory + 1)
                }
            }
        }
    }

    return (
        <main className="story rowCenter" ref={carouselRef} onTouchStart={startSwipe} onTouchEnd={endSwipe}>
            {filteredProjects.map((projet) => (
                <div key={projet.id} className={`border ${getActiveStory(projet.id)} ${getLeftStory(projet.id)} ${getRightStory(projet.id)}`} onClick={() => carousel(projet.id)}>
                    {projet.id === activeStory ? (
                        <div className="storyHeader rowCenter">
                            <div className="logoStoryHeader rowCenter">
                                <Circle dimension={45} />
                                <h3>{projet.name}</h3>
                                <VerifiedSharpIcon style={{ color: "#ffff", }} />
                                <p className="categoryStoryHeader">{projet.category}</p>
                            </div>
                            <div className="buttonStoryHeader rowCenter">
                                <FontAwesomeIcon icon={faPause} style={{ color: "#ffff", }} />
                                {/* <FontAwesomeIcon icon={faPlay} style={{ color: "#ffff", }} /> */}
                                <FontAwesomeIcon icon={faVolumeXmark} style={{ color: "#ffff", }} />
                                <svg className="storyPoint">
                                    <circle cx="6" cy="10" r="2.75"></circle>
                                    <circle cx="14" cy="10" r="2.75"></circle>
                                    <circle cx="22" cy="10" r="2.75"></circle>
                                </svg>
                            </div>
                        </div>
                    ) : null}
                    <img src={`../../../pictures/${projet.story}`} alt="" className="storyPicture" />
                    {projet.id === activeStory ? (
                        <div className="storyFooter">
                            <FontAwesomeIcon icon={faChevronUp} style={{ color: "#ffff", }} />
                            <p>Voir plus</p>
                        </div>
                    ) : null}
                </div>
            ))}
        </main>
    )
}
export default ProjectStories