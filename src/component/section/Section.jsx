import Button from "../button/Button";
import Circle from "../circle/Circle";
import "../section/section.scss"
import VerifiedSharpIcon from '@mui/icons-material/VerifiedSharp';
// import { useState, useEffect } from 'react';
import StatisticBar from "../statisticBar/StatisticBar";
import { useStore } from "../../store"
function Section() {

    const wider = useStore((state) => state.isWider)

    return (
        <section>
            <div className="section">
                <Circle dimension={wider ? 168 : 90} wider={wider} />
                <div className="globalDiv">
                    <div className="nameAndButton">
                        <div className="nameDiv">
                            <h2>Marc Ben Bouik</h2>
                            <VerifiedSharpIcon color="primary" />
                            <svg className="point">
                                <circle cx="6" cy="12" r="1.5"></circle>
                                <circle cx="12" cy="12" r="1.5"></circle>
                                <circle cx="18" cy="12" r="1.5"></circle>
                            </svg>
                        </div>
                        <div className="buttonDiv">
                            <Button buttonText="Linkedin" link={"https://www.linkedin.com/in/marc-benbouik-97a5652a1"} />
                            <Button buttonText="Malt" link={"https://www.malt.fr/profile/marcbenbouik?overview"} />
                            <Button buttonText="mail" link={"mailto:marc.benbouik@gmail.com"} />
                        </div>
                    </div>
                    {wider ? <StatisticBar /> : null}
                    <div className="textDiv">
                        <h3>Développeur web front-end</h3>
                        <p>Intégrateur web <br /> Passioné et motivé <br /> Mon objectif : fullstack JS <br />0677197495 <br />marc.benbouik@gmail.com</p>
                        <p className="diplome">Futur diplomé de l'école <strong>Openclassrooms</strong></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section;