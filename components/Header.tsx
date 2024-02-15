import Image from "next/image";
import React, { useState } from "react";

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("#home");

  return (
    <div className="navbar-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
              <button
                className="navbar-toggler"
                type="button"
                onClick={() => setIsNavExpanded(!isNavExpanded)}
                aria-controls="navbarSupportedContent"
                aria-expanded={isNavExpanded ? "true" : "false"}
                aria-label="Toggle navigation"
              >
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
              </button>

              <div
                className={`collapse navbar-collapse sub-menu-bar ${
                  isNavExpanded ? "show" : ""
                }`}
                id="navbarSupportedContent"
              >
                <ul id="nav" className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="page-scroll" href="#home">
                      Anasayfa
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#program">
                      Program
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#meet-the-team">
                      Düzenleme Kurulu
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
  );
}
