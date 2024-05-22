import React from "react";
import "./footer.css";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div class="pg-footer">
      <footer class="footer">
        <svg
          class="footer-wave-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            class="footer-wave-path"
            d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
          ></path>
        </svg>
        <div class="footer-content">
          <div class="footer-content-column">
            <div class="footer-logo">
              <Link class="footer-logo-link" to="/">
                <span class="hidden-link-text">I-NEXT-ETS</span>
                <h1>I-NEXT-ETS</h1>
              </Link>
            </div>
            <div class="footer-menu">
              <h2 class="footer-menu-name"> Get Started</h2>
              <ul id="menu-get-started" class="footer-menu-list">
                <li class="menu-item menu-item-type-post_type menu-item-object-product">
                  <Link to="#">Start</Link>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-product">
                  <Link to="#">Documentation</Link>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-product">
                  <Link to="#">Installation</Link>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer-content-column">
            <div class="footer-menu">
              <h2 class="footer-menu-name"> Company</h2>
              <ul id="menu-company" class="footer-menu-list">
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link to="#">Contact</Link>
                </li>
                <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                  <Link to="#">News</Link>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link to="#">Careers</Link>
                </li>
              </ul>
            </div>
            <div class="footer-menu">
              <h2 class="footer-menu-name"> Legal</h2>
              <ul id="menu-legal" class="footer-menu-list">
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                  <Link to="#">Privacy Notice</Link>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link to="#">Terms of Use</Link>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer-content-column">
            <div class="footer-menu">
              <h2 class="footer-menu-name"> Quick Links</h2>
              <ul id="menu-quick-links" class="footer-menu-list">
                <li class="menu-item menu-item-type-custom menu-item-object-custom">
                  <Link target="_blank" rel="noopener noreferrer" to="#">
                    Support Center
                  </Link>
                </li>
                <li class="menu-item menu-item-type-custom menu-item-object-custom">
                  <Link target="_blank" rel="noopener noreferrer" to="#">
                    Service Status
                  </Link>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link to="#">Security</Link>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link to="#">Blog</Link>
                </li>
                <li class="menu-item menu-item-type-post_type_archive menu-item-object-customer">
                  <Link to="#">Customers</Link>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link to="#">Reviews</Link>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer-content-column">
            <div class="footer-call-to-action">
              <h2 class="footer-call-to-action-title"> Let's Chat</h2>
              <p class="footer-call-to-action-description">
                {" "}
                Have a support question?
              </p>
              <Link
                class="footer-call-to-action-button button"
                to="mailto:info.inextets@gmail.com"
                target="_self"
              >
                {" "}
                Get in Touch{" "}
              </Link>
            </div>
            <div class="footer-call-to-action">
              <h2 class="footer-call-to-action-title"> You Call Us</h2>
              <p class="footer-call-to-action-link-wrapper">
                {" "}
                <Link
                  class="footer-call-to-action-link"
                  to="tel:9981122493"
                  target="_self"
                >
                  {" "}
                  9981122493{" "}
                </Link>
              </p>
            </div>
          </div>
          <div class="footer-social-links">
            {" "}
            <svg
              class="footer-social-amoeba-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 236 54"
            >
              <path
                class="footer-social-amoeba-path"
                d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z"
              ></path>
            </svg>
            <Link class="footer-social-link linkedin" to="#" target="_blank">
              <span class="hidden-link-text">Linkedin</span>
              <FaLinkedin size={25} />
            </Link>
            <Link class="footer-social-link twitter" to="#" target="_blank">
              <span class="hidden-link-text">Twitter</span>
              <FaTwitter size={25} />
            </Link>
            <Link class="footer-social-link youtube" to="#" target="_blank">
              <span class="hidden-link-text">Youtube</span>
              <FaYoutube size={25} />
            </Link>
            <Link class="footer-social-link github" to="#" target="_blank">
              <span class="hidden-link-text">Github</span>
              <FaGithub size={25} />
            </Link>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="footer-copyright-wrapper">
            <p class="footer-copyright-text">
              <Link class="footer-copyright-link" to="#" target="_self">
                {" "}
                ©2024. | Designed By: I NEXT ETS. | All rights reserved.{" "}
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
