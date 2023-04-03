import React from "react";
import cards from "../../assets/payments.png";
import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer__card">
        <div>
          <span>
            AXDEVSTORE. 2023 CREATED BY AXDEV. PREMIUM E-COMMERCE SOLUTIONS.
          </span>
        </div>
        <div>
          <img src={cards} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
