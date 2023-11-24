import Grid from "../grid/Grid"
import GridView from "../gridView/GridView"
import Header from "../header/Header"
import Project from "../project/Project"
import Section from "../section/Section"
import StatisticBar from "../statisticBar/StatisticBar"
import { useEffect, useState } from "react"
import { useStore } from "../../store"


function Main() {
    const isWider = useStore((state) => state.isWider)
    const setIsWider = useStore((state) => state.setWider)

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
            <Header text={"portfolio"} />
            <Section />
            <Project />
            {!isWider ? (<StatisticBar />) : null}
            <GridView />
            <Grid />
        </main>
    )
}

export default Main