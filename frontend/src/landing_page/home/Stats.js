import React from "react";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That&apos;s why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh
            crores worth of equity investments.
          </p>
          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, &quot;gamification&quot;, or annoying push
            notifications. High quality apps that you use at your pace, the way
            you like.
          </p>
          <h2 className="fs-4">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don&apos;t just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6">
          <img src="media\ecosystem.png" style={{ width: "90%" }} />
          <div className="text-center">
            <a style={{ textDecoration: "none" }} className="mx-5" href="">
              Explore our products
              <i className="fa-solid fa-arrow-right-long "></i>
            </a>
            <a style={{ textDecoration: "none" }} href="">
              Try kite
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
