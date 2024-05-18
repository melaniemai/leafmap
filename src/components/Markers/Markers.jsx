import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { MdDelete } from "react-icons/md"
import { FaCopy } from "react-icons/fa6"
import { Tooltip } from "react-tooltip"

import "./Markers.scss"
import { markersActions } from "../../store/slices/markers-slice"

export const Markers = () => {
  const dispatch = useDispatch();
  const [isCopied, setIsCopied] = useState(false)
  const markers = useSelector((state) => state.markers.markers)
  const totalMarkersCount = useSelector(
    (state) => state.markers.totalMarkersCount
  )

  // useEffect(() => {
  //   let timer = setTimeout(() => {
  //     setIsCopied(false)
  //   }, 2000);

  //   return () => clearTimeout(timer)
  // }, [])

  // const handleMarkerDelete = (id) => {
  //   dispatch(markersActions.removeMarker(id));
  // }

  // const copyTextToClipboard = async (text) => {
  //   if ("clipboard" in navigator) {
  //     return await navigator.clipboard.writeText(text)
  //   } else {
  //     return document.execCommand("copy", true, text)
  //   }
  // }

  // const handleCoordsCopy = (e, pos) => {
  //   e.preventDefault()
  //   copyTextToClipboard(`[${pos}]`)
  //     .then(() => {
  //       // If successful, update the isCopied state value
  //       setIsCopied(true)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }

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
                {/* <div className="marker-action-group">
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
                    data-tooltip-content={`${
                      isCopied ? "Copied!" : "Copy coordinates"
                    }`}
                    onClick={(e) => handleCoordsCopy(e, marker.position)}
                  >
                    <FaCopy className="icon copy" />
                    <Tooltip id="marker-item-copy" />
                  </div>
                </div> */}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Markers
