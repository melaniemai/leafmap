
import { MapContainer, TileLayer } from "react-leaflet";
import { DEFAULT_CENTER, DEFAULT_ZOOM } from "../common";
import { Panel } from "../Panel/Panel";
import { useSelector } from "react-redux";
import { MiniMapControl } from "../Panel/MiniMapControl";
import LocationMarker from "../Markers/LocationMarker";
import { useRef, useCallback } from "react";
import { ResetBtn } from "../Buttons/ResetBtn";
import { MiniMapBtn } from "../Panel/MiniMapBtn";
import './Map.scss';

export const Map = () => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const toggleMinimap = useSelector((state) => state.minimap.showMinimap);

  // const onClickShowMarker = () => {
  //   const map = mapRef.current
  //   if (!map) {
  //     return
  //   }

  //   map.flyTo(DEFAULT_CENTER, 13)

  //   const marker = markerRef.current
  //   if (marker) {
  //     marker.openPopup()
  //   }
  // }

  const handleResetClick = useCallback((e) => {
    e.preventDefault();
    const map = mapRef.current;
    if (!map) {
      return;
    };

    map.flyTo(DEFAULT_CENTER, 13);
  }, []);

  return (
    <div className="main-container">
      <MapContainer
        center={DEFAULT_CENTER}
        zoom={DEFAULT_ZOOM}
        scrollWheelZoom={false}
        className="map"
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {toggleMinimap && <MiniMapControl position="topright" />}
        <LocationMarker ref={markerRef} />
      </MapContainer>
      <div className="sub-wrapper">
        <div className="panel-wrapper">
          <Panel ref={mapRef} />
        </div>
        <div className="footer-wrapper">
          <ResetBtn handleResetClick={handleResetClick} />
          <MiniMapBtn />
        </div>
      </div>
      {/* <button onClick={onClickShowMarker}>Show marker</button> */}
    </div>
  )
};