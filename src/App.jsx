//import React, Provider, AddTask, ListTask and store
import React from "react";
import { Provider } from "react-redux";
import AddTask from "./AddTask";
import ListTask from "./ListTask";
import store from "./store";

//import Row, Col, bootstrap.min.css, Container, Nav and Navbar
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Container fluid>
          <Row style={{ height: "70px" }}>
            <Navbar bg="primary" data-bs-theme="dark">
              <Container>
                <Navbar.Brand href="#home" style={{ fontWeight: "bold" }}>
                  TODO
                </Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#features">About</Nav.Link>
                  <Nav.Link href="#pricing">Contact</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </Row>
        </Container>
        {/*Header*/}
        <Container>
          <Row>
            <h1
              id=""
              style={{
                width: "60%",
                margin: "20px auto",
                border: "1px solid grey",
                textAlign: "center",
                border: "1px solid rgb(176, 176, 176)",
                borderRadius: "1px",
                boxShadow:
                  "0 4px 8px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1)",
                transition: "box-shadow 0.3s ease-in-out",
                padding: "10px",
                fontSize: "150%",
              }}
            >
              TODO LIST
            </h1>
          </Row>
        </Container>

        {/* Add Task container */}

        <Container>
          <Row>
            <div
              id=""
              style={{
                width: "60%",
                margin: "-10px auto",
                border: "1px solid grey",
                textAlign: "center",
                border: "1px solid rgb(176, 176, 176)",
                backgroundColor: "#fff",
                borderRadius: "1px",
                boxShadow:
                  "0 4px 8px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1)",
                transition: "box-shadow 0.3s ease-in-out",
                padding: "50px",
                paddingLeft: "50px",
                paddingRight: "50px",
              }}
            >
              {/* Render AddTask component */}
              <AddTask />
            </div>
          </Row>
        </Container>

        {/* Task container */}

        <Container>
          <Row>
            <div
              id=""
              style={{
                width: "60%",
                margin: "20px auto",
                border: "1px solid grey",
                textAlign: "center",
                border: "1px solid rgb(176, 176, 176)",
                backgroundColor: "#fff",
                borderRadius: "1px",
                boxShadow:
                  "0 4px 8px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1)",
                transition: "box-shadow 0.3s ease-in-out",
                padding: "50px",

                paddingLeft: "50px",
                paddingRight: "50px",
              }}
            >
              {/* Render ListTask component */}
              <ListTask />
            </div>
          </Row>
        </Container>

        {/*Footer container*/}
        <Container fluid>
          <Row
            style={{
              height: "300px",
              backgroundColor: "#0d6efd",
              textAlign: "center",
              padding: "10px",
              color: "white",
              marginTop: "50px",
            }}
          >
            <div
              style={{
                textAlign: "center",
                color: "white",

                fontSize: "100%",
              }}
            >
              copyright @ gomycode 2023. All Rights Reserved.
            </div>
          </Row>
        </Container>
      </Provider>
    </>
  );
};

export default App;
