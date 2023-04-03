import React from "react";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import "./contact.css";
const Contact = () => {
  return (
    <section className="contact">
      <aside className="contact__card">
        <div className="contact__card__text">
          <span>newsletter</span>
          <h2>Sign up for latest updates and offers</h2>
        </div>

        <div>
          <input type="text" placeholder="Email Address" />
          <button className="contact__btn">Subcribe</button>
        </div>

        <div className="contact__icons">
          <p>Will be used in accordance with our Privacy Polity</p>

          <span>
            <BsFacebook />
          </span>
          <span>
            {" "}
            <AiOutlineTwitter />
          </span>
          <span>
            {" "}
            <AiOutlineInstagram />
          </span>
          <span>
            {" "}
            <BsLinkedin />
          </span>
        </div>
      </aside>
    </section>
  );
};

export default Contact;
