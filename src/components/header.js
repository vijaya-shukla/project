import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { Navbar, Nav } from "react-bootstrap"
import { VscGithub} from "react-icons/vsc"
import {FaFacebook} from "react-icons/fa"
import { SiWwe } from "react-icons/si";
const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

 <SiWwe
      className="text-purpel"
      style={{ fontSize: "2rem" }}
      /> 

      <Navbar.Brand className="font-weight-bold text-warning">WanderAround</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/" className="text-light text-centre" >
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/about" className="text-light text-centre ">
              About
            </Link>
          </Nav.Link>
          
          {/* <Nav.Link>
            <Link to="/trip" className="text-light text-centre ">
              trip
            </Link>
          </Nav.Link> */}

          <Nav.Link>
            <Link to="/blog" className="text-light text-centre">
              Trips
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link to="/blogs" className="text-light text-centre" >
              Blogs
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link to="/contact" className="text-light text-centre">
              Contact
            </Link>
          </Nav.Link>



                  </Nav>
        <Nav>
          <Nav.Link>
            <Link to="/blog" className="text-light">
            <FaFacebook
                className="text-primary m-3"
                style={{ fontSize: "2rem" }}
              />
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/blog" className="text-light">
            <VscGithub
                className="text-gray-dark m-3"
                style={{ fontSize: "2rem" }}
              />
            </Link>
          </Nav.Link>
        </Nav>
        <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            Dark mode
          </label>
        )}
      </ThemeToggler>
      </Navbar.Collapse>
    </Navbar>

    
  )
}
export default Header
 

