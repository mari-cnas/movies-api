import { memo, ReactElement } from 'react'

import { Container } from 'react-bootstrap'

import logo from 'assets/imdb-logo.png'

import { FooterBg } from './styled'

interface IBaseComponentProps {
  children?: React.ReactNode
}

const Footer: React.FC<IBaseComponentProps> = ({ children }) => {
  children as ReactElement

  return (
    <FooterBg className="py-5">
      <Container>
        <ul className="list-unstyled d-flex">
          <li className="ms-3">
            <a className="link-dark" href="#">
              twitter
            </a>
          </li>
          <li className="ms-3">
            <a className="link-dark" href="#">
              instagram
            </a>
          </li>
          <li className="ms-3">
            <a className="link-dark" href="#">
              facebook
            </a>
          </li>
        </ul>
        <div className="row">
          <footer className="py-3 my-4">
            <ul className="nav justify-content-center pb-3 mb-3">
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-muted">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-muted">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-muted">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-muted">
                  About
                </a>
              </li>
            </ul>
            <p className="text-center text-muted">&copy; 2022 Company, Inc</p>
          </footer>
        </div>
      </Container>
    </FooterBg>
  )
}

export default memo(Footer)
