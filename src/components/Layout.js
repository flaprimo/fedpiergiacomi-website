import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

import Footer from "./Footer";
import Nav from "./Nav";
import "bulma/css/bulma.css";

class Layout extends React.Component {
  render() {
    const { siteTitle, contentTitle, location, children } = this.props;
    const title = `${contentTitle} | ${siteTitle}`;
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <html className="has-navbar-fixed-top"/>
        </Helmet>
        <Nav location={location}/>
        <main style={{
          position: "relative",
          zIndex: "1",
          marginBottom: "400px",
          backgroundColor: "white"
        }}>
          {children}
        </main>
        <footer style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          height: "400px"
        }}>
          <Footer/>
        </footer>
      </div>
    );
  }
}

export default Layout;

Layout.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  contentTitle: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired
};
