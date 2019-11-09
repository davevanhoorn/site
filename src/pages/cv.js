import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"

const Blog = () => (
  <Layout>
    <Helmet>
      <html lang="nl" />
      <title>React Front-End Developer → Dave van Hoorn → CV</title>
      <meta
        name="description"
        content="Ik werk als Front-End Developer voor o.a. Euroclear, Capgemini, Schiphol en New Skool Media."
      />
    </Helmet>

    <section className="text-gray-800">
      <div className="md:flex justify-between items-end flex-grow border-b pb-3 mb-6">
        <h1 className="leading-none text-4xl font-bold">Dave van Hoorn</h1>
        <p className="text-sm mt-1 mb-2 md:mb-0 md:text-right text-gray-600">
          Nieuwegein, Utrecht <br />
          hello@davevanhoorn.com <br /> +31 (0)6 169 100 79
        </p>
      </div>
      <div className="pb-5">
        <h2 className="text-2xl font-bold leading-none">Werkervaring</h2>
      </div>

      <div className="pb-4 mb-4 border-b">
        <p className="md:flex justify-between items-end">
          <span className="font-bold text-lg block md:inline">
            <span>
              Euroclear
              <span className="font-normal italic text-gray-600 ml-1">
                (in opdracht van Capgemini)
              </span>
            </span>
            <br />
            <span>Front-End Developer React.js</span>
          </span>
          <span className="mt-2 md:mt-0 md:text-right font-bold block md:inline">
            <span>08/2019 - heden</span> <br />
            <span>Amsterdam, Nederland</span>
          </span>
        </p>
        <ul className="mt-3 list-outside list-disc pl-6">
          <li>
            Ontwikkel pixel-perfecte en herbruikbare React componenten op basis
            van het Material-UI framework.
            <br />
            <span className="italic text-gray-600 text-sm">
              (React, Material-UI, Sketch, CSS3, HTML5)
            </span>
          </li>
          <li>
            Ontwikkel formulieren met React Formik en integreer deze met de
            Azure Devops back-end door middel van Axios.
            <br />
            <span className="italic text-gray-600 text-sm">
              (Axios, Microsoft Azure, .NET)
            </span>
          </li>
          <li>
            Schrijf snapshot- en unit tests voor React componenten met Jest,
            Enzyme en react-testing-library.
            <br />
            <span className="italic text-gray-600 text-sm">
              (React, Jest, Enzyme, React Testing Library)
            </span>
          </li>
        </ul>
      </div>

      <div className="pb-4 mb-4 border-b">
        <p className="md:flex justify-between items-end">
          <span className="font-bold text-lg block md:inline">
            <span>Capgemini</span>
            <br />
            <span>Front-End Developer</span>
          </span>
          <span className="mt-2 md:mt-0 md:text-right font-bold block md:inline">
            <span>05/2019 - heden</span> <br />
            <span>Utrecht, Nederland</span>
          </span>
        </p>
        <ul className="mt-3 list-outside list-disc pl-6">
          <li>
            Ontwerp en programmeer "Battle of the Clouds", een live en
            interactieve presentatie (Teqnation 2019) en stresstest waarbij de
            cloud diensten van Amazon, Google en Microsoft tot het uiterste
            getest worden. <br />
            <span className="italic text-gray-600 text-sm">
              (React, Amazon Web Services, Microsoft Azure, Google Cloud,
              Express.js, Next.js, Adobe XD)
            </span>
          </li>
          <li>
            Ontwikkel React componenten voor Capgemini Open Marketplace, een
            web-app waarbij de eindgebruiker financieel overzicht krijgt door
            middel van het aan elkaar knopen van verschillende financiele
            diensten en API's.
            <br />
            <span className="italic text-gray-600 text-sm">
              (React, Redux, serverless.js, RxJS, Mulesoft)
            </span>
          </li>
        </ul>
      </div>

      <div className="pb-4 mb-4 border-b">
        <p className="md:flex justify-between items-end">
          <span className="font-bold text-lg block md:inline">
            <span>Noten.nl</span>
            <br />
            <span>Full-Stack Developer</span>
          </span>
          <span className="mt-2 md:mt-0 md:text-right font-bold block md:inline">
            <span>01/2017 - heden</span> <br />
            <span>Nieuwegein, Nederland</span>
          </span>
        </p>
        <ul className="mt-3 list-outside list-disc pl-6">
          <li>
            Ontwerp en ontwikkel een maatwerk WordPress WooCommerce thema op
            basis van Trellis, Bedrock en Sage. Bij iedere verkoop worden de
            labels automatisch geprint door middel van een op maat gemaakte
            Google Cloud Print koppeling.
            <br />
            <span className="italic text-gray-600 text-sm">
              (Figma, HTML5, CSS3)
            </span>
          </li>
          <li>
            Fotografie en nabewerking van 400+ producten. Automatiseer het
            importeren van productspecificaties, automatiseer het vergelijken
            van prijzen in de markt door middel van scraping, automatiseer de
            maandelijkse prijswijzigingen voor de WordPress back-end.
            <br />
            <span className="italic text-gray-600 text-sm">
              (PHP, WordPress API, Advanced Custom Fields, Scrapy, Photoshop)
            </span>
          </li>
        </ul>
      </div>

      <div className="pb-4 mb-4 border-b">
        <p className="md:flex justify-between items-end">
          <span className="font-bold text-lg block md:inline">
            <span>
              Schiphol Group
              <span className="font-normal italic text-gray-600 ml-1">
                (in opdracht van Orange Tribes)
              </span>
            </span>
            <br />
            <span>Front-End Developer</span>
          </span>
          <span className="mt-2 md:mt-0 md:text-right font-bold block md:inline">
            <span>12/2018 - 02/2019</span> <br />
            <span>Hoofddorp, Nederland</span>
          </span>
        </p>
        <ul className="mt-3 list-outside list-disc pl-6">
          <li>
            Maak HTML5 en CSS3 templates voor de Integral Safety Schiphol
            website, op basis van aangeleverde schetsen.
            <br />
            <span className="italic text-gray-600 text-sm">
              (Figma, HTML5, CSS3)
            </span>
          </li>
          <li>
            Converteer een SVG kaart van Schiphol naar map tiles om deze te
            kunnen gebruiken met Leaflet.js. De SVG werd op vier verschillende
            zoom niveau's gerenderd, waardoor de eindgebruiker op de Schiphol
            kaart kan inzoomen en pannen zonder detail van de kaart te
            verliezen.
            <br />
            <span className="italic text-gray-600 text-sm">
              (Leaflet.js, SVG scripting)
            </span>
          </li>
          <li>
            Converteer de gebouwde HTML5 en CSS3 templates naar een eenvoudig te
            beheren WordPress thema op basis van de WordPress API in combinatie
            met de plugin Advanced Custom Fields.
            <br />
            <span className="italic text-gray-600 text-sm">
              (PHP, WordPress API, Advanced Custom Fields)
            </span>
          </li>
        </ul>
      </div>

      <div className="pb-4 mb-4 border-b">
        <p className="md:flex justify-between items-end">
          <span className="font-bold text-lg block md:inline">
            <span>Dojo Bali</span>
            <br />
            <span>Full-Stack Developer</span>
          </span>
          <span className="mt-2 md:mt-0 md:text-right font-bold block md:inline">
            <span>06/2018 - 12/2018</span> <br />
            <span>Canggu, Indonesië</span>
          </span>
        </p>
        <ul className="mt-3 list-outside list-disc pl-6">
          <li>
            Ontwikkel een web-app waarmee Dojo leden korting kunnen krijgen op
            partners van Dojo. De leden krijgen bij registratie van Dojo een
            automatisch gegenereerde QR-code die partners van Dojo kunnen
            scannen. Wanneer een actief en geldig abonnement is krijgt de
            persoon korting op een product of dienst, bijvoorbeeld een yoga- of
            surfles, of pizza.
            <br />
            <span className="italic text-gray-600 text-sm">
              (JavaScript, WordPress, Nexudus API, PHP, SendGrid, Cronjob.org)
            </span>
          </li>
          <li>
            Converteer aangeleverde Photoshop bestanden naar pixel-perfecte
            herbruikbare Divi templates in WordPress
            <br />
            <span className="italic text-gray-600 text-sm">
              (WordPress, Photoshop, Divi, CSS3)
            </span>
          </li>
        </ul>
      </div>

      <div className="pb-4 mb-4 border-b">
        <p className="md:flex justify-between items-end">
          <span className="font-bold text-lg block md:inline">
            <span>Formule1.nl</span>
            <br />
            <span>Full-Stack Developer</span>
          </span>
          <span className="mt-2 md:mt-0 md:text-right font-bold block md:inline">
            <span>06/2015 - 03/2017</span> <br />
            <span>Kaapstad, Zuid-Afrika</span>
          </span>
        </p>
        <ul className="mt-3 list-outside list-disc pl-6">
          <li>
            Automatiseer de data migratie van een oud CMS-systeem naar
            WordPress, maar zorg dat de +100K geïndexeerde pagina's
            (nieuwsberichten, foto's, statistieken) niet verloren gaan, en dat
            de sterke positie van een x-aantal pagina's behouden blijft.
            <br />
            <span className="italic text-gray-600 text-sm">
              (PHP, WordPress, Python)
            </span>
          </li>
          <li>
            Ontwerp een nieuwe, responsive front-end voor Formule1.nl en koppel
            deze aan een eenvoudig te beheren WordPress thema.
            <br />
            <span className="italic text-gray-600 text-sm">
              (Photoshop, WordPress, Advanced Custom Fields)
            </span>
          </li>
        </ul>
      </div>
      <div className="pb-5 mt-8">
        <h2 className="text-2xl font-bold leading-none">
          Hobbies en interesses
        </h2>
      </div>
      <div className="pb-4 mb-8">
        <ul className="list-outside list-disc pl-6">
          <li>
            <span className="font-bold">Mountainbiken.</span> Ik ben vaak te
            vinden op de trails van de Utrechtse Heuvelrug. Leersum, Amerongen
            en Zeist zijn favoriet!
          </li>
          <li>
            <span className="font-bold">Surfen.</span> Ik heb anderhalf jaar in
            Bali gewoond met als ultiem doel iedere dag op de surfplank te
            staan. Yew!
            <span role="img" aria-label="Surfs up">
              🤘
            </span>
          </li>
          <li>
            <span className="font-bold">Ondernemen.</span> Heb ik een idee? Dan
            probeer ik er een bedrijf van te maken. Noten.nl is hiervan het
            beste voorbeeld. Ondernemers, bootstrappers en freelancers
            inspireren me en zorgen dat ik mezelf blijf ontwikkelen.
          </li>
          <li>
            <span className="font-bold">Drummen.</span> Ik heb iedere week
            drumles en speel graag Hip-Hop, Jazz en Bossa Nova. Muzieknoten
            lezen kan ik niet, alles gaat op gevoel :)
          </li>
        </ul>
      </div>
    </section>
  </Layout>
)

export default Blog
