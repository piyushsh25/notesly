import { Form, Row, Col, Button, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Signup.css";
export function SignUpBody() {
  return (
    <Form className="signup-form">
      <Navbar.Brand className="header-header-name login-header">
        {" "}
        Signup
      </Navbar.Brand>

      <Row className="mb-3">
        <Row>
          <Col>
            <Form.Control placeholder="first name" />
          </Col>
          <Col>
            <Form.Control placeholder="last name" />
          </Col>
        </Row>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Button variant="primary">Submit</Button>
      <Link to="/login">Have an account already?</Link>
    </Form>
  );
}
