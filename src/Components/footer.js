import React from "react";

export default function Footer(props) {
  return (
    <div className="row">
      <button
        className="btn btn-danger col-2 rounded-0"
        onClick={props.resetCart}
      >
        Reset
      </button>
      <div className="col-8 bg-dark text-white text-center">
        Total Amount: ₹{props.totalAmount}
      </div>
      <button className="btn btn-success col-2 rounded-0">Pay Now</button>
    </div>
  );
}
