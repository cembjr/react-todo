import React from "react";
import { Link } from "react-router-dom";

const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        TodoApp
      </Link>
      <div className="navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="/todos">
            <span className="nav-item nav-link">Tarefas</span>
          </Link>
          <Link to="/about">
            <span className="nav-item nav-link">Sobre</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
