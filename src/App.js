import React, { Fragment } from "react";
import "./App.css";

import Navbar from "./components/navbar";
import Dashboard from "./components/layout/Dashboard";

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <Dashboard />
      </div>
    </Fragment>
  );
}

export default App;
