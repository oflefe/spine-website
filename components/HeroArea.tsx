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
                <p style={{ fontSize: 32 }}>Olgu Çözümlemeleri</p>
                <h3>15 Mart 2025</h3>
                <h4> Memorial Ankara Hastanesi, Ankara</h4>
              </div>
              <div className="row">
                <div className="col-4 text-center navbar-brand">
                  <Image src={"/memorial-logo.jpeg"} fill alt={"logo"} />
                </div>
                <div className="col-3 navbar-brand text-center">
                  <Image
                    className="mess-logo"
                    src={"/mess-logo.png"}
                    fill
                    alt={"logo"}
                  />
                </div>
                <div className="col-3 navbar-brand text-center justify-content-center">
                  <Image src={"/wfns-logo.png"} fill alt={"logo"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
