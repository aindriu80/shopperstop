import React, { Component } from "react";

import { connect } from "react-redux";

class PocketMoney extends Component {
  render() {
    // console.log("PocketMoney = ", this.props.pocketMoney);
    return (
      <div className="row">
        <h2 className="text-center">
          You have <span className="label label-success">€</span>
          {this.props.pocketMoney} amount to spend on Grocery Today!
        </h2>
        <br />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pocketMoney: state.pocketMoney
  };
}
export default connect(
  mapStateToProps,
  null
)(PocketMoney);
