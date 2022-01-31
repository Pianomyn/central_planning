import * as React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";

export default function MenuBar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Navbar variant="light">
          <Nav>
            <Nav.Link href="#/">Home</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    </div>
  );
}
