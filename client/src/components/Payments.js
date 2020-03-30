import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import * as actions from "../actions";

class Payments extends Component {
  render() {
    // debugger;
    return (
      <StripeCheckout
        name="Emaily"
        description="5 reload credits for $5.00"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
