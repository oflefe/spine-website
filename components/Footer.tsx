import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="map-img">
        <img src="assets/img/footer/map-bg.svg" alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-links">
              <div className="footer-logo">
                <a href="index.html">
                  <img src="assets/img/logo/logo.svg" alt="" />
                </a>
              </div>
              <ul>
                <li>
                  <a href="javascript:void(0)">Home</a>
                </li>
                <li>
                  <a href="javascript:void(0)">About Us</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Events</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Speakers</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Blog</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="mb-0 text-center text-md-start">Copyright 2024</p>
            </div>
            <div className="col-md-6">
              <ul className="socials">
                <li>
                  <a href="javascript:void(0)">
                    <i className="lni lni-facebook-filled"></i>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <i className="lni lni-twitter-filled"></i>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <i className="lni lni-instagram-filled"></i>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <i className="lni lni-linkedin-original"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
