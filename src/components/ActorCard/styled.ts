import { Card, Ratio, Row } from 'react-bootstrap'
import styled from 'styled-components'

interface ICoverProps {
  coverimage: string
  aspectRatio: string
}

export const CharacterImage = styled(Ratio)<ICoverProps>`
  background-image: ${({ coverimage }) => `url(${coverimage})`};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 50%;
`

export const RoundCardContainer = styled.div`
  background-size: 100% 200%;

  &:hover {
    background-position: 0 -100%;
  }
  #rcard {
    border-style: none;
  }

  h3 {
    font-family: playfair display, serif;
    background-color: #fff;
    color: #333;
    font-size: 23px;
    font-weight: 400;
    text-align: center;
  }
`
