import { useCallback } from "react";
import { DEFAULT_CENTER, DEFAULT_ZOOM } from "../../common";
import { useMap } from "react-leaflet";
import './Panel.scss';

export const ResetBtn = () => {
  const map = useMap();

  const handleResetClick = useCallback(() => {
    map.setView(DEFAULT_CENTER, DEFAULT_ZOOM)
  }, [map]);

  return (
    <div className="reset-btn-container">
      <button
        className="reset-btn"
        onClick={handleResetClick}
      >
        Reset Position
      </button>
    </div>
  )
}
