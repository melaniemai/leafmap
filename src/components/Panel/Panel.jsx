import { ResetBtn } from "../Buttons/ResetBtn"
import Markers from "../Markers/Markers"
import CoordsSection from "./CoordsSection"

import "./Panel.scss"
import { useSelector } from "react-redux"

export const Panel = ({ handleResetClick, handleMarkerItemClick }) => {
  const markersCount = useSelector((state) => state.markers.totalMarkersCount)

  return (
    <div className={`panel-container`}>
      <div className="panel-markers-container">
        <div className="panel-markers-title">{`Markers (${markersCount})`}</div>
        <span className="panel-markers-sub">
          Click on a list item to travel to and copy coordinates.
        </span>
        <Markers
          handleMarkerItemClick={handleMarkerItemClick}
        />
      </div>
      <div className="panel-footer-container">
        <CoordsSection handleMarkerItemClick={handleMarkerItemClick}/>
        <ResetBtn handleResetClick={(e) => handleResetClick(e)} />
      </div>
    </div>
  )
}
