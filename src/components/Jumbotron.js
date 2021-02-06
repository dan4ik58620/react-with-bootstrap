import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import styled from "styled-components";
import img1 from "../images/1.jpeg";

const Styles = styled.div`
  .jumbo {
    background: url(${img1}) no-repeat fixed bottom;
    bacground-size: cover;
    color: white;
    height: 500px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background: black;
    opacity: 0.7;
    position: absolute;
    z-index: -2;
    top: 0;
    left: 0;
    right: 0;
  }
`;

function Jumbo() {
  return (
    <Styles>
      <Jumbotron className="jumbo" fluid>
        <div classname="overlay"></div>
        <Container>
          <h1>Main title</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
        </Container>
      </Jumbotron>
    </Styles>
  );
}

export default Jumbo;
