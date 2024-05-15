import { useDispatch, useSelector } from "react-redux"
import "./Panel.scss"
import { minimapActions } from "../../store/slices/minimap-slice"

export const MiniMapBtn = () => {
  const dispatch = useDispatch()
    const toggleMinimap = useSelector((state) => state.minimap.showMinimap)

  const handleMinimapBtnClick = () => {
    dispatch(minimapActions.toggleMinimap());
  }

  return (
    <div className="minimap-btn-container">
      <button className="minimap-btn" onClick={handleMinimapBtnClick}>
        {toggleMinimap ? 'Hide Minimap' : 'Show Minimap'}
      </button>
    </div>
  )
}
