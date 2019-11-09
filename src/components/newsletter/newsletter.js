import React, { useState } from "react"
import { Formik, useFormik } from "formik"
import * as Yup from "yup"
import classNames from "classnames"
import axios from "axios"

import thanks from "../../images/thanks.gif"

const formHandler = email =>
  axios({
    method: "POST",
    url: "/.netlify/functions/mailchimp-signup",
    data: {
      email: email,
    },
  })

const Newsletter = () => {
  const [error, setError] = useState(null)
  const [confirmed, setConfirmed] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Ongeldige email")
        .required("Dit veld is verplicht"),
    }),
    onSubmit: (values, actions) => {
      actions.setSubmitting(true)
      formHandler(values.email)
        .then(() => {
          actions.setSubmitting(false)
          setConfirmed(true)
        })
        .catch(e => {
          setError(e)
          actions.setSubmitting(false)
        })
    },
  })

  return (
    <div className="container max-w-2xl flex mb-8 text-gray-700">
      <div className="w-full rounded-lg shadow-lg sm:w-1/2 ml-auto mr-auto">
        <div className="z-10 bg-white p-6 relative">
          {!confirmed && (
            <>
              <h1 className="font-semibold text-xl mb-2">
                Op de hoogte blijven?
                <span className="ml-2" role="img" aria-label="Fire">
                  🤯
                </span>
              </h1>
              <p className="text-base mb-3">
                Meld je aan voor mijn nieuwsbrief en blijf op de hoogte over
                React development, (freelance) webdesign en het bootstrappen van
                winstgevende bedrijven
              </p>
              <Formik>
                <form onSubmit={formik.handleSubmit}>
                  <input
                    name="email"
                    className="text-base text-gray-700 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-3 block w-full appearance-none leading-normal"
                    type="email"
                    placeholder="naam@voorbeeld.com"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="mt-1 text-red-500">
                      {formik.errors.email}
                    </div>
                  ) : null}
                  <button
                    type="submit"
                    className={classNames(
                      {
                        "text-base mt-3 text-white font-bold py-2 px-4 rounded": true,
                      },
                      { "bg-red-600": formik.isSubmitting === false },
                      { "hover:bg-red-700": formik.isSubmitting === false },
                      { "bg-gray-400": formik.isSubmitting === true }
                    )}
                  >
                    Aanmelden
                  </button>
                  {error && <p>{error}</p>}
                </form>
              </Formik>
            </>
          )}
          {confirmed && (
            <>
              <p className="text-base mb-2">
                Whooop je bent aangemeld! De nieuwsbrief komt snel jouw kant op.
              </p>
              <img className="rounded" src={thanks} alt="Thanks partner!" />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Newsletter
