import GridOnSharpIcon from '@mui/icons-material/GridOnSharp';
import ReorderSharpIcon from '@mui/icons-material/ReorderSharp';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import "../gridView/gridView.scss"
import { useEffect, useState } from 'react';

function GridView({ wider }) {
    const [iconSize, setIconSize] = useState(24)
    const [activeIcon, setActiveIcon] = useState("grid")
    // const [list, setList] = useState(false)
    // const [grid, setGrid] = useState(true)
    // const [other, setOther] = useState(false)
    useEffect(() => {
        function handleIconSize() {
            if (wider) {
                setIconSize(12)
            }
            else {
                setIconSize(24)
            }
        }
        handleIconSize()
        window.onresize = handleIconSize
    }, [wider])

    const handleIconClick = (iconType) => {
        setActiveIcon(iconType);
    }
    const getIconColor = (iconType) => (activeIcon === iconType ? "#3277d5" : null);
    const getBorder = (iconType) => (activeIcon === iconType ? "solid 1px #3277d5" : null);
    return (
        <div className='iconDiv'>
            <div className='iconName' style={{ color: getIconColor("grid"), borderTop: getBorder("grid") }} onClick={() => handleIconClick("grid")}>
                <GridOnSharpIcon style={{ fontSize: iconSize }} />
                {wider ? (<p>GRILLE</p>) : null}
            </div>
            <div className='iconName' style={{ color: getIconColor("list"), borderTop: getBorder("list") }} onClick={() => handleIconClick("list")}>
                <ReorderSharpIcon style={{ fontSize: iconSize }} />
                {wider ? (<p>LISTE</p>) : null}
            </div>
            <div className='iconName' style={{ color: getIconColor("other"), borderTop: getBorder("other") }} onClick={() => handleIconClick("other")} >
                <AssignmentIndOutlinedIcon style={{ fontSize: iconSize }} />
                {wider ? (<p>AUTRE</p>) : null}
            </div>
        </div>
    )
}

export default GridView