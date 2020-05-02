import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Directory from "./components/DirectoryComponent";
import { CAMPSITES } from "./shared/campsite";
import "./App.css";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
