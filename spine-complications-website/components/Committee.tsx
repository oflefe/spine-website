import Image from "next/image";
import React from "react";

export default function Committee() {
  return (
    <div>
      <section id="meet-the-team" className="pt-150 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center mb-60">
                <h1>Organizasyon Komitesi</h1>
              </div>
            </div>
          </div>
          <div className="row">
            {/* <!-- Team Member 1 --> */}
            <div className="col-lg-3 col-md-6">
              <div className="team-member text-center">
                <div className="member-photo">
                  <Image
                    src="/jon-doe.jpg"
                    alt="member"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="member-info">
                  <h3>John Doe</h3>
                  <p>CEO & Founder</p>
                </div>
              </div>
            </div>
            {/* <!-- Team Member 2 --> */}
            <div className="col-lg-3 col-md-6">
              <div className="team-member text-center">
                <div className="member-photo">
                  <Image
                    src="/jane-smith.jpg"
                    alt="member"
                    width={100}
                    height={100}
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
            <div className="col-lg-3 col-md-6">
              <div className="team-member text-center">
                <div className="member-photo">
                  <Image
                    src="/jane-smith.jpg"
                    alt="member"
                    width={100}
                    height={100}
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
