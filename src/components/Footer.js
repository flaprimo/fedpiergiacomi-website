import React from "react";
import SocialButton from "./SocialButtons";
import "bulma-extensions/bulma-divider/dist/css/bulma-divider.min.css";

const Footer = () => (
  <div className="footer">
    <div className="container">
      <div className="container has-text-centered">
        <h2 className="subtitle">Who I am.</h2>

        <p>I am a set and light designer.</p>
        <p>Say hello to <a href="mailto:federicapiergiacomi@gmail.com?Subject=Hello">Federica Piergiacomi</a></p>
      </div>
      <div className="is-divider"/>

      <div className="container has-text-centered">
        <SocialButton/>
        <br/>
        <p>© Copyright {(new Date()).getFullYear()}</p>
        <p>Design by <a href="https://www.flavioprimo.xyz" target="_blank" rel="noopener noreferrer">Flavio Primo</a> & Federica Piergiacomi</p>
      </div>

    </div>
  </div>
);

export default Footer;