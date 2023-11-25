import "../stories/projectStories.scss"

import { project } from "../../data/project"
import { useEffect, useRef, useState } from "react"
import Circle from "../../component/circle/Circle"
import VerifiedSharpIcon from '@mui/icons-material/VerifiedSharp';
import { faPlay, faPause, faVolumeXmark, faChevronUp, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";

function ProjectStories() {
    const startId = useParams()
    const intStart = parseInt(startId.id, 10)
    const [storyInCategory, setStoryInCategory] = useState(0)
    const [activeProjectInStory, setActiveProjectInStory] = useState(null)
    const [storyByCategory, setStoryByCategory] = useState([])
    const carouselRef = useRef(null);
    const touchStart = useRef(null);
    let storiesByCategory
    const seoArray = project.filter((projet) => projet.category === "SEO")
    const responsiveArray = project.filter((projet) => projet.category === "Responsive")
    const apiArray = project.filter((projet) => projet.category === "API")
    const reactArray = project.filter((projet) => projet.category === "React")

    const categories = []
    const filteredArray = project.filter((projet) => {
        if (!categories[projet.category]) {
            categories[projet.category] = true
            return true
        }
        else {
            return false
        }
    })
    console.log(startId.id, intStart)
    const [activeStory, setActiveStory] = useState(intStart)
    const [leftStory, setLeftStory] = useState(intStart == 0 ? null : intStart - 1)
    const [rightStory, setRightStory] = useState(intStart == filteredArray.length - 1 ? null : intStart + 1)

    const getActiveStory = (story) => {
        if (filteredProjects.length === 3) {

            if (story === 0) {
                return ("left")
            }
            else if (story === 1) {
                return ("active")
            }
            else if (story === 2) {
                return ("right")
            }
            else {
                return
            }
        }
        else if (filteredProjects[2] === undefined && leftStory === null) {
            if (story === 0) {
                return ("active")
            }
            else if (story === 1) {
                return ("right")
            }
        }
        else if (filteredProjects[2] === undefined && rightStory === null) {
            if (story === 0) {
                return ("left")
            }
            else if (story === 1) {
                return ("active")
            }
        }
    }



    const start = leftStory !== null ? leftStory : 0;
    const end = rightStory !== null ? rightStory + 1 : activeStory + 1
    const filteredProjects = filteredArray.slice(start, end);

    function carousel(index, id) {
        const isFirstProject = id === 0;
        const isLastProject = id === filteredArray[filteredArray.length - 1].id;

        if (index === 0 && !isFirstProject && !isLastProject && rightStory) {
            setStoryInCategory(0)
            setActiveStory(activeStory - 1);
            setLeftStory(leftStory - 1);
            setRightStory(rightStory - 1);
        } else if (index === 2 && !isLastProject && !isFirstProject) {
            setStoryInCategory(0)
            setActiveStory(activeStory + 1);
            setLeftStory(leftStory + 1);
            setRightStory(rightStory + 1);
        } else if (index === 0 && isFirstProject) {
            setStoryInCategory(0)
            // Gestion du cas où on clique sur la toute premiere image
            setActiveStory(activeStory - 1);
            setLeftStory(null);
            setRightStory(rightStory - 1);
        } else if (index === 1 && leftStory === null) {
            setStoryInCategory(0)
            // Gestion du cas où on est au tout début et on clique sur l'image de droite
            setActiveStory(activeStory + 1);
            setLeftStory(0);
            setRightStory(rightStory + 1);
        } else if (index === 1 && leftStory !== null) {
            return
        } else if (index === 2 && isLastProject) {
            setStoryInCategory(0)
            // Gestion du cas ou l'on clique sur la derniere image
            setActiveStory(activeStory + 1);
            setLeftStory(leftStory + 1);
            setRightStory(null);
        } else if (index === 0 && rightStory === null) {
            setStoryInCategory(0)
            // Gestion du cas où on est à la fin du carrousel et on clique sur l'image de gauche
            setActiveStory(activeStory - 1);
            setRightStory(filteredArray.length - 1);
            setLeftStory(leftStory - 1);
        }
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
            setStoryInCategory(0)
            if (leftStory === 0) {
                // Gestion du cas où on clique sur la toute premiere image
                setActiveStory(activeStory - 1);
                setLeftStory(null);
                setRightStory(rightStory - 1);
            } else if (rightStory === null) {
                // Gestion du cas où on est à la fin du carrousel et on clique sur l'image de gauche
                setActiveStory(activeStory - 1)
                setLeftStory(leftStory - 1)
                setRightStory(filteredArray.length - 1)

            }
            else if (leftStory === null) {
                // Gestion du cas où on est à la fin du carrousel et on clique sur l'image de gauche
                return
            }
            else {
                setActiveStory(activeStory - 1);
                setLeftStory(leftStory - 1);
                setRightStory(rightStory - 1);


            }
        } else if (delta < -50) {
            setStoryInCategory(0)
            if (rightStory === filteredArray.length - 1) {
                // Gestion du cas ou l'on clique sur la derniere image
                setActiveStory(activeStory + 1);
                setLeftStory(leftStory + 1);
                setRightStory(null);
            } else if (leftStory === null) {
                // Gestion du cas où on est au tout début et on clique sur l'image de droite
                setActiveStory(activeStory + 1);
                setLeftStory(0);
                setRightStory(rightStory + 1);
            } else if (rightStory === null) {
                return
            }
            else {
                // cas ou on swipe a droite au milieu
                setActiveStory(activeStory + 1);
                setLeftStory(leftStory + 1);
                setRightStory(rightStory + 1);
            }
        }

    }

    function clickRightInStory() {
        console.log(storyByCategory.length)
        if (storyInCategory !== storyByCategory.length - 1) {
            setStoryInCategory(storyInCategory + 1)
        }
        else {
            return
        }
    }

    function clickLeftInStory() {
        if (storyInCategory !== 0) {
            setStoryInCategory(storyInCategory - 1)
        }
        else {
            return
        }
    }

    function filtrage(category) {
        if (category === seoArray[0].category) {
            setStoryByCategory(seoArray)
        } else if (category === reactArray[0].category) {
            setStoryByCategory(reactArray)
        } else if (category === responsiveArray[storyInCategory].category) {
            setStoryByCategory(responsiveArray)
        } if (category === apiArray[0].category) {
            setStoryByCategory(apiArray)
        } else {
            return
        }
    }
    console.log(leftStory, activeStory, rightStory, filteredProjects, storiesByCategory)
    return (
        <main className="story rowCenter" ref={carouselRef} onTouchStart={startSwipe} onTouchEnd={endSwipe}>
            <Link className="xmark" to={"/"} name="page d'accueil" >
                <FontAwesomeIcon icon={faXmark} size="xl" />
            </Link>
            {filteredProjects.map((projet, index) => {
                const storiesByCategoryCondition = (leftStory === null && index === 0) || (index === 1 && rightStory === null) || (filteredProjects[2] !== undefined && index === 1);
                storiesByCategory = storiesByCategoryCondition ? project.filter((proj) => proj.category === project[projet.id].category) : []
                return (
                    <div key={projet.id} className={`border ${getActiveStory(index)}`} onClick={() => carousel(index, projet.id)}>
                        {storiesByCategoryCondition ? (
                            <div className="storyHeader rowCenter" onLoad={() => filtrage(projet.category)}>
                                <div className="whiteContainer">
                                    {storyByCategory[storyInCategory] ? (
                                        storyByCategory.map((image, index) => (
                                            <div className={index !== storyInCategory ? "grey white" : "white"}></div>
                                        ))
                                    ) : null}
                                </div>
                                <div className="logoStoryHeader rowCenter">
                                    <Circle dimension={45} />
                                    <h3>{storyByCategory[storyInCategory] ? storyByCategory[storyInCategory].name : projet.name}</h3>
                                    <VerifiedSharpIcon style={{ color: "#ffff", }} />
                                    <p className="categoryStoryHeader">{projet.category}</p>
                                </div>
                                <div className="buttonStoryHeader rowCenter">
                                    <div className="bookmark">
                                        <a href="https://www.linkedin.com/in/marc-benbouik-97a5652a1" name="Linkedin">
                                            <FontAwesomeIcon icon={faLinkedin} size="med" style={{ color: "#ffff", }} />
                                        </a>
                                        <div className="linkedin">
                                            <FontAwesomeIcon icon={faPause} style={{ color: "#ffff", }} />
                                        </div>
                                    </div>
                                    <div className="bookmark">
                                        <a href="https://www.linkedin.com/in/marc-benbouik-97a5652a1" name="Linkedin">
                                            <FontAwesomeIcon icon={faLinkedin} size="med" style={{ color: "#ffff", }} />
                                        </a>
                                        <div className="linkedin">
                                            <FontAwesomeIcon icon={faVolumeXmark} style={{ color: "#ffff", }} />
                                        </div>
                                    </div>
                                    <svg className="storyPoint">
                                        <circle cx="6" cy="10" r="2.75"></circle>
                                        <circle cx="14" cy="10" r="2.75"></circle>
                                        <circle cx="22" cy="10" r="2.75"></circle>
                                    </svg>
                                </div>
                            </div>
                        ) : null}
                        {storiesByCategoryCondition ? (<div className="clickRight" onClick={clickRightInStory}></div>) : null}
                        <img src={`../../../pictures/${storiesByCategoryCondition && storyByCategory[storyInCategory] ? storyByCategory[storyInCategory].story : projet.story}`} alt="" className="storyPicture" />
                        {storiesByCategoryCondition ? (<div className="clickLeft" onClick={clickLeftInStory}></div>) : null}
                        {storiesByCategoryCondition ? (
                            <Link to={"/"} className="storyFooter" name="Accueil">
                                <FontAwesomeIcon icon={faChevronUp} style={{ color: "#ffff", }} />
                                <p>Voir plus</p>
                            </Link>
                        ) : null}
                    </div>
                )
            })}
        </main>
    )
}
export default ProjectStories