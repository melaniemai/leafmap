import { useDispatch, useSelector } from "react-redux"
import {
  useState,
  Fragment,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from "react"
import { useMapEvents, Marker, Popup } from "react-leaflet"
import { markersActions } from "../../store/slices/markers-slice"
import { v4 as uuidv4 } from "uuid"
import { useIsMount } from "../../hooks/hooks"

const LocationMarker = () => {
  const dispatch = useDispatch()
  const isMount = useIsMount()

  const [markers, setMarkers] = useState([])
  const uniqueMarkers = useMemo(() => [...new Set(markers)], [markers])

  const map = useMapEvents({
    click(e) {
      markers.push(e.latlng)
      setMarkers((prevValue) => [...prevValue, e.latlng])
    },
  })

  useEffect(() => {
    if (isMount) {
      return
    } else {
      console.info(uniqueMarkers.at(-1)[0])
      dispatch(
        markersActions.addMarker({
          id: uuidv4(),
          name: "",
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
        <Marker position={marker}>
          <Popup>grsvdwsv</Popup>
        </Marker>
      ))}
    </Fragment>
  )
}

export default LocationMarker
