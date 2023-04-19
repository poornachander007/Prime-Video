// Write your code here
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <div className="popup_container">
      <Popup
        modal
        trigger={
          <button type="button" className="img_btn">
            <img
              src={thumbnailUrl}
              alt="thumbnail"
              className="thumbnail_image"
            />
          </button>
        }
        className="popup_content"
        position="center center"
      >
        {close => (
          <div className="modal_container">
            <button
              className="close_btn"
              type="button"
              onClick={() => close()}
              data-testid="closeButton"
            >
              <IoMdClose width={30} height={30} className="closeIcon" />
            </button>
            <ReactPlayer url={videoUrl} />
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
