import { Col, Container, Row, InputGroup, Form, Button } from "react-bootstrap";

function NewsLetter() {
  return (
    <div className="news-letter p-5 mt-5">
      <Container>
        <Row>
          <Col md={6} className="mx-auto">
            <div className="d-flex flex-column gap-3">
              <p className="fs-5 text-center">
                Subscribe our newsletter to be notified when it’ll be live.
              </p>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Email address"
                  aria-label="Email address"
                  className="subscribe-input"
                />
                <Button variant="dark" className="rounded">
                  Subscribe
                </Button>
              </InputGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default NewsLetter;
