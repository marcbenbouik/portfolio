import GridOnSharpIcon from '@mui/icons-material/GridOnSharp';
import ReorderSharpIcon from '@mui/icons-material/ReorderSharp';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import "../gridView/gridView.scss"
import { useEffect, useState } from 'react';
import { useStore } from '../../store';

function GridView() {
    const display = useStore((state) => state.display)
    const setDisplay = useStore((state) => state.setDisplay)
    const wider = useStore((state) => state.isWider)
    const [iconSize, setIconSize] = useState(24)
    const [activeIcon, setActiveIcon] = useState("grid")
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

    const handleIconClick = (iconType, bolean) => {
        setActiveIcon(iconType);
        setDisplay(bolean)
    }
    const getIconColor = (iconType) => (activeIcon === iconType ? "#3277d5" : null);
    const getBorder = (iconType) => (activeIcon === iconType ? "solid 1px #3277d5" : null);
    console.log(display)
    return (
        <div className='iconDiv'>
            <div className='iconName' style={{ color: getIconColor("grid"), borderTop: getBorder("grid") }} onClick={() => handleIconClick("grid", false)}>
                <GridOnSharpIcon style={{ fontSize: iconSize }} />
                {wider ? (<p>GRILLE</p>) : null}
            </div>
            <div className='iconName' style={{ color: getIconColor("list"), borderTop: getBorder("list") }} onClick={() => handleIconClick("list", true)}>
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