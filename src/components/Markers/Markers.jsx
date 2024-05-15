import { Fragment } from "react"
import { useSelector } from "react-redux"
import { MdDelete } from "react-icons/md"
import { FaCopy } from "react-icons/fa6"
import { Tooltip } from "react-tooltip"

import './Markers.scss';

export const Markers = () => {
  const markers = useSelector((state) => state.markers.markers)
  const totalMarkersCount = useSelector(
    (state) => state.markers.totalMarkersCount
  );

  const handleMarkerDelete = () => {

  };

  const handleCoordsCopy = () => {

  };

  return (
    <div className="markers-container">
      {totalMarkersCount === 0 ? (
        <span className="no-markers-saved">No markers saved.</span>
      ) : (
        <div className="mapped-markers-container">
          {markers.map((marker) => {
            return (
              <div className="marker-item" key={marker.id}>
                <div className="marker-info-group">
                  <div className="marker-item-name">Name: {marker.name}</div>
                  <div className="marker-item-position">
                    Position: {marker.position[0]}, {marker.position[1]}
                  </div>
                </div>
                <div className="marker-action-group">
                  <div
                    className="marker-item-delete"
                    data-tooltip-id="marker-item-delete"
                    data-tooltip-content="Delete saved marker"
                    onClick={handleMarkerDelete}
                  >
                    <MdDelete className="icon" />
                    <Tooltip id="marker-item-delete" />
                  </div>
                  <div
                    className="marker-item-copy"
                    data-tooltip-id="marker-item-copy"
                    data-tooltip-content="Copy coordinates"
                    onClick={handleCoordsCopy}
                  >
                    <FaCopy className="icon" />
                    <Tooltip id="marker-item-copy" />
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
