import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

const Header = () => {
  return (
    <Navbar bg="black" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/covid-19.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Hungarian COVID Statistics
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Header
