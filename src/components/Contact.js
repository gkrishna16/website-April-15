import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { Container, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Amplify from "aws-amplify";
import { API } from "aws-amplify";

import awsExports from "../aws-exports";
Amplify.configure(awsExports);

async function addContact() {
  const data = {
    body: {
      name: formState.name,
      email: formState.email,
      message: formState.message,
    },
  };
  console.log(data);
  const apiData = await API.post("webfrapp", "/contact", data);
  console.log({ apiData });
  alert("Mail sent");
  loadAgain();
}

const formState = { name: "", email: "", message: "" };

function updateFormState(key, value) {
  formState[key] = value;
}

function loadAgain() {
  return window.location.reload(true);
}

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Cpage>
        <div className="form-container">
          {/* <h1>Contact</h1> */}
          <div className="form-section">
            <Container>
              <div>
                <h3>Get in touch</h3>
                <br />
                <Form>
                  <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      placeholder="Name"
                      onChange={(e) => updateFormState("name", e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      placeholder="Email"
                      onChange={(e) => updateFormState("email", e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      placeholder="Message"
                      onChange={(e) =>
                        updateFormState("message", e.target.value)
                      }
                    />
                  </Form.Group>
                  <Button onClick={addContact}>Submit</Button>
                </Form>
              </div>
            </Container>
          </div>{" "}
          <div className="right-section">
            <h1>Please fill the form.</h1>
            <p>And I will get back to you in no time.</p>
          </div>
        </div>
      </Cpage>
    </div>
  );
};

const Cpage = styled.div`
  .form-container {
    width: 90%;
    max-width: 1200px;
    background: white;
    height: 70vh;
    display: grid;
    grid-template-columns: 60% auto;
    align-items: center;
    /* justify-content: center; */
    margin: 0 auto;
    grid-gap: 15px;
    /* background: yellow; */
  }
  .right-section {
    /* align-items: right; */
    text-align: right;
  }
  Form {
    /* border: 1px solid black; */
    padding: 1em;
    box-shadow: 5px 5px 5px 5px grey;
  }

  @media only screen and (max-width: 1110px) {
    .right-section {
      /* align-items: right; */
      text-align: left;
    }
  }
`;

export default Contact;
