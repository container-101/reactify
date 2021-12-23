import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "@src/shared/App";

const Root = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
  );
};

export default Root;
