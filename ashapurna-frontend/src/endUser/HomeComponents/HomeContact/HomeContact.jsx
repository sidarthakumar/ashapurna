import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import "./HomeContact.css";

function HomeContact() {
  return (
    <Container fluid>
      <Container className="mainContainer">
        <Row className="hrLine">
          <Col>
            <Form className="mt-3 formInput">
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form className="mt-3 formInput">
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form className="mt-3 formInput">
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control type="tel" placeholder="Phone" />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form className="mt-3 formInput">
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form className="mt-3 formInput">
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default HomeContact;
