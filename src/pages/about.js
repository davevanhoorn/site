import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import dave from "../images/dave.gif"

const Blog = () => (
  <Layout>
    <Helmet>
      <html lang="nl" />
      <title>Contact</title>
    </Helmet>
    <section className="md:flex text-gray-800 pb-10 items-center">
      <figure className="md:w-1/2 px-6 w-full mb-4 sm:mb-0">
        <img className="rounded" src={dave} alt="Dave" />
      </figure>
      <div className="md:w-1/2">
        <h1 className="text-2xl font-bold mb-1">
          <span
            className="mr-2 hidden md:inline"
            role="img"
            aria-label="Wijsvinger"
          >
            👈🏻
          </span>
          <span className="mr-2 md:hidden" role="img" aria-label="Wijsvinger">
            ☝🏻
          </span>
          Dat ben ik!
        </h1>
        <p>
          Swingend in mijn oude Nissan Micra, luisterend naar het nummer{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://open.spotify.com/track/1mOIOim4QHFVKavrJQ8G90?si=LIS-fM58SBSQFERmTpQkNg"
            title="Luister naar het nummer Shickeria van Spider Murphy Gang op Spotify"
          >
            Shickeria van Spider Murphy Gang.
          </a>
        </p>
        <p className="mt-2">
          Ik ben Dave, een vrolijke dude met passie voor niet alleen alles wat
          met online te maken heeft, maar ook met wat we doen tijdens ons
          offline bestaan.
        </p>
        <p className="mt-2">
          Van maandag tot vrijdag werk ik als professioneel front-end developer
          voor Capgemini. In het weekend ben ik graag aan het mountainbiken,
          surfen of werk ik aan mijn eigen bedrijf,{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://noten.nl/?source=davevanhoorn.com"
            title="Noten.nl"
          >
            Noten.nl
          </a>
          .
        </p>
        <p className="mt-2">
          Vragen over mijn site? Geef een belletje: +31 (0)6 169 100 70
        </p>
      </div>
    </section>
  </Layout>
)

export default Blog
