import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row">
        <p style={{ textDecoration: "none" }} className="text-center fs-5">
          Want to know more about our technology stack? Check out the{" "}
          <a href="#">Zerodha.tech</a> blog.
        </p>
        <div className="row text-center p-5">
          <h2 className="text-center">The Zerodha Universe</h2>
          <p className="text-center">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
          <div className="col-4 p-3">
            <img
              style={{ width: "55%" }}
              src="media/zerodhaFundhouse.png"
            ></img>
            <p
              style={{ fontSize: "0.9rem", marginTop: "5%" }}
              className="text-muted"
            >
              Our asset management venture<br></br>that is creating simple and
              transparent index<br></br>funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 p-3">
            <img style={{ width: "55%" }} src="media\sensibullLogo.svg"></img>
            <p
              style={{ fontSize: "0.9rem", marginTop: "5%" }}
              className="text-small text-muted"
            >
              Options trading platform that lets you<br></br>create strategies,
              analyze positions, and examine<br></br>data points like open
              interest, FII/DII, and more.
            </p>
          </div>
          <div className="col-4 p-3">
            <img style={{ width: "55%" }} src="media\smallcaseLogo.png"></img>
            <p
              style={{ fontSize: "0.9rem", marginTop: "5%" }}
              className="text-small text-muted"
            >
              Investment research platform<br></br>that offers detailed insights
              on stocks,<br></br>sectors, supply chains, and more.
            </p>
          </div>
          <div className="col-4 p-3">
            <img style={{ width: "55%" }} src="media\streakLogo.png"></img>
            <p
              style={{ fontSize: "0.9rem", marginTop: "5%" }}
              className="text-muted"
            >
              Systematic trading platform<br></br>that allows you to create and
              backtest<br></br>
              strategies without coding.
            </p>
          </div>
          <div className="col-4 p-3">
            <img style={{ width: "55%" }} src="media\goldenpiLogo.png"></img>
            <p
              style={{ fontSize: "0.9rem", marginTop: "5%" }}
              className="text-small text-muted"
            >
              Thematic investing platform<br></br>that helps you invest in
              diversified<br></br>
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col-4 p-3">
            <img style={{ width: "55%" }} src="media\dittoLogo.png"></img>
            <p
              style={{ fontSize: "0.9rem", marginTop: "5%" }}
              className="text-small text-muted"
            >
              Personalized advice on life<br></br>and health insurance. No spam
              <br></br>and no mis-selling.
            </p>
          </div>
          <div className="row">
            <a href="https://stocksphere-1.onrender.com/signup"><button
              style={{
                width: "15%",
                margin: "5% auto",
                height: "50px",
                fontSize: "20px",
              }}
              type="button"
              className="btn btn-primary text-center"
            >
              Sign up for free
            </button></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Universe;
