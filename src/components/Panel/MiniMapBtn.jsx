import { useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { minimapActions } from "../../store/slices/minimap-slice"
import { Tooltip } from 'react-tooltip'
import "./Panel.scss"

export const MiniMapBtn = () => {
  const dispatch = useDispatch()
    const toggleMinimap = useSelector((state) => state.minimap.showMinimap)

  const handleMinimapBtnClick = useCallback((e) => {
    e.preventDefault();
    dispatch(minimapActions.toggleMinimap());
  }, [dispatch]);

  return (
    <div className="minimap-btn-container footer-wrapper-item">
      <button
        type="text"
        className="minimap-btn panel-footer-item-btn"
        onClick={(e) => handleMinimapBtnClick(e)}
        data-tooltip-id="minimap-btn"
        data-tooltip-content="Add/hide minimap on map"
      >
        {toggleMinimap ? "Hide Minimap" : "Show Minimap"}
        <Tooltip id="minimap-btn" place={'left'}/>
      </button>
    </div>
  )
}
