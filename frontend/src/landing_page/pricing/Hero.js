import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center mt-5">
        <h1 className="fs-1">Charges</h1>
        <p
          style={{ opacity: "0.6", marginBottom: "10%" }}
          className="fs-4 text-muted mt-2"
        >
          List of all charges and taxes
        </p>
        <div className="row text-center p-5">
          <div className="col-4">
            <img style={{ width: "70%" }} src="media\pricingEquity.svg"></img>
            <h2>Free equity delivery</h2>
            <p>
              All equity delivery investments (NSE, BSE),<br></br>are absolutely
              free — ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-4">
            <img style={{ width: "70%" }} src="media\intradayTrades.svg"></img>
            <h2>Intraday and F&O trades</h2>
            <p>
              Flat ₹ 20 or 0.03% (whichever is lower) per<br></br>executed order
              on intraday trades across<br></br>equity, currency, and commodity
              trades. Flat<br></br>₹20 on all option trades.
            </p>
          </div>
          <div className="col-4">
            <img style={{ width: "70%" }} src="media\pricingEquity.svg"></img>
            <h2>Free direct MF</h2>
            <p>
              All direct mutual fund investments are<br></br>absolutely free — ₹
              0 commissions & DP<br></br>charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
