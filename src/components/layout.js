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

      <footer>
        <div id="footer-content">
          <div className="newsletter">
            <h3>NEWSLETTER</h3>
            <input type="text" className="input-field" placeholder="E-MAIL ADRESSE" name="mail" required />
            <button type="button" className="cta-button">ANMELDEN →</button>
          </div>
        </div>
        <div id="footer-credits">
          <h5>Made with (love) by us. | Font made from <a href="http://www.onlinewebfonts.com"> Online Web Fonts</a> is licensed by CC BY 3.0 | Photo by <a href="https://unsplash.com/@daniloalvesd?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Danilo Alvesd</a> on <a href="https://unsplash.com/s/photos/drugs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></h5>
        </div>
      </footer>

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
