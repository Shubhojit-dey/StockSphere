import React from "react";

function Pricing() {
  return (
    <div className="container p-1">
      <div className="row p-5">
        <div className="col-4 p-5">
          <h1 className="fs-2 mb-4">Unbeatable pricing</h1>
          <p className="fs-5">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a style={{ textDecoration: "none" }} href="">
            Explore our products
            <i className="fa-solid fa-arrow-right-long mx-2"></i>
          </a>
        </div>

        <div className="col-2"></div>

        <div className="col-6">
          <div className="row mt-5 p-5 text-center">
            <div className="col p-2 border">
              <h1>₹0</h1>
              <p className="p-2">
                Free equity delivery and<br></br>
                &nbsp;direct mutual funds
              </p>
            </div>
            <div className="col p-2 border">
              <h1>₹20</h1>
              <p className="pt-2">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
