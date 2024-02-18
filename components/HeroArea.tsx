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
                <h1>Omurga Cerrahisinde Komplikasyonlar</h1>
                <p style={{ fontSize: 32 }}>Tümör, Dejeneratif, Deformite</p>
                <h3>16 Mart 2024</h3>
                <h4> Medicana Ataköy Hastanesi, İstanbul</h4>
              </div>
              <div className="row">
                <div className="col-3 text-center navbar-brand">
                  <Image src={"/arel-logo.png"} layout="fill" alt={"logo"} />
                </div>
                <div className="col-3 text-center navbar-brand">
                  <Image
                    className="medicana-logo"
                    src={"/medicana-logo.png"}
                    layout="fill"
                    alt={"logo"}
                  />
                </div>
                <div className="row">
                  <div className="col-3 navbar-brand text-center">
                    <Image
                      className="mess-logo"
                      src={"/mess-logo.png"}
                      layout="fill"
                      alt={"logo"}
                    />
                  </div>
                  <div className="col-3 navbar-brand text-center justify-content-center">
                    <Image src={"/wfns-logo.png"} layout="fill" alt={"logo"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
