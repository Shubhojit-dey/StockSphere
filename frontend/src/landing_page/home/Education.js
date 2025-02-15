import React from "react";

function Education() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src="media/education.svg" style={{ width: "68%" }}></img>
        </div>
        <div className="col-6">
          <h1 className="fs-2 mb-4">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            <br></br>
            covering everything from the basics to advanced trading.
          </p>
          <a style={{ textDecoration: "none" }} href="">
            Versity<i className="fa-solid fa-arrow-right-long mx-2"></i>
          </a>

          <p className="mt-4">
            TradingQ&A, the most active trading and investment community in
            <br></br>India for all your market related queries.
          </p>
          <a style={{ textDecoration: "none" }} href="">
            TrandingQ&A<i className="fa-solid fa-arrow-right-long mx-2"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
