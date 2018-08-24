import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import { withPrefix } from "gatsby-link";

import Layout from "../components/Layout";

class IndexPage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.description;
    const contentTitle = this.props.data.site.siteMetadata.title;
    const bg = withPrefix("/index-bg.jpg");

    return (
      <Layout siteTitle={siteTitle} contentTitle={contentTitle}>
        <div className="hero is-primary is-medium is-fullheight"
             style={{
               "marginTop": "-52px",
               "paddingTop": "52px",
               "backgroundImage": "url(" + bg + ")",
               "backgroundPosition": "center center",
               "backgroundSize": "cover"
             }}>
          <div className="hero-body">
          </div>
          <div className="hero-footer" style={{"paddingBottom": "3rem"}}>
            <div className="container has-text-centered">
              <h1 className="title has-text-white" style={{"textShadow": "1px 1px 1px #000"}}>
                Hi, I&#39;m Federica Piergiacomi
              </h1>
              <h2 className="subtitle has-text-white" style={{"textShadow": "1px 1px 1px #000"}}>
                The most amazing set and light designer &lt;3
              </h2>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};