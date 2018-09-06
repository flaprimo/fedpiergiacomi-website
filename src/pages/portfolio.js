import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/Layout";
import PropTypes from "prop-types";
import Header from "../components/Header";
import styled from "styled-components";

const Card = styled.div`
  &.card {
    box-shadow: none;
  }

  .over-image {
    margin: -10px;
    position: absolute;
  }
  .card-content {
    opacity: 0;
    color: white;
  }
  .card-content, .over-image {
    transition-timing-function: ease-out;
    transition: 0.2s;
  }
  
  &:hover {
    .over-image {
      filter: blur(12px) brightness(0.8);
    }
    .card-content {
      opacity: 1;
    }
    .card-content, .over-image {
      transition-timing-function: ease-in;
      transition: 0.25s;
    }
  }
`;

class PortfolioPage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title;
    const contentTitle = "Portfolio";
    const blogElements = this.props.data.allMarkdownRemark.edges;

    return (
      <Layout siteTitle={siteTitle} contentTitle={contentTitle} location={this.props.location}>
        <Header title={contentTitle} subtitle="Welcome to the portfolio"/>

        <div className="container section">
          <div className="columns is-multiline is-centered">
            {blogElements.map(({ node }) => {
              const slug = node.fields.slug;
              const title = node.frontmatter.title || node.fields.slug;
              const cover = node.frontmatter.cover.childImageSharp.fluid;
              const type = node.frontmatter.type;
              const director = node.frontmatter.director;
              const production = node.frontmatter.production;
              const roles = node.frontmatter.roles.map((role, i) =>
                <span key={i} className="tag is-info">
                  {role}
                </span>
              );

              return (
                <div key={slug} className="column is-one-quarter-desktop is-half-tablet">
                  <Card className="card">
                    <Link to={"/portfolio" + slug}>
                      <div className="card-image" style={{overflow: "hidden"}}>
                        <Img className="image" fluid={cover}/>
                        <Img className="over-image image is-overlay" style={{position:"absolute"}} fluid={cover}/>
                        <div className="card-content is-overlay">
                          <div className="card" style={{backgroundColor: "transparent", boxShadow: "none"}}>
                            <div className="card-header" style={{boxShadow: "none"}}>
                              <p className="card-header-title tags">
                                {roles}
                              </p>
                            </div>
                            <div className="card-content">
                              <div className="content">
                                <p><strong>type:</strong> {type}</p>
                                <p><strong>director:</strong> {director}</p>
                                <p><strong>production:</strong> {production}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <footer className="card-footer" style={{border: 0}}>
                        <span className="card-footer-item">
                          {title}
                        </span>
                      </footer>
                    </Link>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    );
  }
}

export default PortfolioPage;

export const pageQuery = graphql`
  query portfolioPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/portfolio/"}},
      sort: { fields: [frontmatter___date], order: DESC })
    {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            roles
            type
            director
            production
            cover {
              childImageSharp {
                fluid(maxHeight: 300, maxWidth: 300, quality: 85, traceSVG: { color: "#2B2B2F" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;

PortfolioPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    allMarkdownRemark: PropTypes.object.isRequired
  }).isRequired
};