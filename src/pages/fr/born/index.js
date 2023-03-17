import * as React from 'react'
//import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../../../components/layout'
/*import styled from "styled-components"

const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`*/

const Born = ({ children }) => {
  
  /*const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { sourceInstanceName: { eq: "data" }, extension: { eq: "json" } }) {
        edges {
          node {
            childDataJson {
              title
              introduction
            }
          }
        }
      }
    }
  `)

  const articleData = data.allFile.edges.find(edge => edge.node.childDataJson.title === "Naissance");

  console.log(articleData)*/

  return (
    <Layout pageTitle="Naissances" language={"french"}>
      {/*<Flex>
        {query.allFile.edges.map((edge) => {
          if (!edge.node.childDataJson) {
            return null;
          }
          const { title, dataContent } = edge.node.childDataJson;
          return (
            <div key={title}>
              <h2>{title}</h2>
              <p>{dataContent}</p>
            </div>
          );
        })}
      </Flex>*/}
    </Layout>
  );
}

export default Born