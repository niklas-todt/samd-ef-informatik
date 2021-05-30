// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import '../assets/css/index.css'


// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <section id="top">
        <h5>JA AM 7. MÄRZ.</h5>
        <h1>INTERESSANTE INITATIVE.</h1>
        <button type="button" className="cta-button">ARGUMENTE →</button>
        <button type="button" className="cta-button">SPENDE →</button>
      </section>

      <section id="supporter-logos">
        <img src={"./assets/images/apple.svg"} />
        <img src={"./assets/images/facebook.svg"} />
        <img src={"./assets/images/mcdonalds.svg"} />
        <img src={"./assets/images/google-glass-logo.svg"} />
      </section>

      <section id="about">
        <div className="wrap-line">
          <h3>DIE IDEE</h3>
          <p>Die Initiative ‘Zyankali fürs Volk’ verlangt, dass jede*r Bürger*in der Schweiz, zu jeder Zeit an jedem Ort  freien Zugriff auf Zyankali haben soll. In jedem Laden, sowie an speziell dafür eingerichteten Stationen wird man staatlich hergestelltes und hochqualitatives Zyankali holen können.</p>
          <button type="button" className="cta-button">JETZT UNTERSTÜZEN →</button>
        </div>
      </section>

      <section id="argumente">
        <div className="wrap-line">
          <h3>DIE ARGUMENTE</h3>
          <p>1. Es fördert den Service Public der Schweiz. Mehr Arbeitsstellen werden somit staatlich geführt werden, aber auch private Firmen werden sich dafür vermarkten können. Zyankali wird somit schnell zu der Versicherung der Schweizer Wirtschaft in Krisensituationen.<br /><br />
            2. Die physische und psychische Gesundheit von Schweizer*innen wird sich massiv verbessern. Eine zufriedene und Glückliche Gesellschaft soll die Priorität unsere Regierung und des Parlament werden, mit dieser Initiative zeigen wir den Politiker*innen was die Bevölkerung wirklich will.<br /><br />
            3. Nach einer Studie der University in Appenzell, ist die Schweiz im internationalen Vergleich in der Verteilung von Zyankali an die Bevölkerung um 20 Jahre im Verzug. Wir müssen das ändern, für eine fortschrittliche und lebenswerte Zukunft.</p>
          <button type="button" className="cta-button">ZUM ARGUMENTATORIUM →</button>
        </div>
      </section>
    </Layout>
  )
}
// Step 3: Export your component
export default IndexPage
