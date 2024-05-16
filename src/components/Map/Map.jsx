
import { MapContainer, TileLayer } from "react-leaflet";
import { DEFAULT_CENTER, DEFAULT_ZOOM } from "../common";
import { Panel } from "../Panel/Panel";
import './Map.scss';
import { useDispatch, useSelector } from "react-redux";
import { MiniMapControl } from "../Panel/MiniMapControl";
import LocationMarker from "../Markers/LocationMarker";
import { markersActions } from "../../store/slices/markers-slice";
import { v4 as uuidv4 } from "uuid";

export const Map = () => {
  const dispatch = useDispatch();
  const toggleMinimap = useSelector((state) => state.minimap.showMinimap);
  
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
      {toggleMinimap && <MiniMapControl position="topright" />}
      <LocationMarker />   
      <Panel />
    </MapContainer>
  )
};