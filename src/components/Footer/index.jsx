import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaBehanceSquare,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-div">
      <footer>
        <ul>
          <a href="https://github.com/aneripatel2002" target="blank">
            <li>
              <FaGithub />
            </li>
          </a>
          <a href="https://www.linkedin.com" target="blank">
            <li>
              <FaLinkedin />
            </li>
          </a>
          <a href="https://www.instagram.com" target="blank">
            <li>
              <FaInstagram />
            </li>
          </a>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
