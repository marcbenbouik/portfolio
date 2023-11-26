import profil from "../../pictures/profil.webp"
import instagram from "../../pictures/texte.jpg"
import "../circle/circle.scss"
import { useEffect, useState } from "react"
function Circle({ dimension, wider }) {
    const [colorCircleSize, setColorCircleSize] = useState()
    const [whiteCircleSize, setWhiteCircleSize] = useState()
    const [circleSize, setCircleSize] = useState()
    useEffect(() => {
        function setSize(dimension, wider) {
            setColorCircleSize({ height: dimension, width: dimension });
            if (wider) {
                setCircleSize({ height: dimension - 18, width: dimension - 18 });
                setWhiteCircleSize({ height: dimension - 7, width: dimension - 7 });
            }
            else if (dimension === 45) {
                setCircleSize({ height: dimension - 8, width: dimension - 8 });
                setWhiteCircleSize({ height: dimension - 4, width: dimension - 4 });
            }
            else {
                setCircleSize({ height: dimension - 13, width: dimension - 13 });
                setWhiteCircleSize({ height: dimension - 4, width: dimension - 4 });
            }
        }
        setSize(dimension, wider)
        window.onresize = () => {
            setSize(dimension, wider);
        };
    }, [wider, dimension])



    return (
        <div className="colorCircle" style={colorCircleSize}>
            <img src={instagram} alt="" style={colorCircleSize} />
            <div className="whiteCircle" style={whiteCircleSize}>
                <div className="circle" style={circleSize}>
                    <img src={profil} alt="profil" style={circleSize} />
                </div>
            </div>
        </div>
    )
}
export default Circle;