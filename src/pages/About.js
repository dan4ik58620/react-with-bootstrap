import React, { Component } from "react";
import Jumbo from "../components/Jumbotron";
import { Container } from "react-bootstrap";
import withAuthContext from "../components/hoc/withAuthContext";
import Pexel from "../components/Pexel";
import api from "../serveces/pexelApi";

class About extends Component {
  state = {
    query: "cats",
    page: 1,
    gallery: [],
  };
  componentDidMount() {
    const { query, page } = this.state;
    api.getFetch(query, page).then((result) => {
      console.log(result);
      this.setState({ gallery: result });
    });
  }
  componentDidUpdate(prevProps, prevState) {}
  render() {
    console.log(this.props.auth);
    const { auth } = this.props;
    const { gallery } = this.state;
    return (
      <>
        {auth.user ? <h2>About {auth.user.name}</h2> : <h2>About</h2>}

        <Jumbo />
        <Container>
          <h1>Hello</h1>
          <Pexel gallery={gallery} />
        </Container>
      </>
    );
  }
}

export default withAuthContext(About);
