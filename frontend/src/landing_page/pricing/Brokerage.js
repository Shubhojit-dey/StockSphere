import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row">
        <h3>Charges explained</h3>
      </div>
      <div className="row">
        <div className="col-6">
          <div>
            <h5 style={{ fontSize: "0.9rem", opacity: "0.9" }}>
              Securities/Commodities transaction tax
            </h5>
            <p style={{ fontSize: "0.8rem" }}>
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell sides when trading equity delivery.
              Charged only on selling side when trading intraday or on F&O.
              <br></br> <br></br>
              When trading at Zerodha, STT/CTT can be a lot more than the
              brokerage we charge.<br></br>Important to keep a tab.
            </p>
          </div>
          <div>
            <h5 style={{ fontSize: "0.9rem", opacity: "0.9" }}>
              Transaction/Turnover Charges
            </h5>
            <p style={{ fontSize: "0.8rem" }}>
              Charged by exchanges (NSE, BSE, MCX) on the value of your
              transactions. <br></br>
              <br></br>
              BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
              to ₹10,000 per crore<br></br>w.e.f 01.01.2016. (XC and XD groups
              have been merged into a new group X w.e.f 01.12.2017)
              <br></br>
              <br></br>
              BSE has revised transaction charges in SS and ST groups to
              ₹1,00,000 per crore of gross<br></br>turnover.
              <br></br>
              <br></br>
              BSE has revised transaction charges for group A, B and other non
              exclusive scrips (non-<br></br>exclusive scrips from group E, F,
              FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate
              <br></br>basis w.e.f. December 1, 2022.
              <br></br>
              <br></br>
              BSE has revised transaction charges in M, MT, TS and MS groups to
              ₹275 per crore of gross<br></br>turnover.
            </p>
          </div>
          <div>
            <h5 style={{ fontSize: "0.9rem", opacity: "0.9" }}>Call & trade</h5>
            <p style={{ fontSize: "0.8rem" }}>
              Additional charges of ₹50 per order for orders placed through a
              dealer at Zerodha including<br></br>auto square off orders.
            </p>
          </div>
          <div>
            <h5 style={{ fontSize: "0.9rem", opacity: "0.9" }}>
              Stamp charges
            </h5>
            <p style={{ fontSize: "0.8rem" }}>
              Stamp charges by the Government of India as per the Indian Stamp
              Act of 1899 for<br></br>transacting in instruments on the stock
              exchanges and depositories.
            </p>
          </div>
          <div>
            <h5 style={{ fontSize: "0.9rem", opacity: "0.9" }}>
              NRI brokerage charges
            </h5>
            <ul style={{ fontSize: "0.8rem" }}>
              <li>₹100 per order for futures and options.</li>
              <li>
                For a non-PIS account, 0.5% or ₹100 per executed order for
                equity (whichever is lower).
              </li>
              <li>
                For a PIS account, 0.5% or ₹200 per executed order for equity
                (whichever is lower).
              </li>
              <li>
                ₹500 + GST as yearly account maintenance charges (AMC) charges.
              </li>
            </ul>
          </div>
          <div>
            <h5 style={{ fontSize: "0.9rem", opacity: "0.9" }}>
              Account with debit balance
            </h5>
            <p style={{ fontSize: "0.8rem" }}>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order<br></br>instead of ₹20 per executed
              order.
            </p>
          </div>
          <div>
            <h5 style={{ fontSize: "0.9rem", opacity: "0.9" }}>
              Charges for Investor's Protection Fund Trust (IPFT) by NSE
            </h5>
            <ul style={{ fontSize: "0.8rem" }}>
              <li>
                Equity and Futures - ₹10 per crore + GST of the traded value.
              </li>
              <li>
                Options - ₹50 per crore + GST traded value (premium value).
              </li>
              <li>
                Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2
                per lakh + GST of premium for Options.
              </li>
            </ul>
          </div>
          <div>
            <h5 style={{ fontSize: "0.9rem", opacity: "0.9" }}>
              Margin Trading Facility (MTF)
            </h5>
            <ul style={{ fontSize: "0.8rem" }}>
              <li>
                MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount.
                The interest is applied from T+1 day until the day MTF stocks
                are sold.
              </li>
              <li>
                MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is
                lower.
              </li>
              <li>MTF pledge charge: ₹30 + GST per pledge request per ISIN.</li>
            </ul>
          </div>
        </div>
        <div className="col-6">
          <div>
            <h5 style={{ fontSize: "0.9rem", opacity: "0.9" }}>GST</h5>
            <p style={{ fontSize: "0.8rem" }}>
              Tax levied by the government on the services rendered. 18% of (
              brokerage + SEBI charges <br></br>+ transaction charges)
            </p>
          </div>
          <div>
            <h5 style={{ fontSize: "0.9rem", opacity: "0.9" }}>SEBI Charges</h5>
            <p style={{ fontSize: "0.8rem" }}>
              Charged at ₹10 per crore + GST by Securities and Exchange Board of
              India for regulating the<br></br>markets.
            </p>
          </div>
          <div>
            <h5 style={{ fontSize: "0.9rem", opacity: "0.9" }}>
              DP (Depository participant) charges
            </h5>
            <p style={{ fontSize: "0.8rem" }}>
              ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
              charged on the trading<br></br>account ledger when stocks are
              sold, irrespective of quantity.
              <br></br>
              <br></br>
              Female demat account holders (as first holder) will enjoy a
              discount of ₹0.25 per transaction<br></br>on the CDSL fee.
              <br></br>
              <br></br>
              Debit transactions of mutual funds & bonds get an additional
              discount of ₹0.25 on the CDSL<br></br>fee.
            </p>
          </div>
          <div>
            <h5 style={{ fontSize: "0.9rem", opacity: "0.9" }}>
              Pledging charges
            </h5>
            <p style={{ fontSize: "0.8rem" }}>
              ₹30 + GST per pledge request per ISIN.
            </p>
          </div>
          <div>
            <h5 style={{ fontSize: "0.9rem", opacity: "0.9" }}>
              AMC (Account maintenance charges)
            </h5>
            <p style={{ fontSize: "0.8rem" }}>
              For BSDA demat account: Zero charges if the holding value is less
              than ₹4,00,000. To learn<br></br>more about BSDA,{" "}
              <a style={{ textDecoration: "none" }} href="#">
                Click here
              </a>
              <br></br>
              <br></br>
              For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
              (90 days). To learn<br></br>more about AMC,{" "}
              <a style={{ textDecoration: "none" }} href="#">
                Click here
              </a>
            </p>
          </div>
          <div>
            <h5 style={{ fontSize: "0.9rem", opacity: "0.9" }}>
              Corporate action order charges
            </h5>
            <p style={{ fontSize: "0.8rem" }}>
              ₹20 plus GST will be charged for OFS / buyback / takeover /
              delisting orders placed through<br></br>Console.
            </p>
          </div>
          <div>
            <h5 style={{ fontSize: "0.9rem", opacity: "0.9" }}>
              Off-market transfer charges
            </h5>
            <p style={{ fontSize: "0.8rem" }}>₹25 per transaction.</p>
          </div>
          <div>
            <h5 style={{ fontSize: "0.9rem", opacity: "0.9" }}>
              Physical CMR request
            </h5>
            <p style={{ fontSize: "0.8rem" }}>
              First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST
              for subsequent requests.
            </p>
          </div>
          <div>
            <h5 style={{ fontSize: "0.9rem", opacity: "0.9" }}>
              Payment gateway charges
            </h5>
            <p style={{ fontSize: "0.8rem" }}>
              ₹9 + GST (Not levied on transfers done via UPI)
            </p>
          </div>
          <div>
            <h5 style={{ fontSize: "0.9rem", opacity: "0.9" }}>
              Delayed Payment Charges
            </h5>
            <p style={{ fontSize: "0.8rem" }}>
              Interest is levied at 18% a year or 0.05% per day on the debit
              balance in your trading<br></br>account.{" "}
              <a style={{ textDecoration: "none" }} href="#">
                Learn more.
              </a>
            </p>
          </div>
          <div>
            <h5 style={{ fontSize: "0.9rem", opacity: "0.9" }}>
              Trading using 3-in-1 account with block functionality
            </h5>
            <ul style={{ fontSize: "0.8rem" }}>
              <li>
                <b>Delivery & MTF Brokerage:</b> 0.5% per executed order.
              </li>
              <li>
                <b>Intraday Brokerage:</b> 0.05% per executed order.
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-5 mb-5">
          <h5 style={{ fontSize: "1.3rem", opacity: "0.9" }}>Disclaimer</h5>
          <p style={{ fontSize: "0.8rem" }}>
            For Delivery based trades, a minimum of ₹0.01 will be charged per
            contract note. Clients who opt to receive physical contract notes
            will be charged ₹20 per contract note plus courier charges.<br></br>
            Brokerage will not exceed the rates specified by SEBI and the
            exchanges. All statutory and regulatory charges will be levied at
            actuals. Brokerage is also charged on expired, exercised, and
            <br></br>
            assigned options contracts. Free investments are available only for
            our retail individual clients. Companies, Partnerships, Trusts, and
            HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery
            <br></br>
            brokerage. A brokerage of 0.25% of the contract value will be
            charged for contracts where physical delivery happens. For netted
            off positions in physically settled contracts, a brokerage of 0.1%
            <br></br>
            will be charged.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
