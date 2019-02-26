import React, { SFC } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const GetLogo = graphql`
  query GetLogo {
    file(relativePath: { eq: "uploads/SheeDraws_logo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 320) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export const Logo: SFC = () => (
  <StaticQuery query={GetLogo}>
    {({
      file: {
        childImageSharp: { fluid },
      },
    }) => <Img fluid={fluid} />}
  </StaticQuery>
)
