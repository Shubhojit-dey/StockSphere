import React from "react";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div style={{ marginBottom: "10%" }} className="container pt-5">
      <div className="row mb-2 p-3 ">
        <h1 className="fs-2 text-center">People</h1>
      </div>
      <div className="row mt-2 p-1" style={{ fontSize: "17px" }}>
        <div className="col-6 pl-5">
          <img
            style={{ borderRadius: "100%", width: "60%", marginLeft: "150px" }}
            src="media/shubho2.png"
          />
          <h1 style={{ paddingLeft: "8.5%" }} className="fs-2 text-center">
            SHUBHO
          </h1>
          <p style={{ paddingLeft: "8.5%" }} className="text-muted text-center">
            Founder, CEO
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>
            Playing basketball is his zen.<br></br>
            <br></br>Connect on{" "}
            <Link style={{ textDecoration: "none" }} to="/">
              Homepage
            </Link>{" "}
            /{" "}
            <Link style={{ textDecoration: "none" }} to="/">
              TradingQnA
            </Link>{" "}
            /{" "}
            <Link
              style={{ textDecoration: "none" }}
              to="https://x.com/ShubhoBroo"
            >
              Twitter
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
