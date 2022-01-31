import * as React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { BsStarFill } from "react-icons/bs";
import { IconContext } from "react-icons/lib";

export default function MenuBar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Navbar variant="dark" bg='dark'>
          <h3 style = {{color:'white'}}>Central Planning <IconContext.Provider value = {{color:'red'}}><BsStarFill></BsStarFill></IconContext.Provider></h3>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    </div>
  );
}
