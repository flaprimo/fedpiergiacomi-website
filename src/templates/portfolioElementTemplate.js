import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PropTypes from "prop-types";
import Img from "gatsby-image";

class PortfolioElementTemplate extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title;

    const portfolioElement = this.props.data.markdownRemark;

    const title = portfolioElement.frontmatter.title;
    const date = portfolioElement.frontmatter.date;
    const location = portfolioElement.frontmatter.location;
    const director = portfolioElement.frontmatter.director;
    const roles = portfolioElement.frontmatter.roles.join(", ");
    const type = portfolioElement.frontmatter.type;
    const production = portfolioElement.frontmatter.production;
    const cast = portfolioElement.frontmatter.cast.map((member, i) =>
      <li key={i} style={{marginLeft: "5px"}}>
        {member}
      </li>
    );

    const html = portfolioElement.html;

    return (
      <Layout contentTitle={title} siteTitle={siteTitle} location={this.props.location}>
        <header className="hero is-dark">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column">
                  <h1 className="title">{title}</h1>
                  <br/>
                  <h2 className="subtitle"><b>Roles:</b> {roles}</h2>
                </div>
                <div className="column">
                  <p><strong>Production:</strong> {production}</p>
                  <p><strong>Director:</strong> {director}</p>
                  <p><strong>Cast:</strong></p>
                  <ul>{cast}</ul>
                </div>
                <div className="column">
                  <p><strong>Type:</strong> {type}</p>
                  <p><strong>Location:</strong> {location}</p>
                  <p><strong>Date:</strong> {date}</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container section">
          <div className="content" dangerouslySetInnerHTML={{ __html: html }}/>

          <div className="columns is-multiline is-centered">
            {this.props.data.allFile.edges.map((image, i) => (
              <div key={i} className="column is-narrow">
                <Img resolutions={image.node.childImageSharp.resolutions} />
              </div>
            ))}
          </div>
        </div>
      </Layout>
    );
  }
}

export default PortfolioElementTemplate;

export const pageQuery = graphql`
  query galleryElementQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        location
        director
        roles
        type
        production
        cast
      }
    }
    allFile(filter: {
      sourceInstanceName: {eq: "portfolio"},
      internal: {mediaType: {eq: "image/jpeg"}},
      absolutePath: {regex: $slug}
    }) {
      totalCount
      edges {
        node {
          childImageSharp {
            resolutions {
              ...GatsbyImageSharpResolutions_tracedSVG
            }
          }
        }
      }
    }
  }
`;

PortfolioElementTemplate.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    markdownRemark: PropTypes.object.isRequired,
    allFile: PropTypes.object.isRequired
  }).isRequired,
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    next: PropTypes.object,
    previous: PropTypes.object
  }).isRequired
};