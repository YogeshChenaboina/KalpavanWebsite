import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import logo from './images/logo.png'
import styles from './navBarCss.module.css'
import {NavLink} from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#"><img
              src={logo}
              width="80"
              height="40"
              className={`${styles.img} d-inline-block align-top`} 
              alt="logo"
            /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className={`${styles.toggle} text-center`} />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 ms-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
             <NavLink to='/home'     className="nav-link">Home</NavLink>
             <NavLink to='/about'    className="nav-link" >About Us</NavLink>
             <NavLink to='/courses'  className="nav-link" >Our Courses</NavLink>
             <NavLink to='/gallery'  className="nav-link" >Gallery</NavLink>
             <NavLink to='/contacts' className="nav-link">Contact Us</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar
