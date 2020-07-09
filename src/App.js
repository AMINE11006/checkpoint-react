import React from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <header>
        <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
      </Navbar>
      </header>
      <div className="Formulaire">
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
              <Col sm="3">
                  <Form.Control type="text"></Form.Control>
              </Col>
          </Form.Group>
          <Form.Group>
            <Form.Label>Surname</Form.Label>
              <Col sm="3">
                  <Form.Control type="text"></Form.Control>
              </Col>
          </Form.Group>
          <Form.Group>
            <Form.Label>Age</Form.Label>
              <Col sm="3">
                  <Form.Control type="text"></Form.Control>
              </Col>
          </Form.Group>
          <Button type="submit" variant="btn btn-success">Submit</Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
