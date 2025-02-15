import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a style={{ color: "white", fontSize: "1.1rem" }} href="#">
          Track tickets
        </a>
      </div>
      <div className="row p-3 m-3 align-left">
        <div className="col-6" id="supportLink">
          <h1 className="fs-4">
            Search for an answer or browse help topics to create a<br></br>
            ticket
          </h1>
          <input
            type="text"
            placeholder="Eg: how do i activate F&O, why my order getting rejected ... "
          ></input>{" "}
          <br></br>
          <a href="#">Track account opening</a>
          <a href="#">Track segment activation</a>
          <a href="#">Intraday margins</a> <br></br>
          <a href="#">Kite user manual</a>
        </div>
        <div className="col-6 px-5">
          <h4>Featured</h4>
          <ol>
            <li style={{ paddingBottom: "2%" }}>
              <a href="#">Latest Intraday leverages and Square-off timings</a>
            </li>
            <li>
              <a href="#">Current Takeovers and Delisting - February 2025</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
