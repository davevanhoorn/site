import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"

const Blog = () => (
  <Layout>
    <Helmet>
      <html lang="nl" />
      <title>React Front-End Developer → Dave van Hoorn → CV</title>
    </Helmet>

    <section className="text-gray-800">
      <div className="flex justify-between items-end flex-grow text-right border-b pb-3 mb-6">
        <h1 className="leading-none text-4xl font-bold">Dave van Hoorn</h1>
        <p className="text-sm leading-snug text-gray-600">
          Nieuwegein, Utrecht <br />
          hello@davevanhoorn.com - +31 (0)6 169 100 79
        </p>
      </div>
      <div className="pb-5">
        <h2 className="text-2xl font-bold leading-none">Werkervaring</h2>
      </div>

      <div className="pb-4 mb-4 border-b">
        <p className="flex justify-between items-end">
          <span className="font-bold text-lg">
            <span>
              Euroclear
              <span className="font-normal italic text-gray-600 ml-1">
                (in opdracht van Capgemini)
              </span>
            </span>
            <br />
            <span>Front-End Developer React.js</span>
          </span>
          <span className="text-right font-bold">
            <span>08/2019 - heden</span> <br />
            <span>Amsterdam, Nederland</span>
          </span>
        </p>
        <ul className="mt-3 list-outside list-disc pl-6">
          <li>
            Ontwikkel pixel-perfecte en herbruikbare React componenten op basis
            van het Material-UI framework
            <br />
            <span className="italic text-gray-600 text-sm">
              (React, Material-UI, Sketch, CSS3, HTML5)
            </span>
          </li>
          <li>
            Het ontwikkelen van formulieren met React Formik, integratie met de
            Azure Devops back-end door middel van Axios
            <br />
            <span className="italic text-gray-600 text-sm">
              (Axios, Microsoft Azure)
            </span>
          </li>
          <li>
            Het schrijven van snapshot tests en unit tests voor React
            componenten met Jest, Enzyme en de react-testing-library
            <br />
            <span className="italic text-gray-600 text-sm">
              (React, Jest, Enzyme, React-Testing-Library)
            </span>
          </li>
        </ul>
      </div>

      <div className="pb-4 mb-4 border-b">
        <p className="flex justify-between items-end">
          <span className="font-bold text-lg">
            <span>Capgemini</span>
            <br />
            <span>Front-End Developer</span>
          </span>
          <span className="text-right font-bold">
            <span>05/2019 - heden</span> <br />
            <span>Utrecht, Nederland</span>
          </span>
        </p>
        <ul className="mt-3 list-outside list-disc pl-6">
          <li>
            Ontwerp en programmeer "Battle of the Clouds" presentatie waarbij
            Amazon AWS, Google Cloud en Microsoft Azure tot de het uiterste
            worden getest in een interactieve load-test presentatie op de
            Teqnation conferentie <br />
            <span className="italic text-gray-600 text-sm">
              (React, Amazon Web Services, Microsoft Azure, Google Cloud,
              Express.js, Next.js, Adobe XD)
            </span>
          </li>
          <li>
            Ontwikkel React componenten voor de Capgemini Open Marketplace, een
            dashboard waarbij de eindgebruiker financieel overzicht krijgt door
            middel van het aan elkaar knopen van verschillende API's <br />
            <span className="italic text-gray-600 text-sm">
              (React, Redux, serverless.js, RxJS, Mulesoft)
            </span>
          </li>
        </ul>
      </div>

      <div className="pb-4 mb-4 border-b">
        <p className="flex justify-between items-end">
          <span className="font-bold text-lg">
            <span>Noten.nl</span>
            <br />
            <span>Full-Stack Developer</span>
          </span>
          <span className="text-right font-bold">
            <span>01/2017 - heden</span> <br />
            <span>Nieuwegein, Nederland</span>
          </span>
        </p>
        <ul className="mt-3 list-outside list-disc pl-6">
          <li>
            Ik maakte een WordPress + WooCommerce webshop volledig op maat vor
            <br />
            <span className="italic text-gray-600 text-sm">
              (Figma, HTML5, CSS3)
            </span>
          </li>
          <li>
            Ik converteerde een SVG illustratie van Schiphol naar verschillende
            map tiles om deze te kunnen gebruiken met Leaflet.js. De SVG werd op
            vier verschillende zoom niveau's gerenderd, waardoor de
            eindgebruiker op de Schiphol kaart kan inzoomen en pannen zonder
            detail van de kaart te verliezen.
            <br />
            <span className="italic text-gray-600 text-sm">
              (Leaflet.js, SVG scripting)
            </span>
          </li>
          <li>
            Ik converteerde de gebouwde HTML5 en CSS3 templates naar een
            eenvoudig te beheren WordPress thema op basis van de WordPress API
            in combinatie met de plugin Advanced Custom Fields.
            <br />
            <span className="italic text-gray-600 text-sm">
              (PHP, WordPress API, Advanced Custom Fields)
            </span>
          </li>
        </ul>
      </div>

      <div className="pb-4 mb-4 border-b">
        <p className="flex justify-between items-end">
          <span className="font-bold text-lg">
            <span>
              Schiphol Group
              <span className="font-normal italic text-gray-600 ml-1">
                (in opdracht van Orange Tribes)
              </span>
            </span>
            <br />
            <span>Front-End Developer</span>
          </span>
          <span className="text-right font-bold">
            <span>12/2018 - 02/2019</span> <br />
            <span>Hoofddorp, Nederland</span>
          </span>
        </p>
        <ul className="mt-3 list-outside list-disc pl-6">
          <li>
            Ik maakte, op basis van Figma bestanden, een responsive front-end
            voor de Integral Safety Schiphol website, klaar om geïntegreerd te
            worden met WordPress.
            <br />
            <span className="italic text-gray-600 text-sm">
              (Figma, HTML5, CSS3)
            </span>
          </li>
          <li>
            Ik converteerde een SVG illustratie van Schiphol naar verschillende
            map tiles om deze te kunnen gebruiken met Leaflet.js. De SVG werd op
            vier verschillende zoom niveau's gerenderd, waardoor de
            eindgebruiker op de Schiphol kaart kan inzoomen en pannen zonder
            detail van de kaart te verliezen.
            <br />
            <span className="italic text-gray-600 text-sm">
              (Leaflet.js, SVG scripting)
            </span>
          </li>
          <li>
            Ik converteerde de gebouwde HTML5 en CSS3 templates naar een
            eenvoudig te beheren WordPress thema op basis van de WordPress API
            in combinatie met de plugin Advanced Custom Fields.
            <br />
            <span className="italic text-gray-600 text-sm">
              (PHP, WordPress API, Advanced Custom Fields)
            </span>
          </li>
        </ul>
      </div>

      <div className="pb-4 mb-4 border-b">
        <p className="flex justify-between items-end">
          <span className="font-bold text-lg">
            <span>Dojo Bali</span>
            <br />
            <span>Full-Stack Developer</span>
          </span>
          <span className="text-right font-bold">
            <span>06/2018 - 12/2018</span> <br />
            <span>Canggu, Indonesië</span>
          </span>
        </p>
        <ul className="mt-3 list-outside list-disc pl-6">
          <li>
            Ik maakte, op basis van Figma bestanden, een responsive front-end
            voor de Integral Safety Schiphol website, klaar om geïntegreerd te
            worden met WordPress.
            <br />
            <span className="italic text-gray-600 text-sm">
              (Figma, HTML5, CSS3)
            </span>
          </li>
          <li>
            Ik converteerde een SVG illustratie van Schiphol naar verschillende
            map tiles om deze te kunnen gebruiken met Leaflet.js. De SVG werd op
            vier verschillende zoom niveau's gerenderd, waardoor de
            eindgebruiker op de Schiphol kaart kan inzoomen en pannen zonder
            detail van de kaart te verliezen.
            <br />
            <span className="italic text-gray-600 text-sm">
              (Leaflet.js, SVG scripting)
            </span>
          </li>
          <li>
            Ik converteerde de gebouwde HTML5 en CSS3 templates naar een
            eenvoudig te beheren WordPress thema op basis van de WordPress API
            in combinatie met de plugin Advanced Custom Fields.
            <br />
            <span className="italic text-gray-600 text-sm">
              (PHP, WordPress API, Advanced Custom Fields)
            </span>
          </li>
        </ul>
      </div>

      <div className="pb-4 mb-4 border-b">
        <p className="flex justify-between items-end">
          <span className="font-bold text-lg">
            <span>Formule1.nl</span>
            <br />
            <span>Full-Stack Developer</span>
          </span>
          <span className="text-right font-bold">
            <span>06/2015 - 03/2017</span> <br />
            <span>Kaapstad, Zuid-Afrika</span>
          </span>
        </p>
        <ul className="mt-3 list-outside list-disc pl-6">
          <li>
            Ik maakte, op basis van Figma bestanden, een responsive front-end
            voor de Integral Safety Schiphol website, klaar om geïntegreerd te
            worden met WordPress.
            <br />
            <span className="italic text-gray-600 text-sm">
              (Figma, HTML5, CSS3)
            </span>
          </li>
          <li>
            Ik converteerde een SVG illustratie van Schiphol naar verschillende
            map tiles om deze te kunnen gebruiken met Leaflet.js. De SVG werd op
            vier verschillende zoom niveau's gerenderd, waardoor de
            eindgebruiker op de Schiphol kaart kan inzoomen en pannen zonder
            detail van de kaart te verliezen.
            <br />
            <span className="italic text-gray-600 text-sm">
              (Leaflet.js, SVG scripting)
            </span>
          </li>
          <li>
            Ik converteerde de gebouwde HTML5 en CSS3 templates naar een
            eenvoudig te beheren WordPress thema op basis van de WordPress API
            in combinatie met de plugin Advanced Custom Fields.
            <br />
            <span className="italic text-gray-600 text-sm">
              (PHP, WordPress API, Advanced Custom Fields)
            </span>
          </li>
        </ul>
      </div>

      <div className="pb-4 mb-12">
        <p className="flex justify-between items-end">
          <span className="font-bold text-lg">
            <span>Freelance</span>
            <br />
            <span>Full-Stack Developer</span>
          </span>
          <span className="text-right font-bold">
            <span>10/2010 - heden</span> <br />
            <span>Wereldwijd</span>
          </span>
        </p>
        <ul className="mt-3 list-outside list-disc pl-6">
          <li>
            Ik maakte, op basis van Figma bestanden, een responsive front-end
            voor de Integral Safety Schiphol website, klaar om geïntegreerd te
            worden met WordPress.
            <br />
            <span className="italic text-gray-600 text-sm">
              (Figma, HTML5, CSS3)
            </span>
          </li>
          <li>
            Ik converteerde een SVG illustratie van Schiphol naar verschillende
            map tiles om deze te kunnen gebruiken met Leaflet.js. De SVG werd op
            vier verschillende zoom niveau's gerenderd, waardoor de
            eindgebruiker op de Schiphol kaart kan inzoomen en pannen zonder
            detail van de kaart te verliezen.
            <br />
            <span className="italic text-gray-600 text-sm">
              (Leaflet.js, SVG scripting)
            </span>
          </li>
          <li>
            Ik converteerde de gebouwde HTML5 en CSS3 templates naar een
            eenvoudig te beheren WordPress thema op basis van de WordPress API
            in combinatie met de plugin Advanced Custom Fields.
            <br />
            <span className="italic text-gray-600 text-sm">
              (PHP, WordPress API, Advanced Custom Fields)
            </span>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
)

export default Blog
