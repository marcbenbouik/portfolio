import { Link } from "react-router-dom";
import soon from "../../pictures/soon.png"
import "../storiesSection/storiesSection.scss"
import StoryCircle from "../storyCircle/StoryCircle";
import { project } from "../../data/project";

function StoriesSection() {
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

    console.log(filteredArray)
    return (
        <section className="projectDiv">
            {filteredArray.map((projet, index) => (
                <Link to={`/project/${index}`} className="link" aria-label="Stories">
                    <StoryCircle title={projet.category} image={projet.cover} />
                </Link>
            ))}
         <StoryCircle title="Full stack" image={"/soon.png"} />
        </section>

    )
}
export default StoriesSection