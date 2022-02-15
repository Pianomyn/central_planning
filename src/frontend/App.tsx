import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuBar from "./components/MenuBar";
import "./App.css";

function App() {
  const [menuBarActive, setMenuBarStatus] = useState(false);
  var menuBarClass = menuBarActive ? "menu-bar-open" : "menu-bar-closed";
  var menuColumns = menuBarActive ? "col-2 p-0" : "col-1 p-0";
  var appColumns = menuBarActive ? "col-10 p-0" : "col-11 p-0";

  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <div className={menuColumns}>
            <div id="menu-bar" className={menuBarClass}>
              <MenuBar menuBarActive={menuBarActive} handleMenuBarClick={handleMenuBarClick}/>
            </div>
          </div>
          <div className={appColumns}>
            <Routes></Routes>
          </div>
        </div>
      </div>
    </Router>
  );
  
  function handleMenuBarClick(){
    setMenuBarStatus(!menuBarActive)
  }
}

export default App;
