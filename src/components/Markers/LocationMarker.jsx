import { useDispatch, useSelector } from "react-redux"
import { useState, Fragment, useEffect, useCallback, useRef, useMemo } from "react"
import { useMapEvents, Marker, Popup } from "react-leaflet"
import { markersActions } from "../../store/slices/markers-slice"
import { v4 as uuidv4 } from "uuid"
import { DEFAULT_CENTER } from "../common"

const LocationMarker = () => {
  const dispatch = useDispatch()
  const [markers, setMarkers] = useState([])
  const marks = useSelector((state) => state.markers.markers);

  // const map = useMapEvents({
  //   click(e) {
  //     markers.push(e.latlng);
  //     setMarkers((prevValue) => [...prevValue, e.latlng]);
  //   },
  // })

  return (
    <Fragment>
      {markers.map((marker) => 
        <Marker position={marker} >
          <Popup>
            grsvdwsv
          </Popup>
        </Marker>
      )}
    </Fragment>
  )
}

export default LocationMarker;