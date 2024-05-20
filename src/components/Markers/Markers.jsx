import { useSelector } from "react-redux"
import { Tooltip } from "react-tooltip"

import "./Markers.scss"

export const Markers = ({ handleMarkerItemClick }) => {
  const markers = useSelector((state) => state.markers.markers)
  const totalMarkersCount = useSelector(
    (state) => state.markers.totalMarkersCount
  )

  return (
    <div className="markers-container">
      {totalMarkersCount === 0 ? (
        <span className="no-markers-saved">No markers saved.</span>
      ) : (
        <div className="mapped-markers-container">
          {markers.map((marker) => {
            return (
              <div
                className="marker-item"
                key={marker.id}
                onClick={(e) => handleMarkerItemClick(e, marker.position)}
              >
                <div className="marker-info-group">
                  <div
                    className="marker-item-name"
                    data-tooltip-id="marker-item-name"
                    data-tooltip-content={`${marker.name}`}
                  >
                    <b>ID: </b>
                    {marker.name}
                    <Tooltip id="marker-item-name" />
                  </div>
                  <div
                    className="marker-item-position"
                    data-tooltip-id="marker-item-position"
                    data-tooltip-content={`${marker.position}`}
                  >
                    <b>LatLng: </b>
                    {marker.position[0]}, {marker.position[1]}
                    <Tooltip id="marker-item-position" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Markers
