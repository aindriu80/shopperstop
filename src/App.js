import React, { Component } from "react";
import Grocery from "./components/Grocery";
import ShoppingBag from "./components/ShoppingBag";
import Stats from "./components/Stats";

import PocketMoney from "./components/PocketMoney";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row text-center">
          <div className="jumbotron grocery-bg">
            <h1 className="display-4">Shoppers Stop!</h1>
            <p className="lead">Where you can get your daily products</p>
          </div>
        </div>

        <div className="row">
          <PocketMoney />
          <Grocery />
          <ShoppingBag />
          <Stats />
        </div>
      </div>
    );
  }
}

export default App;
