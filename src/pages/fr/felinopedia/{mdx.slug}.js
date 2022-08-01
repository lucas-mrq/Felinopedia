import React, { useState } from 'react'
import Layout from '../../../components/layout'
import { graphql } from 'gatsby'
import styled from "styled-components"
import AnimalInfo from "../../../components/animalInfo"
import Annuaire from "../../../components/annuaire"

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
        animal
        scientific_name
        map_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        statut
        age
        gestation
        babys
        nouriture
        ennemis
        temperament
        animalData
      }
    }
  }
`
const Panel = styled.div`
  text-align: center;
  height: 96%; 
  width: 400px;
  color: #11574E;
  font-size: 14px;
  font-weight: bold;
  background-color: #FFE6B5;
  border-style: solid;
  border-width: 3px;
  border-color: #FFCBA5;
  border-radius: 10px;
  margin-top: 10px; 
  margin-right: ${(props) => props.windowSize > 730 ? "10px" : "calc(50% - 203px)"};
  margin-left: ${(props) => props.windowSize > 730 ? "10px" : "calc(50% - 203px)"};
  margin-bottom: 5px;
  ${(props) => props.windowSize < 730 ? "cursor: pointer;" : ""}
`

const AnimalPanel = styled.div`
  height: 188px; 
  width: 188px;
  color: #11574E;
  font-size: 20px;
  font-weight: bold;
  background-color: #${(props) => (props.selected && props.index.zoo === props.selected.zoo) ? "FFCBA5" : "FFE6B5"};
  border-style: solid;
  border-width: 3px;
  border-color: #FFCBA5;
  border-radius: 10px;
  margin: 5px;
  cursor: pointer;
`

const ContentArea = styled.main`
  height: 100%;
  margin-top: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: ${(props) => props.windowSize < 730 ? "100%" : "calc(100% - 426px)"};
  ${(props) => props.windowSize < 730 ? "" : "overflow-y: scroll; ::-webkit-scrollbar {display: none; /* Chrome Safari */} scrollbar-width: none; /* Firefox */ -ms-overflow-style: none; /* IE 10+ */;"}
`;
const Flex = styled.div`
  display: ${(props) => props.windowSize > 730 ? "flex" : "block"};
  justify-content: center;
  flex-wrap: wrap;
  height: 99%;
  width: 100%;
`

const FelinopediaPost = ({ data }) => {
  const [showItems, setShowItems] = useState(true)
  const [selected, setSelected] = useState(null)
  const zoos = data.mdx.frontmatter.animalData.split("_")

  return (
    <Layout pageTitle={data.mdx.frontmatter.title} language={"french"}>
      <Flex windowSize={typeof window !== `undefined` ? window.innerWidth : 750}>
        <Panel onClick={() => typeof window !== `undefined` && window.innerWidth < 730 ? setShowItems(true):  null} windowSize={typeof window !== `undefined` ? window.innerWidth : 750}>
          {showItems ? 
            <AnimalInfo 
              image={data.mdx.frontmatter.hero_image}
              image_ref={data.mdx.frontmatter.hero_image_credit_link}
              animal={data.mdx.frontmatter.animal}
              scientific_name={data.mdx.frontmatter.scientific_name}
              map_image={data.mdx.frontmatter.map_image}
              statut={data.mdx.frontmatter.statut}
              age={data.mdx.frontmatter.age}
              gestation={data.mdx.frontmatter.gestation}
              babys={data.mdx.frontmatter.babys.split(", ")}
              nouriture={data.mdx.frontmatter.nouriture.split(", ")}
              ennemis={data.mdx.frontmatter.ennemis.split(", ")}
              temperament={data.mdx.frontmatter.temperament}
              /> 
            : <Annuaire name={selected.zoo}/>}
        </Panel>
        { !showItems && typeof window !== `undefined` && window.innerWidth < 730 ?
          null
        : <ContentArea windowSize={typeof window !== `undefined` ? window.innerWidth : 750}>
            {zoos.map((zoo, index) => {
              let zooInfo = JSON.parse(zoo)
              return (<AnimalPanel
                key={index}
                index={index}
                selected={selected}
                onClick={() => {
                  if (showItems || (selected && selected.zoo !== zooInfo.zoo)){
                    setSelected(zooInfo)
                    setShowItems(false)
                  } else {
                    setSelected(null)
                    setShowItems(true)
                  }
                }}>
                {zooInfo.zoo}
              </AnimalPanel>)
            })}
          </ContentArea>}
      </Flex>
    </Layout>
  )
}

export default FelinopediaPost