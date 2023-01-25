import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/popular">Search</Link>
        </li>
        <li>
          <Link to="/top-rated">Top Rated</Link>
        </li>
      </ul>
    </div>
  );
};
