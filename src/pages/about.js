import React, { Component } from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Header from "../components/Header";

class AboutPage extends Component {
  render() {
    const contentTitle = "About";
    const siteTitle = this.props.data.site.siteMetadata.title;

    return (
      <Layout siteTitle={siteTitle} contentTitle={contentTitle} location={this.props.location}>
        <Header title={contentTitle} subtitle="Let's talk about me"/>

        <div className="container content section has-text-centered">
          <p>Ciao, sono <b>Federica Piergiacomi</b>.</p>
          <p>Essere o non essere, parte di quel meccanismo chiamato teatro.</p>
          <p>É forse più nobile soffrire,<br/>vedendo impotente le scene chiamate ad esistere sui palchi del bel paese o
            <br/>imbracciar l&#39;armi contro la crisi e combattendo con leciti mezzi decretarne la loro fine?</p>
          <p><strike>23</strike> 27 anni, <strike>da 4 studia Scenografia</strike>, da sempre ama il teatro.</p>
        </div>
      </Layout>
    );
  }
}

export default AboutPage;

export const pageQuery = graphql`
  query aboutPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

AboutPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};