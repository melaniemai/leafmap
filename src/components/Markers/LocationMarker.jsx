import { useDispatch } from "react-redux"
import {
  useState,
  Fragment,
  useEffect,
  useMemo,
} from "react"
import { useMapEvents, Marker, Popup } from "react-leaflet"
import { markersActions } from "../../store/slices/markers-slice"
import { v4 as uuidv4 } from "uuid"
import { useIsMount } from "../../hooks/hooks"

const LocationMarker = ({ markerRef }) => {
  const dispatch = useDispatch();
  const isMount = useIsMount();
  const [markers, setMarkers] = useState([]);
  const uniqueMarkers = useMemo(() => [...new Set(markers)], [markers]);
  
  useMapEvents({
    click(e) {
      markers.push(e.latlng)
      setMarkers((prevValue) => [...prevValue, e.latlng])
    },
  })

  useEffect(() => {
    if (isMount) {
    } else {
      dispatch(
        markersActions.addMarker({
          id: uuidv4(),
          position: [
            uniqueMarkers.at(-1)?.["lat"],
            uniqueMarkers.at(-1)?.["lng"],
          ],
        })
      )
    }
  }, [dispatch, isMount, uniqueMarkers])

  return (
    <Fragment>
      {markers.map((marker) => (
        <Marker ref={markerRef} position={marker} key={marker.id}>
          <Popup key={marker.id}>
            <div>
              {`[ ${marker.lat}, ${marker.lng} ]`}
            </div>
          </Popup>
        </Marker>
      ))}
    </Fragment>
  )
}

export default LocationMarker
