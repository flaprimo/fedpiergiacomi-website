import React from "react";
import Link from "gatsby-link";
import { withPrefix } from "gatsby-link";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const Span = styled.span`
  &.home {
    color: white;
  }
`;

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      home: true,
      visible: false
    };
  }

  render() {
    const logo = withPrefix("/logo.svg");
    const title = this.props.data.site.siteMetadata.title;

    return (
      <nav className={"navbar is-fixed-top"}
           style={{ background: this.state.home ? "transparent" : "" }}>
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to={"/"}>
              <img style={{ "height": "28px" }} src={logo}/>
              &emsp;
              <b style={{ color: this.state.home ? "white" : "" }}>{title}</b>
            </Link>
            <Span className={"navbar-burger burger" +
            (this.state.visible ? " is-active" : "") +
            (this.state.home ? " home" : "")}
                  onClick={this.toggleBurgerOnClick}>
              <span/>
              <span/>
              <span/>
            </Span>
          </div>
        </div>
      </nav>
    );
  }

  componentDidMount() {
    window.addEventListener("resize", this.toggleBurgerOnResize);
    this.checkHome();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.toggleBurgerOnResize);
  }

  checkHome = () => {
    if (this.props.location.pathname === "/") {
      this.setState({
        home: true
      });
    } else {
      this.setState({
        home: false
      });
    }
  };

  toggleBurgerOnClick = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  toggleBurgerOnResize = () => {
    if (window.innerWidth > 1021) {
      this.setState({
        visible: false
      });
    }
  };
}

/* Query */
export default props => (
  <StaticQuery
    query={graphql`
      query NavQuery {
        site {
          siteMetadata {
            title,
            nav {
              title,
              url
            }
          }
        }
      }
    `}
    render={data => <Nav data={data} {...props} />}
  />
)

Nav.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        nav: PropTypes.array.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};