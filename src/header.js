import Navbar from "react-bootstrap/Navbar";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";
import { IndexLinkContainer } from "react-router-bootstrap";

export default function Header() {
  return (
    <>
      <Navbar style={{ backgroundColor: "#b7f5ab" }}>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <IndexLinkContainer to="/page1">
            <Nav.Link>Another Page</Nav.Link>
          </IndexLinkContainer>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <IndexLinkContainer to="/login">
              <NavDropdown.Item>Login</NavDropdown.Item>
            </IndexLinkContainer>
            <IndexLinkContainer to="/logout">
              <NavDropdown.Item>Logout</NavDropdown.Item>
            </IndexLinkContainer>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Item className="btn btn-info">Signout</Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
}
