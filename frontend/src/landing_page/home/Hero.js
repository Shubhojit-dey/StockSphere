import React from "react";
import { Link, useNavigate } from 'react-router-dom';
function Hero() {
   const router = useNavigate();
  return (
    <div className="container p-5">
      <div className="row text-center">
        <img src="media/homeHero.png" alt="Hero Image" className="mb-5" />
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
       <button
          style={{
            width: "15%",
            margin: "0 auto",
            height: "50px",
            fontSize: "20px",
          }}
          type="button"
          className="btn btn-primary"
          onClick={() => router('/signup')}
        >
          Signup up for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
