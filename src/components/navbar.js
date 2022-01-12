import React from "react"
import {Nav,Container,Navbar} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPastafarianism ,faGlobe, faInfo, faMask} from '@fortawesome/free-solid-svg-icons'

class navbar extends React.Component {
    render() {
      return (<>
                <Navbar className="navbar" collapseOnSelect fixed="top"  expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/"><FontAwesomeIcon icon={faPastafarianism} /> MonsterBlog</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/about"><FontAwesomeIcon icon={faMask} /> About</Nav.Link>
      
      {/* <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Nav>
      <Nav.Link href="/contact"><FontAwesomeIcon icon={faInfo} /> Contact</Nav.Link>
      <Nav.Link href="https://manansharma.herokuapp.com"><FontAwesomeIcon icon={faGlobe} /> Website</Nav.Link>
      {/* <Nav.Link eventKey={2} href="#memes">
        
      </Nav.Link> */}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>     
            </>);
    }
  }

export default navbar