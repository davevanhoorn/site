import React from "react"

import styles from "./footer.module.css"
import github from "../../assets/images/github.svg"
import whatsapp from "../../assets/images/whatsapp.svg"
import twitter from "../../assets/images/twitter.svg"

const Footer = () => (
  <footer className={styles.wrapper}>
    <p>
      <strong>Dave van Hoorn</strong>
      <br />
      yo{`{at}`}davevanhoorn.com
      <br />
      <a
        href="https://wa.me/0031616910079"
        title="Chat with me on WhatsApp"
        target="_blank"
        rel="noopener"
      >
        <img src={whatsapp} alt="WhatsApp icon" />
        +31 (0)6 169 100 79
      </a>
      <br />
      <a
        href="https://twitter.com/davevanhoorn"
        title="My Twitter Page"
        target="_blank"
        rel="noopener"
      >
        <img src={twitter} alt="Twitter icon" />
        @davevanhoorn
      </a>
      <br />
      <a
        href="https://github.com/davevanhoorn"
        title="My GitHub Profile"
        target="_blank"
        rel="noopener"
      >
        <img src={github} alt="GitHub icon" />
        https://github.com/davevanhoorn
      </a>
    </p>
  </footer>
)

export default Footer
