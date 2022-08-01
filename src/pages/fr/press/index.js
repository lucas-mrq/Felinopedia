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

const Article = ({ data }) => {
  return (
    <Layout pageTitle="Article" language={"french"}>
      <Flex>{data.allMdx.nodes.map((node) => node.frontmatter.title==="Bienvenu" ?
            <ArticlePanel key={node.id} 
                          title={node.frontmatter.title} 
                          link={`/`} 
                          date={node.frontmatter.date} 
                          img={[node.frontmatter.hero_image, node.frontmatter.hero_image_alt]}/>
          : ( node.frontmatter.title[0]==="A" ? 
              <ArticlePanel key={node.id} 
                              title={node.frontmatter.title} 
                              link={`/fr/press/${node.slug}`} 
                              date={node.frontmatter.date} 
                              img={[node.frontmatter.hero_image, node.frontmatter.hero_image_alt]}/>
          : null)
      )}</Flex>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "DD.MM.YY")
          title
          hero_image_alt
          hero_image {
            childImageSharp {
              gatsbyImageData(width: 200)
            }
          }
        }
        id
        slug
      }
    }
  }
`
export default Article