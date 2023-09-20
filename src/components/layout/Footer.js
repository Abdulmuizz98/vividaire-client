import React from "react";
import { useState } from "react";
import { VdCaretRight, VdDoublePolygon } from "../Icons";
// import { PiCaretRightBold } from "react-icons/pi";
import logo from "../../assets/vividaire_logo.svg";
import Copy from "../Copy";
import "./Footer.css";

function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="footer">
      <div className="main">
        <nav className="place-items-center">
          <ul>
            <li>
              <a href="#">collection</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">articles</a>
            </li>
          </ul>
        </nav>
        <div>
          <h3>sign up for all the latest news and offers.</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log(e);
            }}
          >
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="place-items-center">
              <VdCaretRight />
            </button>
          </form>
          <div className="footer-logo">
            <a href="#">
              <VdDoublePolygon color="#ECE4DA" width={40} height={40} />
            </a>
            <p>
              <a href="#">Vividaire</a>
            </p>
          </div>
        </div>
        <nav className="place-items-center">
          <ul>
            <li>
              <a href="#">contact</a>
            </li>
            <li>
              <a href="#">faq</a>
            </li>
            <li>
              <a href="#">instagram</a>
            </li>
          </ul>
        </nav>
      </div>
      <Copy />
      <div className="footer-divider first"></div>
      <div className="footer-divider second"></div>
    </footer>
  );
}

export default Footer;
