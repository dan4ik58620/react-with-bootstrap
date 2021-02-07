import React from "react";
import { Jumbotron, Container, Table } from "react-bootstrap";
import styled from "styled-components";
import img0 from "../images/0.jpeg";

const Styles = styled.div`
  .jumbo {
    background: url(${img0}) no-repeat fixed bottom;
    bacground-size: cover;
    color: white;
    height: 800px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background: black;
    opacity: 0.7;
    position: absolute;
    z-index: -2;
    top: -1;
    left: 1;
    right: 1;
  }
`;

function Jumbo() {
  return (
    <Styles>
      <Jumbotron className="jumbo" fluid>
        <div classname="overlay"></div>
        <Container style={{ color: "black" }}>

        <Container>
        <h2>Оценки игр:</h2>
        <div className=""></div>
        <Table striped bordered hover >

          <tbody>
            <tr>
              <td>
               S.T.A.L.K.E.R.: Shadow Of Chernobyl общий рейтинг игры: 4.5
              </td>
            </tr>
            <tr>
              <td>
              Call of Duty 4: Modern Warfare общий рейтинг игры :4.6
              </td>
            </tr>

            <tr>
              <td>Team Fortress 2  общий рейтинг игры: 4.2</td>
            </tr>

            <tr>
              <td>FARCRY 3 общий рейтинг игры: 4.6</td>
            </tr>

            <tr>
              <td>Mafia: The City of Lost Heaven общий рейтинг игры: 4.6</td>
            </tr>

            <tr>
              <td>Assassin’s Creed II общий рейтинг игры: 4.7</td>
            </tr>

            <tr>
              <td>Bulletstorm общий рейтинг игры: 4.5</td>
            </tr>

            <tr>
              <td>Valorant общий рейтинг игры: 4.0</td>
            </tr>

            <tr>
              <td>GTA: San Andreas общий рейтинг игры: 4.5</td>
            </tr>

            <tr>
              <td>PUBG Lite общий рейтинг игры: 3.3</td>
            </tr>
          </tbody>
        </Table>
      </Container>

        </Container>
      </Jumbotron>
    </Styles>
  );
}

export default Jumbo;
