import Button from "../button/Button";
import Circle from "../circle/Circle";
import "../section/section.scss"
import VerifiedSharpIcon from '@mui/icons-material/VerifiedSharp';
// import { useState, useEffect } from 'react';
import StatisticBar from "../statisticBar/StatisticBar";

function Section({ wider }) {


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
                            <Button buttonText="Linkdin" />
                            <Button buttonText="Malt" />
                            <Button buttonText="?" />
                        </div>
                    </div>
                    {wider ? <StatisticBar /> : null}
                    <div className="textDiv">
                        <h3>Développeur junior</h3>
                        <p>Developeur web front-end <br />Intégrateur web <br /> Passioné et motivé <br />Mon numéro de téléphone <br />Mon Email</p>
                        <p className="diplome">Futur diplomé de l'école <strong>Openclassrooms</strong></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section;