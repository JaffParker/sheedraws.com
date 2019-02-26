import React, { Fragment } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { SFC } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Helmet } from 'react-helmet'

import '../../css/global.css'

interface QueryResponse {
  settingsYaml: {
    name: string
  }
}

const GetSiteSettings = graphql`
  query GetSiteSettings {
    settingsYaml {
      name
    }
  }
`

export const Layout: SFC = ({ children }) => (
  <StaticQuery query={GetSiteSettings}>
    {({ settingsYaml: { name } }: QueryResponse) => (
      <Fragment>
        <Helmet>
          <title>{name}</title>
        </Helmet>
        <div className="container pt-6">
          <Header />
          {children}
          <Footer />
        </div>
      </Fragment>
    )}
  </StaticQuery>
)
