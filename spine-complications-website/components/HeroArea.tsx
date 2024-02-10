import React from "react";

export default function HeroArea() {
  return (
    <div>
      <section id="home" className="hero-area img-bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1>
                  You are using free lite version of <span>Evently</span>
                </h1>
                <p>
                  Please, purchase full version of the template to get all
                  sections, elements and permission to remove footer credits.
                </p>
                <a href="javascript:void(0)" className="main-btn btn-hover">
                  Buy Template
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-img">
                <img src="assets/img/hero/hero-img.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
