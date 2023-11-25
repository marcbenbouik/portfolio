import "../storiesSection/storiesSection.scss"
import { Link } from "react-router-dom";
import { project } from "../../data/project";
import StoryCircle from "../storyCircle/StoryCircle";

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

    return (
        <section className="projectDiv">
            {filteredArray.map((projet, index) => (
                <Link to={`/project/${index}`} className="link" aria-label={projet.category}>
                    <StoryCircle title={projet.category} image={projet.cover} />
                </Link>
            ))}
            <StoryCircle title="Full stack" image={"/soon.png"} />
        </section>

    )
}
export default StoriesSection