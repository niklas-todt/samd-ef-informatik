// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from "gatsby";
import Layout from '../components/layout'
import '../assets/css/index.css'


// Step 2: Define your component
const IndexPage = () => {

const data = useStaticQuery(query);

  return (
    <Layout pageTitle="Zyankali fürs Volk">
      <section id="top">
        <h5>{data.strapiHomepage.subtitle}</h5>
        <h1>{data.strapiHomepage.title}</h1>
        <button type="button" className="cta-button">ARGUMENTE →</button>
        <button type="button" className="cta-button">SPENDE →</button>
      </section>

      <section id="supporter-logos">
        <img src={"/images/apple.svg"} />
        <img src={"./assets/images/facebook.svg"} />
        <img src={"./assets/images/mcdonalds.svg"} />
        <img src={"./assets/images/google-glass-logo.svg"} />
      </section>

      <section id="about">
        <div className="wrap-line">
          <h3>{data.strapiHomepage.Card[0].CardTitle}</h3>
          <p>{data.strapiHomepage.Card[0].CardText}</p>
          <button type="button" className="cta-button">{data.strapiHomepage.Card[0].CardButton.ButtonText} →</button>
        </div>
      </section>

      <section id="argumente">
        <div className="wrap-line">
          <h3>ARGUMENTE</h3>
          <p>1. Es fördert den Service Public der Schweiz. Mehr Arbeitsstellen werden somit staatlich geführt werden, aber auch private Firmen werden sich dafür vermarkten können. Zyankali wird somit schnell zu der Versicherung der Schweizer Wirtschaft in Krisensituationen.<br /><br />
            2. Die physische und psychische Gesundheit von Schweizer*innen wird sich massiv verbessern. Eine zufriedene und Glückliche Gesellschaft soll die Priorität unsere Regierung und des Parlament werden, mit dieser Initiative zeigen wir den Politiker*innen was die Bevölkerung wirklich will.<br /><br />
            3. Nach einer Studie der University in Appenzell, ist die Schweiz im internationalen Vergleich in der Verteilung von Zyankali an die Bevölkerung um 20 Jahre im Verzug. Wir müssen das ändern, für eine fortschrittliche und lebenswerte Zukunft.</p>
          <button type="button" className="cta-button">ZUM ARGUMENTATORIUM →</button>
        </div>
      </section>

      <section id="komittee">
      <div className="komittee-mitglieder">
        <div className="komittee-mitglied">
          <img src="public/logo.png" />
          <h4>Vorname Nachname</h4>
          <h5>Beruflich Lustig</h5>
        </div>
        <div className="komittee-mitglied">
          <img src="public/logo.png" />
          <h4>Vorname Nachname</h4>
          <h5>Beruflich Lustig</h5>
        </div>
        <div className="komittee-mitglied">
          <img src="public/logo.png" />
          <h4>Vorname Nachname</h4>
          <h5>Beruflich Lustig</h5>
        </div>
      </div>
    </section>

    <section>
    </section>

    </Layout>
  )
};

const query = graphql`
query MyQuery {
  strapiHomepage {
    subtitle
    title
    Card {
      CardText
      CardTitle
      CardButton {
        ButtonText
        Url
      }
    }
  }
}


`;

// Step 3: Export your component
export default IndexPage
