import React from 'react';
import logo from './Legacy1.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="100%"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          LEGACY
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Form inline>
            <Nav>
              <Nav.Link href="#students" className="nav-list">Students</Nav.Link>
              <Nav.Link href="#investors" className="nav-list">Investors</Nav.Link>
              <Nav.Link href="#about" className="nav-list">About</Nav.Link>
            </Nav>
          </Form>
          <Form inline>
            <FormControl type="text" placeholder="Email" className="mr-sm-2 " />
          </Form>
          <Form inline>
            <Button variant="danger">Waitlist Now!</Button>
          </Form>
        </Navbar.Collapse>
      
      </Navbar>
      <body id="content">
        <div id="content-top">
          <div>
            <h1>Hi this is legacy</h1>
            <p>Welcome and join us</p>
            <Button variant="danger">Waitlist Now!</Button>
          </div>
          <div  id="image">

          </div>
        </div>
        <div id="as-seen">
          <h2>IN PARTNERSHIP WITH</h2>
          <div id="logos">
            <img src={ require('./images/Big-Ideas-logo.png') } />
            <img src={ require('./images/berk-law.jpg') } />
          </div>
          
        </div>
        <div id="students">

        </div>
        <div id="investors">
          
        </div>

      </body>
      <footer>

      </footer>
      
    </div>
  );
}

export default App;
