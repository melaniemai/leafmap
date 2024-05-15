import { useState } from "react"
import { useSelector } from "react-redux"
import { MdDelete } from "react-icons/md"
import { FaCopy, FaCheck } from "react-icons/fa6"
import { Tooltip } from "react-tooltip"

import './Markers.scss';

export const Markers = () => {
  const [isCopied, setIsCopied] = useState(false)
  const markers = useSelector((state) => state.markers.markers)
  const totalMarkersCount = useSelector(
    (state) => state.markers.totalMarkersCount
  );

  const handleMarkerDelete = () => {

  };

  const copyTextToClipboard = async (text) => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text)
    } else {
      return document.execCommand("copy", true, text)
    }
  }

  const handleCoordsCopy = (e, pos) => {
    e.preventDefault();
    copyTextToClipboard(`[${pos}]`)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true)
        setTimeout(() => {
          setIsCopied(false)
        }, 3000)
      })
      .catch((err) => {
        console.log(err)
      })
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
                    data-tooltip-content={`${isCopied ? 'Copied!' : 'Copy coordinates'}`}
                    onClick={(e) => handleCoordsCopy(e, marker.position)}
                  >
                    {isCopied ? (
                      <FaCheck className="icon copied" />
                    ) : (
                      <FaCopy className="icon copy" />
                    )}
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
