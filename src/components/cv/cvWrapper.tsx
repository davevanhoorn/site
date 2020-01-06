import React, { FunctionComponent } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "./cvWrapper.module.css"

const CvWrapper: FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query {
      profilePicture: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const roles = [
    {
      company: "Euroclear (for Capgemini)",
      role: "Front-End Developer",
      date: {
        start_date: "08/2019",
        end_date: "Current",
      },
      location: "Amsterdam, the Netherlands",
      tasks: [
        {
          title:
            "Develop pixel-perfect, reusable React components with the Material-UI framework for use in an enterprise level application.",
          tags: ["React", "Material-UI", "Sketch", "CSS3", "HTML5"],
        },
        {
          title:
            "Develop forms with React Formik and integrate these with the web API running on .NET.",
          tags: ["Axios", "Azure Devops", ".NET"],
        },
        {
          title:
            "Write snapshot- and unit tests for React components with Jest, Enzyme and the React Testing Library.",
          tags: ["React", "Jest", "Enzyme", "React Testing Library"],
        },
      ],
    },
    {
      company: "Capgemini",
      role: "Front-End Developer",
      date: {
        start_date: "05/2019",
        end_date: "Current",
      },
      location: "Utrecht, Netherlands",
      tasks: [
        {
          title:
            'Design and develop "Battle of the Clouds", a live and interactive presentation (on Teqnation 2019) and stresstest to test the limits of Amazon AWS, Google Cloud Services and Microsoft Azure.',
          tags: [
            "React",
            "Amazon Web Services",
            "Microsoft Azure",
            "Google Cloud",
            "Express.js",
            "Next.js",
            "Adobe XD",
          ],
        },
        {
          title:
            "Develop React components for the Capgemini Open Marketplace project which connects multiple API's (through Mulesoft) to visualise your financial status in one dashboard.",
          tags: ["React", "Redux", "serverless.js", "RxJS", "Mulesoft"],
        },
      ],
    },
    {
      company: "Noten.nl",
      link: "https://noten.nl",
      role: "Full-Stack Developer",
      date: {
        start_date: "01/2017",
        end_date: "Current",
      },
      location: "Utrecht, Netherlands",
      tasks: [
        {
          title:
            "Design and develop a completely custom WordPress WooCommerce theme and automate the printing of the (by PHP generated) labels through PrintNode.com.",
          tags: ["Figma", "HTML5", "CSS3"],
        },
        {
          title:
            "Build a scraper to analyse nut prices within the market and synchronize these with the backend of Noten.nl.",
          tags: ["Scrapy (Python)", "PHP"],
        },
        {
          title:
            "Take 300+ photo's of nuts, coffee and tea. Edit and isolate these in Photoshop CC to use online.",
          tags: ["Canon EOS 550d", "Photoshop CC"],
        },
      ],
    },
    {
      company: "Schiphol Group (for Orange Tribes)",
      link: "https://integralsafetyschiphol.com/",
      role: "Full-Stack Developer",
      date: {
        start_date: "12/2018",
        end_date: "02/2019",
      },
      location: "Amsterdam, Netherlands",
      tasks: [
        {
          title:
            "Create pixel-perfect HTML5 and CSS3 templates for a corporate, greenfield WordPress project.",
          tags: ["Figma", "HTML5", "CSS3"],
        },
        {
          title:
            "Convert a SVG file to map tiles for use with Leaflet.js. This SVG is used in the website to zoom in and out of four levels of details of Schiphol, one of the biggest airports in Europe.",
          tags: ["Leaflet.js", "SVG scripting"],
        },
        {
          title:
            "Use Advanced Custom Fields to create an interactive and responsive WordPress theme.",
          tags: ["PHP", "WordPress API", "Advanced Custom Fields"],
        },
      ],
    },
    {
      company: "Dojo Bali",
      link: "https://www.dojobali.org/",
      role: "Full-Stack Developer",
      date: {
        start_date: "06/2018",
        end_date: "12/2018",
      },
      location: "Canggu, Bali",
      tasks: [
        {
          title:
            "Deveop a web-app for Dojo members to gain access to discounts. Newly registered members receive a custom email with a QR code. This QR code can be used at partners to validate their membership.",
          tags: [
            "JavaScript",
            "jQuery",
            "Nexudus API",
            "PHP",
            "SendGrid",
            "CronJob.org",
            "CSS3",
          ],
        },
        {
          title:
            "Convet PSD files to pixel-perfect and responsive Divi templates.",
          tags: ["WordPress", "Photoshop", "Divi", "CSS3"],
        },
      ],
    },
    {
      company: "Formule1.nl",
      link: "https://www.formule1.nl/",
      role: "Full-Stack Developer",
      date: {
        start_date: "06/2015",
        end_date: "03/2017",
      },
      location: "Amsterdam, Netherlands",
      tasks: [
        {
          title:
            "Automate the migration of posts, images and statistics from an old CMS to WordPress, but make sure the number 1 position in Google remains.",
          tags: ["PHP", "WordPress", "Python"],
        },
        {
          title:
            "Develop a responsive front-end and use WordPress as the back-end.",
          tags: ["WordPress", "Photoshop", "Advanced Custom Fields"],
        },
      ],
    },
  ]

  return (
    <div className={styles.wrapper}>
      <div className={styles.intro}>
        <div className={styles.introLeft}>
          <h2 className={styles.introTitle}>Dave van Hoorn</h2>
          <table className={styles.introHighlights}>
            <tbody>
              <tr>
                <td>Email: </td>
                <td>yo@davevanhoorn.com</td>
              </tr>
              <tr>
                <td>Telephone: </td>
                <td>+31 (0)6 169 100 79</td>
              </tr>
              <tr>
                <td>Location: </td>
                <td>Utrecht, Netherlands</td>
              </tr>
              <tr>
                <td>Birthdate: </td>
                <td>13 May 1989</td>
              </tr>
              <tr>
                <td>Rate: </td>
                <td>€100/hour</td>
              </tr>
              <tr>
                <td>Hobbies: </td>
                <td>Mountainbike, surfing, drums, my doggo</td>
              </tr>
            </tbody>
          </table>
          <button className={styles.introContactButton}>
            I'm not available for new work
          </button>
        </div>
        <div className={styles.introImageWrapper}>
          <Img
            className={styles.thumbnail}
            fluid={data.profilePicture.childImageSharp.fluid}
            alt="Dave van Hoorn"
          />
        </div>
      </div>
      <h2 className={styles.experienceTitle}>Work experience</h2>
      {roles.map((role, index) => (
        <div key={`role-${index}`} className={styles.role}>
          <div className={styles.roleHeader}>
            <div className={styles.roleCompany}>
              <b>{role.company}</b>
              {role.link && (
                <a
                  className={styles.projectLink}
                  href={role.link}
                  target="_blank"
                >
                  View website
                </a>
              )}
              <br />
              {role.role}
            </div>
            <div className={styles.roleDate}>
              <b>
                {role.date.start_date} - {role.date.end_date}
              </b>
              <br />
              {role.location}
            </div>
          </div>
          <ul className={styles.roleTaskList}>
            {role.tasks.map((task, index) => (
              <li key={`task-${task}-${index}`} className={styles.roleTask}>
                {task.title}
                {task.tags && (
                  <>
                    <br />
                    {task.tags.map((tag, index) => (
                      <span key={`tag-${tag}-${index}`} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default CvWrapper
