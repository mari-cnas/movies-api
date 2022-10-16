import { memo, useEffect } from 'react'

import { Container, ListGroup, Spinner } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { useMovies } from 'context/MoviesContext'

import Banner from 'components/Banner'
import Footer from 'components/Footer'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

import { Categories, MainBody, MovieBanner, Subtitles, Trailer } from './styled'

const MoviePage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()
  const { isLoading, fetchMovie, movie, error } = useMovies()
  const { slug } = useParams()

  useEffect(() => {
    setTitle(t('Movies API'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  useEffect(() => {
    setTitle('Movies')
  }, [setTitle])

  useEffect(() => {
    if (slug) fetchMovie(slug)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug])

  return (
    <>
      <Header />
      <MainBody>
        <Container className="d-flex flex-column">
          <div>
            {isLoading && (
              <div className="d-flex aling-items-center justify-content-center">
                <Spinner animation="grow" variant="primary" className="my-5" />
              </div>
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {!isLoading && movie && (
              <div className="d-flex flex-column my-5">
                <Subtitles>
                  {movie.title} ({movie.year})
                </Subtitles>
                <div className="d-flex">
                  {movie.categories.map((category) => (
                    <Categories>{category.name}</Categories>
                  ))}
                </div>
                <MovieBanner coverimage={movie.cover} />
                <ListGroup variant="flush">
                  <ListGroup.Item>Diretor: {movie.director}</ListGroup.Item>
                  <ListGroup.Item>Duração: {movie.duration}</ListGroup.Item>
                  <ListGroup.Item>Score: {movie.score}</ListGroup.Item>
                  <ListGroup.Item>
                    <Trailer>
                      <a href={movie.trailer}>Assista ao Trailer</a>
                    </Trailer>
                  </ListGroup.Item>
                  <ListGroup.Item>Sinopse: {movie.description}</ListGroup.Item>
                </ListGroup>
                {movie.actors?.map((actor) => (
                  <p>{actor.name}</p>
                ))}
              </div>
            )}
          </div>
        </Container>
      </MainBody>
      <Footer />
    </>
  )
}

export default memo(MoviePage)
