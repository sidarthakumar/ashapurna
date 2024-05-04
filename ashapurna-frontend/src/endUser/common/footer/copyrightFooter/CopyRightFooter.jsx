import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./CopyRightFooter.css";

function CopyRightFooter() {
  return (
    <Container className="copyRightFluid" fluid>
      <Container className="mainContainer py-3">
        <Row>
            <Col>Copyright © 2023 Ashapurna Buildcon Limited</Col>
        </Row>
      </Container>
    </Container>
  );
}

export default CopyRightFooter;
