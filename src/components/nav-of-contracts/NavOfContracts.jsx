import React from "react";
import { Link } from "react-router-dom";

import "./NavOfContracts.scss";

export const NavOfContracts = () => {
  return (
    <nav className="nav-contracts">
      <Link to="/statistic">
        <button type="button" className="nav-contracts--btn-volver">
          <i className="fas fa-arrow-left icon-volver"></i>
          Volver
        </button>
      </Link>
    </nav>
  );
};
