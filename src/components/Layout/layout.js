import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from '../Header/Header'
import './Layout.css'
import ResponsiveSidebar from '../ResponsiveSidebar';
import Container from '../Container';
import ResponsiveAnchor from '../ResponsiveAnchor';
import ResponsiveTopBar from '../ResponsiveTopBar';
import { setPostPageOn, setPostPageOff } from '../../actions/layout'
import { connect } from 'react-redux'
import { pathPrefix } from '../../../gatsby-config'

const Layout = ({ 
  children,
  setPostPageOn,
  setPostPageOff,
  sidebarRoot,
}) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => {
      const allPosts = data.allMarkdownRemark.edges.map(edge => edge.node.fields.slug)
      if (typeof window !== 'undefined') {
<<<<<<< HEAD
        allPosts.indexOf(window.location.pathname.replace(pathPrefix.slice(0,-1),"")) >= 0 ?
=======
        const path = window.location.pathname.replace(pathPrefix.slice(0,-1),"")
        allPosts.indexOf(path) >= 0 || allPosts.indexOf(path.slice(0,-1)) >= 0 ?
>>>>>>> master
        setPostPageOn() : setPostPageOff()
      }
      
      return (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <ResponsiveTopBar root={sidebarRoot}/>
        <ResponsiveSidebar root={sidebarRoot}/>
        <ResponsiveAnchor />
        <Container>
          {children}
        </Container>
      </>)
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const mapDispatchToProps = {
  setPostPageOn,
  setPostPageOff,
}

export default connect(()=>({}), mapDispatchToProps) (Layout)