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
    
    function format(txt) {
      if (txt === 'Facebook') {
        return <Text>Facebook publication</Text>
      } else if (txt === 'Instagram'){
        return <Text>Instagram publication</Text>
      } else {
        return <Text>{txt}</Text>
      }
    }
    
    const articleData = data.allFile.edges.find(edge => edge.node.childDataJson.title === filename).node.childDataJson;
    console.log(articleData)

    return (
      <>
        <Text>
            {articleData.introduction}
        </Text>
        {articleData.dataContent.map((data) => {return format(data);})}
      </>
    )
  }

export default Article
