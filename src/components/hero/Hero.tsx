import React, { FunctionComponent } from "react"
import ThumbUp from "../atoms/icons/ThumbUp"
const Hero: FunctionComponent = () => {
  return (
    <div className="relative bg-white overflow-hidden mb-20">
      <div className="max-w-screen-xl mx-auto ">
        <div className="relative z-10 bg-white lg:max-w-2xl lg:w-full">
          <div className="mx-auto max-w-screen-xl">
            <div className="px-4 lg:text-left lg:pr-0 py-16">
              <h2 className="sm:text-center lg:text-left text-6xl tracking-loose leading-tight font-bold text-black">
                Dave van Hoorn
                <br />
                Freelance React Developer
              </h2>
              <ul className="leading-relaxed mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                <li className="relative pl-8">
                  <ThumbUp className="absolute -ml-8 mt-1" />
                  Ik heb meer dan 10 jaar web development ervaring
                </li>
                <li className="relative pl-8">
                  <ThumbUp className="absolute -ml-8 mt-1" />
                  Ik ben Scrum gecertificeerd, leergierig en positief ingesteld
                </li>
                <li className="relative pl-8">
                  <ThumbUp className="absolute -ml-8 mt-1" />
                  Ik heb gewerkt voor éénmanszaken en multinationals
                </li>
                <li className="relative pl-8">
                  <ThumbUp className="absolute -ml-8 mt-1" />
                  Ik werk dagelijks met React en TypeScript
                </li>
                <li className="relative pl-8">
                  <ThumbUp className="absolute -ml-8 mt-1" />
                  Ik ben beschikbaar voor *remote* werk
                </li>
              </ul>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-black focus:outline-none focus:shadow-outline focus:border-teal-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-8"
                  >
                    Bekijk mijn C.V.
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-black bg-gray-300 focus:outline-none focus:shadow-outline focus:border-teal-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-8"
                  >
                    Neem contact op
                  </a>
                </div>
              </div>
            </div>
          </div>
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
        />
      </div>
    </div>
  )
}

export default Hero
