
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { DEFAULT_CENTER, DEFAULT_ZOOM } from "../../common";
import { Panel } from "../Panel/Panel";
import './Map.scss';
import { useDispatch } from "react-redux";
import { markersActions } from "../../store/slices/markers-slice";
import { v4 as uuidv4 } from "uuid"

export const Map = () => {
  const dispatch = useDispatch();
  
  const handleClick = () => {
    dispatch(markersActions.addMarker({id: uuidv4(), name: 'Testing a long name that should be too long', position: DEFAULT_CENTER }))
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
      <Marker position={[38.92966, -77.02971]}>
        <Popup>
          <div onClick={handleClick}>
            A pretty CSS3 popup. <br /> Easily customizable.
          </div>
        </Popup>
      </Marker>
      <Marker position={[38.926182, -77.05764]}>
        <Popup>
          <div onClick={handleClick}>
            A pretty CSS3 popup. <br /> Easily customizable.
          </div>
        </Popup>
      </Marker>
      <Marker position={[39.54895, -83.42109]}>
        <Popup>
          <div onClick={handleClick}>
            A pretty CSS3 popup. <br /> Easily customizable.
          </div>
        </Popup>
      </Marker>
      <Panel />
    </MapContainer>
  )
};