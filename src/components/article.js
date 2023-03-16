import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import "../styles.css"

const Text = styled.div`
  width: 100%;
  min-width: 300px;
  margin: 10px;
`

const Article = ({ filename, children }) => {
    const data = useStaticQuery(graphql`
      query MyQuery {
        allFile(filter: { sourceInstanceName: { eq: "data" }, extension: { eq: "json" } }) {
          edges {
            node {
              childDataJson {
                title
                introduction
                dataOrder
                dataContent
              }
              name
            }
          }
        }
      }
    `)
  
    
    const articleData = data.allFile.edges.find(edge => edge.node.childDataJson.title === filename).node.childDataJson;
    console.log(articleData)

    return (
      <>
        <Text>
            {articleData.introduction}
        </Text>
        <Text>
            {articleData.dataContent}
        </Text>
      </>
    )
  }

export default Article
