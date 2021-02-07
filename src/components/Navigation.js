import React, { useState } from "react";
import { Navbar, Nav, Button, Container, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img21 from "../images/logo.jpeg";

const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav .nav-lin {
    color: red;
    &:hover {
      color: purple;
    }
  }
`;

function Navigation() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <Styles>
        <Navbar collabsOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand> <img src={img21} alt="logo" height={50} width={50}></img> </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse>
              <Nav>
                <Nav.Link>
                  <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/about">About</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/contacts">Contacts</Link>
                </Nav.Link>
              </Nav>

              <Nav>
                <Button variant="primary" className="mr-2" onClick={handleShow}>
                  login
                </Button>
                <Button variant="primary" onClick={handleShow}>
                  SignUp
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="Email"
                placeholder="Enter your Email, please"
              ></Form.Control>
              <Form.Text className="text-muted">Descriptioned</Form.Text>
            </Form.Group>
          </Form>

          <Form>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password, please"
              ></Form.Control>
              <Form.Text className="text-muted">Descriptioned</Form.Text>
            </Form.Group>
          </Form>

          <Form>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                placeholder="Remember me ,please"
              ></Form.Check>
              <Form.Text className="text-muted">Descriptioned</Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Navigation;
