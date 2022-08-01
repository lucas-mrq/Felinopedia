import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../../components/layout'
import ArticlePanel from '../../../components/articlePanel'
import styled from "styled-components"

const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

const Felinopedia = ({ data }) => {
  return (
    <Layout pageTitle="Felinopedia" language={"french"}>
      <Flex>{data.allMdx.nodes.map((node) => node.frontmatter.title[0]==="F" ? <ArticlePanel key={node.id} 
                                                    title={node.frontmatter.animal} 
                                                    link={`/fr/felinopedia/${node.slug}`} 
                                                    date={node.frontmatter.date} 
                                                    img={[node.frontmatter.hero_image, node.frontmatter.hero_image_alt]}/>
                                                  : null
      )}</Flex>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          date(formatString: "DD.MM.YY")
          hero_image_alt
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
          animal
        }
        id
        slug
      }
    }
  }
`
export default Felinopedia