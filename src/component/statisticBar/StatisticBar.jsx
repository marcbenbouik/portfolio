import "../statisticBar/statisticBar.scss";
import Statistics from "../statistics/Statistic";

function StatisticBar() {
    return (
        <div className="statisticBar">
            <Statistics number="6" category="terminés" />
            <Statistics number="6" category="en cours" />
            <Statistics number="0" category="stars" />
        </div>
    )
}
export default StatisticBar