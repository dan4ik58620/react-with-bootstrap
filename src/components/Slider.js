import React from "react";
import img1 from "../images/1.jpeg";
import img2 from "../images/2.jpeg";
import img3 from "../images/3.jpeg";
import { Carousel } from "react-bootstrap";

function Slider() {
  return (
    <Carousel>
      <Carousel.Item style={{ height: "900px" ,width:"1950px"}}>
        <img src={img1} alt="img" className="d-block w-100" />
        <Carousel.Caption>
          <h2>S.T.A.L.K.E.R</h2>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ height: "900px",width:"1950px" }}>
        <img src={img2} alt="img" className="d-block w-100" />
        <Carousel.Caption>
          <h2>Call of Duty Modern Warfare</h2>
          <p>Remastered</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ height: "900px",width:"1950px" }}>
        <img src={img3} alt="img" className="d-block w-100" />
        <Carousel.Caption>
          <h2>Team Fortress 2</h2>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
