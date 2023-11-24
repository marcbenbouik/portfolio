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
                <Link to={`/project/${index}`} className="link">
                    <StoryCircle title={projet.category} image={projet.cover} />
                </Link>


            ))}

         <StoryCircle title="Full stack" image={"/soon.png"} />
        </section>

    )

    //     <div className="projectDiv">
    //         <StoryCircle title="SEO" image={soon} />
    //         <StoryCircle title="Responsive" image={soon} />
    //         <StoryCircle title="API" image={soon} />
    //     </div>
    // )
}
export default StoriesSection