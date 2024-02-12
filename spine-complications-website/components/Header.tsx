import React from "react";
export default function Header() {
  return (
    <header>
      <div className="navbar-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse sub-menu-bar"
                  id="navbarSupportedContent"
                >
                  <ul id="nav" className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <a className="page-scroll active" href="#home">
                        Anasayfa
                        {/* Home
Organizasyon komitesi
Duyuru
Fakülte
İletişim-adres */}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#program">
                        Program
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#meet-the-team">
                        Organizasyon Komitesi
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#announcement">
                        Duyuru
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="" href="#faculty">
                        Fakülte
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="" href="#contact">
                        İletişim
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
