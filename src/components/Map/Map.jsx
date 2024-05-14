
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { DEFAULT_CENTER, DEFAULT_ZOOM } from "../../common";
import { Panel } from "../Panel/Panel";
import './Map.scss';
import { Markers } from "../Markers/Markers";
import { useDispatch } from "react-redux";
import { markersActions } from "../../store/slices/markers-slice";

export const Map = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(markersActions.addMarker({id: 1, name: 'Test', position: DEFAULT_CENTER }))
    console.info('popup click');
  }

  return (
    <MapContainer center={DEFAULT_CENTER} zoom={DEFAULT_ZOOM} className="map">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={DEFAULT_CENTER}>
          <Popup>
            <div onClick={handleClick}>
              A pretty CSS3 popup. <br /> Easily customizable.
            </div>
          </Popup>
      </Marker>
      <Panel />
      <Markers />
    </MapContainer>
  )
};