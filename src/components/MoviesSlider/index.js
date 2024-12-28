import Slider from 'react-slick'
import MovieItem from '../MovieItem'
import './index.css'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {moviesList} = props

  const actionMovies = moviesList.filter(movie => movie.categoryId === 'ACTION')
  const comedyMovies = moviesList.filter(movie => movie.categoryId === 'COMEDY')

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  }

  return (
    <div className="container">
      <h1 className="heading">Action Movies</h1>
      <Slider {...settings}>
        {actionMovies.map(each => (
          <MovieItem movie={each} key={each.id} />
        ))}
      </Slider>
      <h1 className="heading">Comedy Movies</h1>
      <Slider {...settings}>
        {comedyMovies.map(each => (
          <MovieItem movie={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
