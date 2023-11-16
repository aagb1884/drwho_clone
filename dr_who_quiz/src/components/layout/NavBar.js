import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return ( 
      <section className="navbar">
        <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/how">How to Play</NavLink>
        </li>
        <li>
          <NavLink to="/high-scores">High Scores</NavLink>
        </li>
      </ul>
      </section>
     );
}
 
export default NavBar;