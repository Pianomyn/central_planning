import React, { useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { BsStarFill } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import "./MenuBar.css";
import { MdOutlineArrowBack, MdOutlineArrowForward } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "./menu-icons/Logo";
import ChangeStatus from "./menu-icons/ChangeStatus";
import NavIcons from "./menu-icons/NavIcons";

type MenuBarProps = {
  menuBarActive: boolean;
  handleMenuBarClick: Function;
};

/* TODO: Store all buttons for menu bar in an array.
Then, map each array element to a dive for the justify-content-center
Maybe change type to be Array<FC> instead of Array<any>
Finally, pass a function to change the value of menuBarActive as a prop*/
export default function MenuBar({
  menuBarActive,
  handleMenuBarClick,
}: MenuBarProps) {

  return (
    <Navbar variant="dark" bg="dark">
      <div id="menu-bar">
        <div className="d-flex flex-column">
          <IconContext.Provider value={{ size: "28px" }}>
            <Logo menuBarActive={menuBarActive} />
            <ChangeStatus handleMenuBarClick={handleMenuBarClick} />
            <NavIcons menuBarActive={menuBarActive} />
          </IconContext.Provider>
        </div>
      </div>
    </Navbar>
  );
}
