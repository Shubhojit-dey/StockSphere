import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();
 

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://stocksphere.onrender.com/signup", {
        username,
        email,
        password,
      });
      alert("Signup Successful! Now login.");
      navigate("/signup");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://stocksphere.onrender.com/login", {
        email:loginEmail,
        password:loginPassword,
      });
      localStorage.setItem("token", res.data.token);
      alert("Login Successful!");
      window.location.href = "http://localhost:3001";
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.signupBox}>
        <StyledWrapper>
          <div className="wrapper">
            <div className="card-switch">
              <label className="switch">
                <input type="checkbox" className="toggle" />
                <span className="slider" />
                <span className="card-side" />
                <div className="flip-card__inner">
                  <div className="flip-card__front">
                    <div className="title">Log in</div>
                    <form
                      className="flip-card__form"
                      onSubmit={handleLogin}
                      action
                    >
                      <input
                        className="flip-card__input"
                        // name="email"
                        placeholder="Email"
                        type="email"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                      />
                      <input
                        className="flip-card__input"
                        // name="password"
                        placeholder="Password"
                        type="password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                      />
                      <button type="submit" className="flip-card__btn">
                        Let`s go!
                      </button>
                    </form>
                  </div>
                  <div className="flip-card__back">
                    <div className="title">Sign up</div>
                    <form
                      className="flip-card__form"
                      onSubmit={handleSignup}
                      action
                    >
                      <input
                        className="flip-card__input"
                        placeholder="Username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <input
                        className="flip-card__input"
                        // name="email"
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <input
                        className="flip-card__input"
                        // name="password"
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button type="submit" className="flip-card__btn">
                        Confirm!
                      </button>
                    </form>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </StyledWrapper>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center", // Horizontal centering
    alignItems: "center", // Vertical centering
    height: "70vh", // Full viewport height for vertical centering
    //   backgroundColor: '#f9f9f9', // Optional: background color for visibility
  },
  signupBox: {
    //   width: '300px',
    padding: "20px",
    margin: "20px", // Margin around the box
    //   border: '1px solid #ccc',
    //   borderRadius: '8px',
    //   backgroundColor: '#fff',
    //   boxShadow: '0 2px 8px rgba(0,0,0,0.1)', // Optional: subtle shadow
  },
};
const StyledWrapper = styled.div`
  .wrapper {
    --input-focus: #2d8cf0;
    --font-color: #323232;
    --font-color-sub: #666;
    --bg-color: #fff;
    --bg-color-alt: #666;
    --main-color: #323232;
    /* display: flex; */
    /* flex-direction: column; */
    /* align-items: center; */
  }
  /* switch card */
  .switch {
    transform: translateY(-200px);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 50px;
    height: 20px;
  }

  .card-side::before {
    position: absolute;
    content: "Log in";
    left: -70px;
    top: 0;
    width: 100px;
    text-decoration: underline;
    color: var(--font-color);
    font-weight: 600;
  }

  .card-side::after {
    position: absolute;
    content: "Sign up";
    left: 70px;
    top: 0;
    width: 100px;
    text-decoration: none;
    color: var(--font-color);
    font-weight: 600;
  }

  .toggle {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    box-sizing: border-box;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--bg-colorcolor);
    transition: 0.3s;
  }

  .slider:before {
    box-sizing: border-box;
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    border: 2px solid var(--main-color);
    border-radius: 5px;
    left: -2px;
    bottom: 2px;
    background-color: var(--bg-color);
    box-shadow: 0 3px 0 var(--main-color);
    transition: 0.3s;
  }

  .toggle:checked + .slider {
    background-color: var(--input-focus);
  }

  .toggle:checked + .slider:before {
    transform: translateX(30px);
  }

  .toggle:checked ~ .card-side:before {
    text-decoration: none;
  }

  .toggle:checked ~ .card-side:after {
    text-decoration: underline;
  }

  /* card */

  .flip-card__inner {
    width: 300px;
    height: 350px;
    position: relative;
    background-color: transparent;
    perspective: 1000px;
    /* width: 100%;
      height: 100%; */
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .toggle:checked ~ .flip-card__inner {
    transform: rotateY(180deg);
  }

  .toggle:checked ~ .flip-card__front {
    box-shadow: none;
  }

  .flip-card__front,
  .flip-card__back {
    padding: 20px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background: lightgrey;
    gap: 20px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
  }

  .flip-card__back {
    width: 100%;
    transform: rotateY(180deg);
  }

  .flip-card__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .title {
    margin: 20px 0 20px 0;
    font-size: 25px;
    font-weight: 900;
    text-align: center;
    color: var(--main-color);
  }

  .flip-card__input {
    width: 250px;
    height: 40px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    background-color: var(--bg-color);
    box-shadow: 4px 4px var(--main-color);
    font-size: 15px;
    font-weight: 600;
    color: var(--font-color);
    padding: 5px 10px;
    outline: none;
  }

  .flip-card__input::placeholder {
    color: var(--font-color-sub);
    opacity: 0.8;
  }

  .flip-card__input:focus {
    border: 2px solid var(--input-focus);
  }

  .flip-card__btn:active,
  .button-confirm:active {
    box-shadow: 0px 0px var(--main-color);
    transform: translate(3px, 3px);
  }

  .flip-card__btn {
    margin: 20px 0 20px 0;
    width: 120px;
    height: 40px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    background-color: var(--bg-color);
    box-shadow: 4px 4px var(--main-color);
    font-size: 17px;
    font-weight: 600;
    color: var(--font-color);
    cursor: pointer;
  }
`;

export default Signup;
