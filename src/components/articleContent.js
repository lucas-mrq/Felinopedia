import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Facebook from './facebook'
import Instagram from './instagram'
import styled from "styled-components"
import "../styles.css"

const Text = styled.div`
  min-width: 300px;
  margin: 10px 10% 10px 10%;
  text-align : justify;
  font-size: 18px;
`

const ArticleContent = ({ filename }) => {
    const data = useStaticQuery(graphql`
      query MyQuery {
        allFile(filter: { sourceInstanceName: { eq: "data" }, extension: { eq: "json" } }) {
          edges {
            node {
              childDataJson {
                title
                introduction
                dataContent
                facebookData {
                  icon
                  image {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                  texte
                  title
                  date
                }
                instagramData {
                  icon
                  image {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                  texte
                  title
                  date
                }
              }
            }
          }
        }
      }
    `)

    var articleData = data.allFile.edges.find(edge => edge.node.childDataJson.title ? edge.node.childDataJson.title === filename : null)
    articleData = articleData.node.childDataJson ? articleData.node.childDataJson : null;

    function format(txt, idx) {
      if (txt === 'Facebook') {
        return <Facebook key={idx} data={articleData.facebookData}/>
      } else if (txt === 'Instagram'){
        return <Instagram key={idx} data={articleData.instagramData}/>
      }
      return <Text key={idx}>{txt}</Text>
    }

    if (articleData){
      return (
        <>
          <Text>
              {articleData.introduction}
          </Text>
          {articleData.dataContent.map((data, index) => {return format(data, index);})}
        </>
      )
    } else {
      return null;
    }
  }

export default ArticleContent
