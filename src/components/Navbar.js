import logo from "../assets/navbar-logo.svg";
import searchIcon from "../assets/navbar-search.png";
import profileIcon from "../assets/navbar-profile.png";
import cartIcon from "../assets/navbar-cart.png";
import "../css/Navbar.css";
import { Navbar, Nav, Container } from "react-bootstrap";
function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="41"
            height="66"
            className="d-inline-block"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarToggle" />
        <Navbar.Collapse id="navbarToggle">
          <Nav className="ms-auto">
            <Nav.Link href="/">Mac</Nav.Link>
            <Nav.Link href="/">ipad</Nav.Link>
            <Nav.Link href="/">iPhone</Nav.Link>
            <Nav.Link href="/">Watch</Nav.Link>
            <Nav.Link href="/">TV</Nav.Link>
            <Nav.Link href="/">Accessories</Nav.Link>
            <Nav.Link href="/">Offers</Nav.Link>
            <div className="vr d-none d-lg-block text-white align-center mx-2 navbar__separator" />
            <Nav.Link href="/">Support</Nav.Link>
            <Nav.Link href="/">Services</Nav.Link>
            <Nav.Link href="/">Locations</Nav.Link>
          </Nav>
          <Nav className="ms-lg-5 me-auto">
            <Nav.Link href="/">
              <img src={searchIcon} width="24" height="24" alt="seach icon" />
            </Nav.Link>
            <Nav.Link href="/">
              <img
                src={profileIcon}
                width="24"
                height="24"
                alt="profile icon"
              />
            </Nav.Link>
            <Nav.Link href="/">
              <img src={cartIcon} width="24" height="24" alt="cart icon" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default AppNavbar;
