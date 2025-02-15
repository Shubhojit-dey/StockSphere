import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row">
        <p style={{ fontSize: "1.5rem", color: "gray" }}>
          To create a ticket, select a relevant topic
        </p>
        <div className="col-4 align-left">
          <p style={{ fontSize: "125%" }}>
            <i
              style={{ paddingRight: "1.8%" }}
              className="fa-solid fa-circle-plus"
            ></i>
            Account Opening
          </p>
          <div className="supportstyle">
            <a style={{ textDecoration: "none" }} href="#">
              Getting started
            </a>
            <a style={{ textDecoration: "none" }} href="#">
              Online
            </a>
            <a style={{ textDecoration: "none" }} href="#">
              Offline
            </a>
            <a style={{ textDecoration: "none" }} href="#">
              Charges
            </a>
            <a style={{ textDecoration: "none" }} href="#">
              Company, Partnership and HUF
            </a>
            <a style={{ textDecoration: "none" }} href="#">
              Non Resident Indian (NRI)
            </a>
          </div>
        </div>
        <div className="col-4">
          <p style={{ fontSize: "125%" }}>
            <i
              style={{ paddingRight: "1.8%" }}
              className="fa-regular fa-user"
            ></i>
            Your Zerodha Account
          </p>
          <div className="supportstyle">
            <a style={{ textDecoration: "none" }} href="#">
              Login credentials
            </a>
            <a style={{ textDecoration: "none" }} href="#">
              Your Profile
            </a>
            <a style={{ textDecoration: "none" }} href="#">
              Account modification and segment addition
            </a>
            <a style={{ textDecoration: "none" }} href="#">
              CMR & DP ID
            </a>
            <a style={{ textDecoration: "none" }} href="#">
              Nomination
            </a>
            <a style={{ textDecoration: "none" }} href="#">
              Transfer and conversion of shares
            </a>
          </div>
        </div>
        <div className="col-4">
          <p style={{ fontSize: "125%" }}>
            <i
              style={{ paddingRight: "1.8%" }}
              className="fa-solid fa-chart-line"
            ></i>
            Trading and Markets
          </p>
          <div className="supportstyle">
            <a style={{ textDecoration: "none" }} href="#">
              Trading FAQs
            </a>
            <a style={{ textDecoration: "none" }} href="#">
              Kite
            </a>
            <a style={{ textDecoration: "none" }} href="#">
              Margins
            </a>
            <a style={{ textDecoration: "none" }} href="#">
              Product and order types
            </a>
            <a style={{ textDecoration: "none" }} href="#">
              Corporate actions
            </a>
            <a style={{ textDecoration: "none" }} href="#">
              Kite features
            </a>
          </div>
        </div>
      </div>
      <div className="row mt-5 mb-5">
        <div className="col-4 align-left">
          <p style={{ fontSize: "125%" }}>
            <i
              style={{ paddingRight: "1.8%" }}
              className="fa-regular fa-credit-card"
            ></i>
            Funds
          </p>
          <div className="supportstyle">
            <a style={{ textDecoration: "none" }} href="#">
              Fund withdrawal
            </a>
            <a style={{ textDecoration: "none" }} href="#">
              Adding funds
            </a>
            <a style={{ textDecoration: "none" }} href="#">
              Adding bank accounts
            </a>
            <a style={{ textDecoration: "none" }} href="#">
              eMandates
            </a>
          </div>
        </div>
        <div className="col-4 align-left">
          <p style={{ fontSize: "125%" }}>
            <i
              style={{ paddingRight: "1.8%" }}
              className="fa-solid fa-circle-notch"
            ></i>
            Console
          </p>
          <div className="supportstyle">
            <a style={{ textDecoration: "none" }} href="#">
              IPO
            </a>
            <a style={{ textDecoration: "none" }} href="#">
              Portfolio
            </a>
            <a style={{ textDecoration: "none" }} href="#">
              Funds statement
            </a>
            <a style={{ textDecoration: "none" }} href="#">
              Profile
            </a>
            <a style={{ textDecoration: "none" }} href="#">
              Reports
            </a>
            <a style={{ textDecoration: "none" }} href="#">
              Referral program
            </a>
          </div>
        </div>
        <div className="col-4 align-left">
          <p style={{ fontSize: "125%" }}>
            <i
              style={{ paddingRight: "1.8%" }}
              className="fa-brands fa-bitcoin"
            ></i>
            Coin
          </p>
          <div className="supportstyle">
            <a style={{ textDecoration: "none" }} href="#">
              Understanding mutual funds and Coin
            </a>
            <a style={{ textDecoration: "none" }} href="#">
              Coin app
            </a>
            <a style={{ textDecoration: "none" }} href="#">
              Coin web
            </a>
            <a style={{ textDecoration: "none" }} href="#">
              Transactions and reports
            </a>
            <a style={{ textDecoration: "none" }} href="#">
              National Pension Scheme (NPS)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
