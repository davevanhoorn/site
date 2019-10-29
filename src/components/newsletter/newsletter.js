import React from "react"
import { Formik, useFormik } from "formik"
import * as Yup from "yup"
import classNames from "classnames"

const Newsletter = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email addresss")
        .required("Required"),
    }),
    onSubmit: values => {
      console.log(values)
    },
  })

  return (
    <div className="container max-w-2xl flex mb-8 text-gray-700">
      <div className="bg-white w-1/2 p-6 rounded-lg shadow-lg">
        <h1 className="font-semibold text-xl mb-2">
          Meer weten?
          <span className="ml-2" role="img" aria-label="Fire">
            🤯
          </span>
        </h1>
        <p className="text-base">
          Leer ook programmeren, Leer ook programmeren Leer ook programmeren,
          Leer ook programmeren Leer ook programmeren
        </p>
        <br />
        <Formik>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input
              name="email"
              className="mt-1 text-base text-gray-700 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-3 block w-full appearance-none leading-normal"
              type="email"
              placeholder="jane@example.com"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="mt-1 text-red-500">{formik.errors.email}</div>
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
          </form>
        </Formik>
      </div>
    </div>
  )
}

export default Newsletter
