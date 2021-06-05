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

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>

 {/* <SiWwe
      className="text-purpel"
      style={{ fontSize: "2rem" }}
      />  */}

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
 

