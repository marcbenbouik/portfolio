import "../statistics/statistics.scss";

function Statistics({ number, category }) {
    return (
        <div className="statisticDiv">
            <p className="number">{number}</p>
            <p className="numberCategory">{category}</p>
        </div>
    )
}
export default Statistics