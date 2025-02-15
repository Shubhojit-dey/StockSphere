import React from "react";

function Hero() {
  return (
    <div className="container mb-5 border-bottom mt-2 p-2">
      <div className="row text-center mb-5">
        <h1 style={{ fontSize: "46px" }} className="mt-5 pb-3">
          Zerodha Products
        </h1>
        <p className="pb-2 fs-4">
          Sleek, modern, and intuitive trading platforms
        </p>
        <p style={{ fontSize: "1.1rem" }} className="pb-3 text-muted mb-5">
          Check out our{" "}
          <a style={{ textDecoration: "none" }} href="#">
            investment offerings →
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
