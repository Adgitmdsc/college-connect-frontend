import React, { Component } from 'react'
import { Container, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'

export class Navba extends Component {
  render() {
    return (
      <Navbar style={{ background: "lightgreen" }} expand="lg" >
        <Container fluid>
          <Navbar.Brand style={{ flex: "0.7" }} href="/">
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4cTALizuqA1klfzMF7BS9NIh4X59QaWiFIg&usqp=CAU"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            ADGITM Connect</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px', flex: "0.5", display: "flex", justifyContent: 'space-between' }}
              navbarScroll
            >
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/club">Clubs</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link href="/sign">Sign Up</Nav.Link>

            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default Navba