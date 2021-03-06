import React, { useState } from "react";
import { Navbar, Nav, Button, Container, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import withAuthContext from "./hoc/withAuthContext";

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

const styles = {
  container: {
    display: "flex",
    aliginItems: "center",
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 900,
    marginRight: 12,
  },
};

function Navigation({ auth }) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <Styles>
        <Navbar collabsOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              logo
            </Navbar.Brand>
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
                {auth.user ? (
                  <div style={styles.container}>
                    <img
                      src={auth.user.avatar}
                      alt={auth.user.name}
                      width="32"
                      style={styles.avatar}
                    />
                    <span style={styles.name}>Hello, {auth.user.name}</span>
                    <button type="button" onClick={auth.onLogout}>
                      {" "}
                      logOut{" "}
                    </button>
                  </div>
                ) : (
                  <>
                    <Button
                      variant="primary"
                      className="mr-2"
                      onClick={auth.onLogin}
                    >
                      login
                    </Button>
                    <Button variant="primary" onClick={auth.onLogin}>
                      Sign Out
                    </Button>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
      {/* <Modal show={show} onHide={handleClose}>
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
      </Modal> */}
    </>
  );
}

export default withAuthContext(Navigation);
