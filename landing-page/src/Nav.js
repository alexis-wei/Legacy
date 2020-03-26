import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="100%"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          LEGACY
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Form inline>
            <Nav>
              <Nav.Link href="#students" className="nav-list">
                Students
              </Nav.Link>
              <Nav.Link href="#investors" className="nav-list">
                Investors
              </Nav.Link>
              <Nav.Link href="#about" className="nav-list">
                About
              </Nav.Link>
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
    );
  }
}
