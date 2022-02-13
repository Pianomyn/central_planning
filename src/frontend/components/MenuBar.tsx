import React, { useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { BsStarFill } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import "./MenuBar.css";
import { MdOutlineArrowBack, MdOutlineArrowForward } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";

type MenuBarProps = {
  menuBarActive: boolean;
};

/* TODO: Store all buttons for menu bar in an array.
Then, map each array element to a dive for the justify-content-center
Maybe change type to be Array<FC> instead of Array<any>
Finally, pass a function to change the value of menuBarActive as a prop*/
export default function MenuBar({ menuBarActive }: MenuBarProps) {
  // Assume the following 2 arrays are of the same size
  var menuButtons: Array<any> = menuBarActive ? ["Home"] : ["H"];
  const links = ["/"];

  return (
    <Navbar variant="dark" bg="dark">
      <div id="menu-bar">
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-center logo">
            <IconContext.Provider value={{ color: "#DC3545", size: "28px"}}>
              <BsStarFill></BsStarFill>
            </IconContext.Provider>
          </div>
          <div className="d-flex justify-content-center">
            <Button id="menu-status-button" variant="danger">
              <AiOutlineMenu />
            </Button>
          </div>
          {renderButtons(menuButtons, links)}
        </div>
      </div>
    </Navbar>
  );
}

function renderButtons(buttons: Array<any>, links: Array<string>) {
  var counter = 0;
  return buttons.map((button) => {
    var toReturn = (
      <div className="d-flex justify-content-center">
        <Nav>
          <Nav.Link href={links[counter]}>{button}</Nav.Link>
        </Nav>
      </div>
    );
    counter += 1;
    return toReturn;
  });
}

/* 
        <Navbar variant="dark" bg="dark">
          <h4 style={{ color: "white" }}>
            Central Planning{" "}
            <IconContext.Provider value={{ color: "red" }}>
              <BsStarFill></BsStarFill>
            </IconContext.Provider>
          </h4>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Navbar>
        */
