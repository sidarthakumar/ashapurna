import logo from "../../images/logo.webp";
import { Container, Col, Navbar, Nav, Row, Button } from "react-bootstrap";
import "./Header.css";
let Header = () => {
  return (
    <Container fluid className="headerFluidContainer">
      <Container className="mainContainer">
        <Row>
          <Col>
            <Navbar className="position-relative">
              <Container fluid className="navbarContainer">
                <Navbar.Brand href="#home">
                  <img
                    src={logo}
                    className="position-absolute top-0"
                    width={150}
                    alt=""
                  />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Nav className="gap-3 align-items-center">
                  <Nav.Link>Home</Nav.Link>
                  <Nav.Link>About Us</Nav.Link>
                  <Nav.Link>Projects</Nav.Link>
                  <Nav.Link>Media and Events</Nav.Link>
                  <Nav.Link>Blogs</Nav.Link>
                  <Nav.Link>Contact Us</Nav.Link>
                  <Button className="headerButton">ENQUIRE</Button>
                </Nav>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default Header;
