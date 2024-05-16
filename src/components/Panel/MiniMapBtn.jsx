import { useDispatch, useSelector } from "react-redux"
import { minimapActions } from "../../store/slices/minimap-slice"
import { Tooltip } from 'react-tooltip'
import "./Panel.scss"

export const MiniMapBtn = () => {
  const dispatch = useDispatch()
    const toggleMinimap = useSelector((state) => state.minimap.showMinimap)

  const handleMinimapBtnClick = () => {
    dispatch(minimapActions.toggleMinimap());
  }

  return (
    <div className="minimap-btn-container panel-footer-item">
      <button
        className="minimap-btn panel-footer-item-btn"
        onClick={handleMinimapBtnClick}
        data-tooltip-id="minimap-btn"
        data-tooltip-content="Add/hide minimap on map"
      >
        {toggleMinimap ? "Hide Minimap" : "Show Minimap"}
        <Tooltip id="minimap-btn" />
      </button>
    </div>
  )
}
