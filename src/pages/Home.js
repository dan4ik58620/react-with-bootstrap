import React from "react";
import Slider from "../components/Slider";
import { Container, Row, Col, Card } from "react-bootstrap";
import img1 from "../images/1.jpeg";
import img2 from "../images/2.jpeg";
import img3 from "../images/3.jpeg";

function Home() {
  return (
    <>
      <h2>Home</h2>
      <Slider />
      <Container style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <Row>
          <Col>
            <Card>
              <Card.Img variant="top" src={img1} style={{ height: "200px" }} />
              <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>Text</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={img2} style={{ height: "200px" }} />
              <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>Text</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={img3} style={{ height: "200px" }} />
              <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>Text</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
        <Col md ={5}>
          <img src={img1} height={200} alt="pp" />
        </Col>
        <Col md={7}>
          <h2>Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            eligendi dolore minima aut cum tempora et veritatis culpa, nihil
            inventore numquam iusto vitae facere, consequuntur nisi magni eius
            totam, fugit provident asperiores nemo eos. Temporibus tenetur
            officia velit maxime, omnis, explicabo facilis atque ea, nulla
            quidem ullam odit voluptatum fugit!
          </p>
        </Col>
        </Row>

        <Row>
        <Col md ={5}>
          <img src={img2} height={200} alt="pp" />
        </Col>
        <Col md={7}>
          <h2>Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            eligendi dolore minima aut cum tempora et veritatis culpa, nihil
            inventore numquam iusto vitae facere, consequuntur nisi magni eius
            totam, fugit provident asperiores nemo eos. Temporibus tenetur
            officia velit maxime, omnis, explicabo facilis atque ea, nulla
            quidem ullam odit voluptatum fugit!
          </p>
        </Col>
        </Row>

        <Row>
        <Col md ={5}>
          <img src={img3} height={200} alt="pp" />
        </Col>
        <Col md={7}>
          <h2>Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            eligendi dolore minima aut cum tempora et veritatis culpa, nihil
            inventore numquam iusto vitae facere, consequuntur nisi magni eius
            totam, fugit provident asperiores nemo eos. Temporibus tenetur
            officia velit maxime, omnis, explicabo facilis atque ea, nulla
            quidem ullam odit voluptatum fugit!
          </p>
        </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
