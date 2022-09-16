import { Container, Row, Col } from "react-bootstrap";
import footerImage1 from "../assets/footer-image-1.svg";
import footerImage2 from "../assets/footer-image-2.svg";
import footerImage3 from "../assets/footer-image-3.svg";
import footerImage4 from "../assets/footer-image-4.svg";
function Footer() {
  return (
    <footer className="footer p-3">
      <div className="footer__first my-5">
        <Container>
          <Row>
            <Col>
              <img className="d-block mx-auto" src={footerImage1} />
            </Col>
            <Col>
              <img className="mx-auto d-block" src={footerImage2} />
            </Col>
            <Col>
              <img className="mx-auto d-block" src={footerImage3} />
            </Col>
            <Col>
              <img className="mx-auto d-block" src={footerImage4} />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer__down">
        <p className="text-center text-white">
          Copyright © 2022 - All rights reserved
        </p>
      </div>
    </footer>
  );
}
export default Footer;
