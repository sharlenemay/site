import React from "react";
import { Container, Button, Jumbotron } from "react-bootstrap";
import "./styles.css";

export default function GetInvolved() {
  return (
    <div>
      <Jumbotron>
        <h2>Get Involved</h2>
      </Jumbotron>
      <Container className="jothefish">
        <h4>Share your knowledge!</h4>
        <p>
          Jo is just a fish... You'll need to tell him about things so he can
          dig deeper and share it with all it's friends. If you know anything
          fishy about a business fill out our form.
        </p>
        <Button
          href="https://docs.google.com/forms/d/e/1FAIpQLSc3Y69xP1v-P10malw7vxZIsZfS9UBjv3LtZWr_BavlWxcdkw/viewform"
          variant="primary"
        >
          Tell us more!
        </Button>
      </Container>
      <Container className="jothefish">
        <h4>Become a Reviewer!</h4>
        <p>
          Jo needs your help in reviewing and investigating the information
          provided. It won't take long and it's super rewarding. Interested?
          Fill out our form below and Jo's team will be in contact.
        </p>
        <Button
          href="https://docs.google.com/forms/d/e/1FAIpQLSfTbXKEcRXQKynzECNQVtulmuJ7l-OAyEWzFYr4uOBqsVfGuQ/viewform"
          variant="primary"
        >
          Tell us more!
        </Button>
      </Container>
    </div>
  );
}
