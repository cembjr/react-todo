import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/jquery/dist/jquery"
import Menu from "./components/menu";
import Routes from "./Routes/routes";

const App = () => {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Menu />
          <Routes />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
