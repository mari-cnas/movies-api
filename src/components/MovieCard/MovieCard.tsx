import { memo, ReactElement } from 'react'

import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { MovieType } from 'types/MovieType'

import { ColoredCard, MovieImage } from './styled'

interface IBaseComponentProps {
  children?: React.ReactNode
  movie: MovieType
}

const MovieCard: React.FC<IBaseComponentProps> = ({ movie, children }) => {
  children as ReactElement
  return (
    <ColoredCard className="flex-column  my-4 w-100">
      <div>
        <Link to={`/movies/${movie.slug}`}>
          <MovieImage aspectRatio="1x1" coverimage={movie.cover}>
            <div />
          </MovieImage>
        </Link>
      </div>
      <div>
        <Card.Body>
          <Link to={`/movies/${movie.slug}`}>
            <Card.Title className="py-5 px-3">{movie.title}</Card.Title>
          </Link>
        </Card.Body>
      </div>
    </ColoredCard>
  )
}

export default memo(MovieCard)
