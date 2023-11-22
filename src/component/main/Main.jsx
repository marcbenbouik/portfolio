import Grid from "../grid/Grid"
import GridView from "../gridView/GridView"
import Header from "../header/Header"
import Project from "../project/Project"
import Section from "../section/Section"
import StatisticBar from "../statisticBar/StatisticBar"
import { useEffect, useState } from "react"


function Main() {
    const [isWider, setIsWider] = useState(false)

    useEffect(() => {
        function checkWidth() {
            if (window.innerWidth > 735) {
                setIsWider(true)
            }
            else {
                setIsWider(false)
            }
        }
        checkWidth()
        window.onresize = checkWidth
    }, [isWider])
    return (
        <main>
            <Header wider={isWider} text={"portfolio"} />
            <Section wider={isWider} />
            <Project />
            {!isWider ? (<StatisticBar />) : null}
            <GridView wider={isWider} />
            <Grid />
        </main>
    )
}

export default Main