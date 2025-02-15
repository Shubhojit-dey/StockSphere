import React from "react";
import Hero from "./Hero";
import Brokerage from "./Brokerage";
import OpenAccount from "../OpenAccount";

function PricingPage() {
  return (
    <>
      <Hero />
      <OpenAccount />
      <h3 className="text-center m-5">
        <a style={{ textDecoration: "none" }} href="#">
          Calculate your costs upfront
        </a>{" "}
        using our brokerage calculator
      </h3>
      <Brokerage />
    </>
  );
}

export default PricingPage;
