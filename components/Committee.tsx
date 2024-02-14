import Image from "next/image";
import React from "react";

export default function Committee() {
  return (
    <div>
      <section id="meet-the-team" className="pt-50 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center mb-60">
                <h1>Düzenleme Kurulu</h1>
              </div>
            </div>
          </div>
          <div className="row">
            {/* <!-- Team Member 1 --> */}
            <div className="col-lg-4 col-md-6">
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
                  <h3>Ender Ofluoğlu</h3>
                </div>
              </div>
            </div>
            {/* <!-- Team Member 2 --> */}
            <div className="col-lg-4 col-md-6">
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
                  <h3>Onur Yaman</h3>
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
            <div className="col-lg-4 col-md-6">
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
                  <h3>Salim Şentürk</h3>
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
            <div className="col-lg-6 col-md-6">
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
                  <h3>Eyüp Varol</h3>
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
            <div className="col-lg-6 col-md-6">
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
                  <h3>Mehmet Zileli</h3>
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
