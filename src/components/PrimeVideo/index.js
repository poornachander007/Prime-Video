// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const bannerImgUrl =
  'https://assets.ccbp.in/frontend/react-js/prime-video-img.png '
const PrimeVideo = props => {
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(
    eachItem => eachItem.categoryId === 'ACTION',
  )
  const comedyMoviesList = moviesList.filter(
    eachItem => eachItem.categoryId !== 'ACTION',
  )
  return (
    <div className="prime_container">
      <img src={bannerImgUrl} alt="prime video" className="prime_image" />
      <h1 className="slider_heading"> Action Movies </h1>
      <MoviesSlider moviesList={actionMoviesList} />
      <h1 className="slider_heading"> Comedy Movies </h1>
      <MoviesSlider moviesList={comedyMoviesList} />
    </div>
  )
}
export default PrimeVideo
