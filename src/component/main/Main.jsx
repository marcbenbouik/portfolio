import Grid from "../grid/Grid"
import GridView from "../gridView/GridView"
import Header from "../header/Header"
import Project from "../storiesSection/StoriesSection"
import Section from "../section/Section"
import StatisticBar from "../statisticBar/StatisticBar"
import { useEffect, useState } from "react"
import { useStore } from "../../store"
import "../main/main.scss"
import StoriesSection from "../storiesSection/StoriesSection"


function Main() {
    const isWider = useStore((state) => state.isWider)
    const setIsWider = useStore((state) => state.setWider)
    const setDisplay = useStore((state) => state.setDisplay)

    useEffect(() => {
        setDisplay(false)
        function checkWidth() {
            setIsWider(window.innerWidth > 735);
        }
        window.addEventListener('resize', checkWidth);
        return () => {
            window.removeEventListener('resize', checkWidth);
        };
    }, []);
    return (
        <main>
            <Header text={"portfolio"} />
            <Section />
            <StoriesSection />
            {!isWider ? (<StatisticBar />) : null}
            <GridView />
            <Grid />
        </main>
    )
}

export default Main