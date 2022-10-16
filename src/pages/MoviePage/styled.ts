import styled from 'styled-components'

interface ICoverProps {
  coverimage: string
}

export const MainBody = styled.section`
  background-color: black;
`

export const Subtitles = styled.h3`
  background-color: black;
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.5rem;
  color: #f5c518;
`

export const MovieBanner = styled.section<ICoverProps>`
  background: ${({ coverimage }) => `rgba(0, 0, 0, 0.7) url(${coverimage})`};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 400px;
  background-blend-mode: darken;
`
export const Categories = styled.span`
  color: black;
  border: none;
  background-color: #f5c518;
  padding: 5px 20px;
  border-radius: 20px;
  font-size: 18px;
  align-items: center;
  width: fit-content;
  height: 30px;
  flex-wrap: wrap;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-right: 5px;
`
export const Trailer = styled.p`
  /* unvisited link */
  a:link {
    color: black;
    text-decoration: none;
  }

  /* visited link */
  a:visited {
    color: black;
  }

  /* mouse over link */
  a:hover {
    color: blue;
  }

  /* selected link */
  a:active {
    color: blue;
  }
`
