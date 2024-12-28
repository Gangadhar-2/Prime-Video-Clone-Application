import {useState} from 'react'
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import './index.css'

const MovieItem = props => {
  const {movie} = props
  const {thumbnailUrl, videoUrl} = movie
  const [isOpen, setIsOpen] = useState(false)

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <li className="movie-item">
        {/* Thumbnail click opens the popup */}
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          className="thumbnail"
          onClick={togglePopup}
        />
      </li>

      {/* Popup to display video player */}
      {isOpen && (
        <Popup
          open={isOpen}
          closeOnDocumentClick
          onClose={togglePopup}
          className="popup-content"
        >
          <div className="popup-container">
            <button
              type="button"
              className="close-button"
              onClick={togglePopup}
              data-testid='closeButton'
            >
              &times;
            </button>
            <ReactPlayer
              url={videoUrl}
              controls
              width="100%"
              height="100%"
              className="react-player"
            />
          </div>
        </Popup>
      )}
    </>
  )
}

export default MovieItem
