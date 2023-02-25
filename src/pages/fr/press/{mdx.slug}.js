import * as React from 'react'
import styled from "styled-components"
import Layout from '../../../components/layout'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      body
      frontmatter {
        title
        date(formatString: "DD.MM.YY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
const Title = styled.b`
  font-size: 40px;
  width: 450px;
  margin: 10px;
  color: #FFE6B5;
`
const Image = styled.div`
  width: 450px;
  margin: 10px;
`
const Main = styled.div`
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #FFE6B5;
  border-radius: 10px;
  color: #11574E;
  border-style: solid;
  border-width: 3px;
  border-color: #FFCBA5;
`
const Text = styled.div`
  width: 100%;
  min-width: 300px;
  margin: 10px;
`

const ArticlePost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  console.log(data)
  function convTexte(txt) {
    console.log(txt)
    const tab = txt.split(" ")
    let texte = ""
    for(let i = 1; i < tab.length; i++){
      texte += tab[i]
      texte += " "
    }
    return texte;
  }
  console.log(<MDXRenderer>{data.mdx.body}</MDXRenderer>)
  return (
    <Layout pageTitle={data.title} language={"french"}>
    <Title>{convTexte(data.mdx.frontmatter.title)}</Title>
      <Main>
        <Image>
          <GatsbyImage
            image={image}
            alt={data.mdx.frontmatter.hero_image_alt}
          />
          <p>
            Photo Credit:{" "}
            <a href={data.mdx.frontmatter.hero_image_credit_link}>
              {data.mdx.frontmatter.hero_image_credit_text}
            </a>
          </p>
        </Image>
        <Text>
          <MDXRenderer>
            {data.mdx.body}
          </MDXRenderer>
        </Text>
      </Main>
    </Layout>
  )
}

export default ArticlePost