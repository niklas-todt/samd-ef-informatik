import * as React from 'react'
import { Link } from 'gatsby'
import "../assets/css/main.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <main>
    <title>{pageTitle}</title>
      <nav>

        <div id="navbar">
          <span id="open-nav" onClick={openNav}>≡</span>
        </div>

        <div id="nav-overlay">
          <span id="close-nav" href="javascript:void(0)" onClick={closeNav}>×</span>
          <div className="overlay-content">
            <ul>
              <li><Link to="/">Start</Link></li>
              <li><Link to="/about">Hintergrund</Link></li>
              <li><Link to="/about">Komittee</Link></li>
              <li><Link to="/about">Kontakt</Link></li>
            </ul>
          </div>
        </div>

      </nav>

      {children}

    </main>
  )
}

export default Layout

function openNav() {
  document.getElementById("nav-overlay").style.height = "100%";
}

function closeNav() {
  document.getElementById("nav-overlay").style.height = "0%";
}
