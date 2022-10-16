import { memo, useEffect } from 'react'

import { Carousel, Col, Container, Row, Spinner } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

import anabelle from 'assets/anabelle.jpg'
import terror from 'assets/Filmes-de-terror.jpg'
import twins from 'assets/Twins-Shining.jpg'

import { useActors } from 'context/ActorsContext'
import { useMovies } from 'context/MoviesContext'

import ActorCard from 'components/ActorCard'
import Banner from 'components/Banner'
import Footer from 'components/Footer'
import Header from 'components/Header'
import MovieCard from 'components/MovieCard'

import useTitle from 'hooks/useTitle'

import { MainBody, Subtitles } from './styled'

const Home: React.FC = () => {
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()
  const { movies, isLoading, totalPages, currentPage, fetchMovies, error } =
    useMovies()
  const { actors, fetchActors } = useActors()

  useEffect(() => {
    setTitle(t('Movies API'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  useEffect(() => {
    setTitle('Movies')
  }, [setTitle])
  // const [search, setSearch] = useState('');

  return (
    <>
      <Header />
      <MainBody>
        <Container className="d-flex flex-column">
          <div className="justify-content-center">
            <Banner />
          </div>
          <Row>
            <Col md={8}>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={terror}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={twins}
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={anabelle}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col md={4}>
              <section>
                <Subtitles>A seguir</Subtitles>
              </section>
            </Col>
          </Row>
          <Subtitles>Filmes e Séries</Subtitles>
          <div>
            {isLoading && (
              <div className="d-flex aling-items-center justify-content-center">
                <Spinner animation="grow" variant="primary" className="my-5" />
              </div>
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {!isLoading && !error && (
              <div className="d-flex flex-column my-5">
                <Row xs={1} md={4} className=" g-3 justify-content-center">
                  {movies.map((movie) => (
                    <Col key={movie.id} className="d-flex ">
                      <MovieCard movie={movie} />
                    </Col>
                  ))}
                </Row>
              </div>
            )}
            {!isLoading && !error && movies.length === 0 && (
              <p>Nenhum resultado encontrado</p>
            )}
          </div>
          <Subtitles>Atores</Subtitles>
          <div>
            {isLoading && (
              <div className="d-flex aling-items-center justify-content-center">
                <Spinner animation="grow" variant="primary" className="my-5" />
              </div>
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {!isLoading && !error && (
              <div className="d-flex flex-column my-5">
                <Row xs={1} md={4} className=" g-3 justify-content-center">
                  {actors.map((actor) => (
                    <Col key={actor.id} className="d-flex ">
                      <ActorCard actor={actor} />
                    </Col>
                  ))}
                </Row>
              </div>
            )}
            {!isLoading && !error && movies.length === 0 && (
              <p>Nenhum resultado encontrado</p>
            )}
          </div>
        </Container>
      </MainBody>
      <Footer />
    </>
  )
}

export default memo(Home)
