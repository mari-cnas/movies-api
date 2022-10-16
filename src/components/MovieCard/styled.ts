import { Ratio } from 'react-bootstrap'
import styled from 'styled-components'

interface ICoverProps {
  coverimage: string
  aspectRatio: string
}

export const ColoredCard = styled.div`
  background-size: 100% 200%;
  background-image: linear-gradient(to bottom, black 50%, grey 50%);
  -webkit-transition: background-position 0.5s;
  -moz-transition: background-position 0.5s;
  transition: background-position 0.5s;

  &:hover {
    background-position: 0 -100%;
  }
`
export const MovieImage = styled(Ratio)<ICoverProps>`
  background-image: ${({ coverimage }) => `url(${coverimage})`};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-bottom: 5px solid #f5c518;
`
