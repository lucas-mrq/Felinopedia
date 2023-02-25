import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Facebook from '../components/facebook'
import Insta from '../components/instagram'
import { getImage } from 'gatsby-plugin-image'
import styled from "styled-components"
import { StaticImage } from 'gatsby-plugin-image'

const Image = styled.div`
  width: 50%;
  border-radius: 5px;
  background-color: #FFCBA5;
  padding: 5px;
  margin-left: 10px;
  margin-top: 10px;
  max-width: 500px;
`
const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          hero_image_alt
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        slug
      }
    }
    allDataJson {
      edges {
        node {
          facebook {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
const IndexPage = ({ data }) => {
  const imageData = getImage(data.allMdx.nodes[0].frontmatter.hero_image)
  const FacebookData = {
    icon: data.allDataJson.edges[data.allDataJson.edges.findIndex((a) => a.node.facebook != null )].node.facebook,
    image: imageData,
    texte: data.allMdx.nodes[0].frontmatter.hero_image_alt,
    title: "Zoo de Beauval",
    date: "10.10.2022"
  }
  return (
    <Layout pageTitle="Acceuil" language="french">
      <Main>
        <Image>
          <StaticImage alt="french flag" src="../../data/bienvenu/welcome.jpg"/>
        </Image>

        <Facebook data={FacebookData}/>
        <Insta data={FacebookData}/>
      </Main>
    </Layout>
  )
}
export default IndexPage