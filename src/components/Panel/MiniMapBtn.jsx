import { useDispatch, useSelector } from "react-redux"
import { minimapActions } from "../../store/slices/minimap-slice"
import { Tooltip } from 'react-tooltip'
import "./Panel.scss"

export const MiniMapBtn = () => {
  const dispatch = useDispatch()
    const toggleMinimap = useSelector((state) => state.minimap.showMinimap)

  const handleMinimapBtnClick = (e) => {
    e.preventDefault();
    dispatch(minimapActions.toggleMinimap());
  }

  return (
    <div className="minimap-btn-container panel-footer-item">
      <button
        type="text"
        className="minimap-btn panel-footer-item-btn"
        onClick={(e) => handleMinimapBtnClick(e)}
        data-tooltip-id="minimap-btn"
        data-tooltip-content="Add/hide minimap on map"
      >
        {toggleMinimap ? "Hide Minimap" : "Show Minimap"}
        <Tooltip id="minimap-btn" />
      </button>
    </div>
  )
}
