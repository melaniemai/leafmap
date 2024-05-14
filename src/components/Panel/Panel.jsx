import './Panel.scss';
import { ResetBtn } from './ResetBtn';

export const Panel = () => {  
  return (
    <div className="panel-container leaflet-top leaflet-right">
      <h1 className="panel-title">Bookmarks</h1>
      <div className="panel-markers-container">
        <h2 className="panel-markers-title">Markers</h2>
        
      </div>
      <ResetBtn />
    </div>
  )
}