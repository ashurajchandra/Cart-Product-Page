import React, { Component } from "react";
import { Navbar, Header, MainComponent, CartItem } from "./index";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <MainComponent />
      </div>
    );
  }
}

export default App;
