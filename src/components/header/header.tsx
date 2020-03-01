import React, { FunctionComponent } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import { TSiteMetaData } from "../atoms/seoTypes"
import styles from "./header.module.css"
import dave from "../../assets/images/dave.jpg"

type TStaticQuerySite = {
  site: {
    siteMetadata: TSiteMetaData
  }
}

const Header: FunctionComponent = () => {
  const data: TStaticQuerySite = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  const menu = [
    { to: "/", title: "Home" },
    { to: "/cv", title: "C.V." },
  ]

  return (
    <>
      <div className={styles.wrapper}>
        <div className="py-6 px-4 w-full max-w-screen-xl mx-auto">
          <nav className="flex justify-between items-center">
            <div className="flex items-center justify-center">
              <img
                className="mr-4 inline-block h-12 w-12 rounded-full text-white shadow-solid"
                src={dave}
                alt="Dave"
              />
              <div>
                <p className="font-medium">
                  <span className="font-bold">
                    {data.site.siteMetadata.title}
                  </span>
                  <br />
                  <span className="text-green-500">
                    Per 04-2020 beschikbaar / €75 p.u. / alleen remote
                  </span>
                </p>
              </div>
            </div>
            <div className="-mr-2 flex items-center md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-black focus:outline-none"
              >
                <svg
                  className="h-8 w-8"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            <div className="hidden md:block md:ml-10">
              <a
                href="#"
                className="text-black focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
              >
                Home
              </a>
              <a
                href="#"
                className="ml-8 text-black focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
              >
                Over mij
              </a>
              <a
                href="#"
                className="ml-8 text-black focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
              >
                Portfolio
              </a>
              <a
                href="#"
                className="ml-8 text-black focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
              >
                C.V.
              </a>
              <a
                href="#"
                className="ml-8 text-black focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
              >
                Blog
              </a>
              <a
                href="#"
                className="ml-8 text-black focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
              >
                Contact
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header
