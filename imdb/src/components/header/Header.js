/*import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="data:image/jpeg;base64,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" /></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
            </div>
        </div>
    )
}

export default Header*/
import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">UNCENSORED</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/movies/popular">POPULAR</Nav.Link>
            <Nav.Link href="/movies/top_rated">TOP RATED</Nav.Link>
            <Nav.Link href="/movies/upcoming">UPCOMING</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;