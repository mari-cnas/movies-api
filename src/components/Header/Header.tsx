import { memo, ReactElement } from 'react'

import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from 'react-bootstrap'

import logo from 'assets/imdb-logo.png'

import { Menu } from './styled'

interface IBaseComponentProps {
  children?: React.ReactNode
}

const Header: React.FC<IBaseComponentProps> = ({ children }) => {
  children as ReactElement

  return (
    <Menu bg="dark" expand={false}>
      <Container>
        <img src={logo} alt="logo" className="my-3" />
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-false" />
        <p>Menu</p>
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-false"
          aria-labelledby="offcanvasNavbarLabel-expand-false"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-false">
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown
                title="Dropdown"
                id="offcanvasNavbarDropdown-expand-false"
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>

        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
        </Form>
        <Button variant="outline-success">Search</Button>
      </Container>
    </Menu>
  )
}

export default memo(Header)
