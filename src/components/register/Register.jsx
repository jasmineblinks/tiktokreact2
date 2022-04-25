import React from "react";
import "./register.css";
import user from "../../images/user.svg";
import facebook from "../../images/facebook.svg";
import twitter from "../../images/twitter.svg";
import instagram from "../../images/instagram.svg";
import google from "../../images/google.svg";
import apple from "../../images/apple.svg";

const Register = () => {
  return (
    <div className="base">
      <div className="container">
        <h3>Sign up for TikTok</h3>
        <p>
          {" "}
          Create a profile,follow other accounts,make your own videos, and more
          .
        </p>
        <div className="btnClass">
          <button className="btn-social">
            <span className="btn__icon">
              <img src={user} alt="logo" />
            </span>
            <span className="btn__text"> Use phone or email</span>
          </button>
          <button className="btn-social">
            <span className="btn__icon">
              {" "}
              <img src={facebook} alt="logo" />
            </span>
            <span className="btn__text">Continue with Facebook</span>
          </button>
          <button className="btn-social">
            <span className="btn__icon">
              <img src={google} alt="logo" />
            </span>
            <span className="btn__text"> Continue with Google</span>
          </button>
          <button className="btn-social">
            <span className="btn__icon">
              {" "}
              <img src={twitter} alt="logo" />
            </span>
            <span className="btn__text"> Continue with Twitter</span>
          </button>
        </div>
        <div className="terms-text">
          {" "}
          <p>
            By continuing you agree to TikTok's <a href="">Terms of Service</a>{" "}
            and confirm that you have read TikTok's{" "}
            <a href="">Privacy Policy</a>
          </p>
        </div>
        <div className="footer-text">
          <p>
            Dont have an account? <a href="">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
