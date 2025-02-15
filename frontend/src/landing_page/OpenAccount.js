import React from "react";

function OpenAccount() {
  return (
    <div className="container mt-5 p-5">
      <div className="row text-center">
        <h1 className="mt-5 pb-3">Open a Zerodha account</h1>
        <p className="pb-3">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <a href="http://localhost:3000/signup"><button
          style={{
            width: "15%",
            margin: "0 auto",
            height: "50px",
            fontSize: "20px",
          }}
          type="button"
          className="btn btn-primary pb-3"
        >
          Signup up for free
        </button></a>
      </div>
    </div>
  );
}

export default OpenAccount;
