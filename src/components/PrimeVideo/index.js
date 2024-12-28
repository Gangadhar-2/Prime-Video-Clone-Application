import './index.css'
import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props

  return (
    <div className="primeVideo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        className="img"
        alt="prime video"
      />
      <MoviesSlider moviesList={moviesList} />
    </div>
  )
}
export default PrimeVideo
