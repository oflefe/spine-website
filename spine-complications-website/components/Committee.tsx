import React from "react";
import "../styles/committee.module.css";

export default function Committee() {
  return (
    <div>
      <section id="meet-the-team" className="pt-150 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center mb-60">
                <h1>Meet Our Team</h1>
                <p>
                  Our team of dedicated professionals committed to excellence.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {/* <!-- Team Member 1 --> */}
            <div className="col-lg-3 col-md-6">
              <div className="team-member text-center">
                <div className="member-photo">
                  <img
                    src="assets/img/team/member-1.jpg"
                    alt="Team Member"
                    className="img-fluid"
                  />
                </div>
                <div className="member-info">
                  <h3>John Doe</h3>
                  <p>CEO & Founder</p>
                  <div className="social-links">
                    {/* <!-- Social links can go here --> */}
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Team Member 2 --> */}
            <div className="col-lg-3 col-md-6">
              <div className="team-member text-center">
                <div className="member-photo">
                  <img
                    src="assets/img/team/member-2.jpg"
                    alt="Team Member"
                    className="img-fluid"
                  />
                </div>
                <div className="member-info">
                  <h3>Jane Smith</h3>
                  <p>Marketing Head</p>
                  <div className="social-links">
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Add more team members as needed --> */}
          </div>
        </div>
      </section>
    </div>
  );
}
