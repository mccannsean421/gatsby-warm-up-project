import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

//import './index.css'
import './index.scss'

const Header = () => (
  <div>
    <div className="header">
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          Gatsby Tutorial
        </Link>
      </h1>

      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/posts">Posts</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  </div>
)

const Footer = () => (
  <div>
    <div className="footer">
      <span>This is the footer.</span>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Home Page"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
