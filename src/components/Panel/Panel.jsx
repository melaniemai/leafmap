import { ResetBtn } from "../Buttons/ResetBtn"
import { POSITION_CLASSES } from "../common"
import Markers from "../Markers/Markers"
import { MiniMapBtn } from "./MiniMapBtn"

import "./Panel.scss"
import { useSelector } from "react-redux"

export const Panel = ({ handleResetClick }) => {
  const markersCount = useSelector((state) => state.markers.totalMarkersCount)

  return (
    <div className={`panel-container`}>
      <div className="panel-markers-container">
        <div className="panel-markers-title">{`Markers (${markersCount})`}</div>
        <span className="panel-markers-sub">Click on list item to travel to marker position on map.</span>
        <Markers />
      </div>
      <div className="panel-footer-container">
        <ResetBtn handleResetClick={handleResetClick} />
      </div>
    </div>
  )
}
