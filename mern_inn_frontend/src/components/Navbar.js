import React, { useState, useContext } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import bookingContext from '../context/bookings/BookingContext';


function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  let history = useHistory();
  const showSidebar = () => setSidebar(!sidebar);
  const bookingContexts = useContext(bookingContext);
  const { showAlert } = bookingContexts;
  const handleLogout = () => {
    localStorage.removeItem('token');
    history.push('/');
    showAlert("Logged Out Successfully", "success")
    
  }
  return (
    <div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar d-flex justify-content-between">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          {!localStorage.getItem('token') ? <div className="logo" style={{ marginRight: '1.5%' }}>
            <Link to='/login' style={{ textDecoration: "none" }}>
              <Button className="mx-2" variant="outlined">Login</Button>
            </Link>
            <Link to='/signup' style={{ textDecoration: "none" }}>
              <Button className="mx-2" variant="outlined">Signup</Button>
            </Link>
          </div> : <Button className="mx-2" onClick={handleLogout}variant="outlined">Log Out</Button>}
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              if (item.title === "Source Code") {
                return (
                  <li key={index} className={item.cName}>
                    <a
                      href="https://github.com/vedant-shah/MERN-Inn-Frontend"
                      target="blank"
                    >
                      {item.icon}
                      <span id='span'>{item.title}</span>
                    </a>
                  </li>
                );
              } else {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span id='span'>{item.title}</span>
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;
