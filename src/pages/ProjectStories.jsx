import "../pages/projectStories.scss"

import { project } from "../data/project"
import { useRef, useState } from "react"
function ProjectStories() {
    const [activeStory, setActiveStory] = useState(1)
    const [leftStory, setLeftStory] = useState(0)
    const [rightStory, setRightStory] = useState(2)
    const carouselRef = useRef(null);
    const touchStart = useRef(null);

    const getActiveStory = (story) => (activeStory === story ? "active" : "")
    const getLeftStory = (story) => (leftStory === story ? "left" : "")
    const getRightStory = (story) => (rightStory === story ? "right" : "")

    const filteredProjects = project.filter(projet => projet.id === activeStory || projet.id === leftStory || projet.id === rightStory);


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
        <main className="story" ref={carouselRef} onTouchStart={startSwipe} onTouchEnd={endSwipe}>
            {filteredProjects.map((projet) => (
                <div key={projet.id} className={`${getActiveStory(projet.id)} ${getLeftStory(projet.id)} ${getRightStory(projet.id)}`} onClick={() => carousel(projet.id)}>
                    <img src={`../../../pictures/${projet.story}`} alt="" className="storyPicture" />
                </div>
            ))}
        </main>
    )
}
export default ProjectStories