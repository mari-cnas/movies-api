import { memo, ReactElement } from 'react'

import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { ActorType } from 'types/ActorType'

import { CharacterImage, RoundCardContainer } from './styled'

interface IBaseComponentProps {
  children?: React.ReactNode
  actor: ActorType
}

const ActorCard: React.FC<IBaseComponentProps> = ({ actor, children }) => {
  children as ReactElement
  return (
    <RoundCardContainer className="flex-column  my-4 w-100">
      <div>
        <Link to={`/actors/${actor.slug}`}>
          <CharacterImage aspectRatio="1x1" coverimage={actor.picture}>
            <div />
          </CharacterImage>
        </Link>
      </div>
      <div>
        <Card.Body>
          <Link to={`/actors/${actor.slug}`}>
            <Card.Title className="py-5 px-3">{actor.name}</Card.Title>
          </Link>
        </Card.Body>
      </div>
    </RoundCardContainer>
  )
}

export default memo(ActorCard)
