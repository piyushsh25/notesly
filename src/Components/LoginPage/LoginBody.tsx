import { Form, Row, Col, Button, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../SignupPage/Signup.css";
export function LoginBody() {
  return (
    <Form className="signup-form login-form">
      <Navbar.Brand className="header-header-name login-header">
        {" "}
        Login
      </Navbar.Brand>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Button variant="primary">Submit</Button>
      <Link to="/signup">Have an account already?</Link>
    </Form>
  );
}
