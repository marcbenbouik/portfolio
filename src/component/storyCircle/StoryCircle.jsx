import "../storyCircle/storyCircle.scss"

function StoryCircle({ image, title }) {
    return (
        <div className="globalCircle">
            <div className="whiteCircle">
                <div className="circle">
                    <img src={`../../../pictures/${image}`} alt={`miniature des projet ${title}`} />
                </div>
            </div>
            <h3>{title}</h3>
        </div>
    )
}
export default StoryCircle;