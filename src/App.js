import React from "react";
import Layout from "./containers/layout/layout";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout />
      </div>
    </BrowserRouter>
  );
}

export default App;
