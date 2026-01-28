import Image from "next/image";
import React from "react";

export default function HeroArea() {
  return (
    <div>
      <section id="home" className="hero-area img-bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1>Omurga Cerrahisinde Komplikasyonlar-3</h1>
              </div>
              <div className="row">
                <div className="col-3 navbar-brand text-center">
                  <Image
                    className="mess-logo"
                    src={"/mess-logo.png"}
                    fill
                    alt={"logo"}
                  />
                </div>
                <div className="col-4 text-center navbar-brand">
                  <Image
                    src={"/international-spine-society.png"}
                    fill
                    alt={"logo"}
                  />
                </div>
                <div className=" mt-4 col-5 text-center navbar-brand">
                  <Image
                    src={"/manisa-sehir-hastanesi.png"}
                    fill
                    alt={"logo"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
