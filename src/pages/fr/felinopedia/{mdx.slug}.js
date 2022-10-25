import React, { useState } from 'react'
import Layout from '../../../components/layout'
import { graphql } from 'gatsby'
import styled from "styled-components"
import AnimalInfo from "../../../components/animalInfo"
import Annuaire from "../../../components/annuaire"
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
        jsonName
      }
    }
    
    allDataJson {
      edges {
        node {
          zoo
          espece
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
          content {
            name
            naissance
            sexe
            zoo
            mort
            animal_image {
              childImageSharp {
                gatsbyImageData
              }
            }
            petits
          }
        }
      }
    }
  }
`
const Panel = styled.div`
  text-align: center;
  aspect-ratio: 4/5;
  overflow-y: scroll; 
  ::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  width: calc(100% - 20px);
  max-width: 400px;
  min-width: 300px;
  color: #11574E;
  font-weight: bold;
  background-color: #FFE6B5;
  border-style: solid;
  border-width: 3px;
  border-color: #FFCBA5;
  border-radius: 10px;
  margin-top: 10px;
  margin-right: ${(props) => props.windowSize > 730 ? "10px" : "auto"};
  margin-left: ${(props) => props.windowSize > 730 ? "10px" : "auto"};
  margin-bottom: 5px;
  ${(props) => props.windowSize < 730 && props.showItems === 1 ? "cursor: pointer;" : ""}
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
  cursor: ${(props) => props.cursor === 0 ? "not-allowed" : "pointer"};
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const ContentArea = styled.main`
  height: 100%;
  margin-top: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) => props.windowSize < 730 ? `space-around` : `flex-start` };
  align-content: flex-start;
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
const Image = styled(GatsbyImage)`
  margin: 0 20px 10px 20px;
  border-width: 3px;
  border-color: #FFCBA5;
  border-radius: 5px;
`
const SmallText = styled.div`
  font-size: 12px;
  background-color: #FFCBA5;
  border-style: solid;
  border-width: 1px;
  border-color: #FFCBA5;
  border-radius: 10px;
  width: 50%;
`

const espece = (name) => {
  let shortName = ""
  let max = false
  for( let i = 0 ; i < name.length; i++ ){
    if( !(max) && name[i] !== "-"){
      shortName += name[i]
    } else {
      max = true
    }
  }
  return shortName
}

const FelinopediaPost = ({ data }) => {
  const [showItems, setShowItems] = useState(true)
  const [selected, setSelected] = useState(null)
  console.log(data)
  const animalData = data.mdx.frontmatter
  return (
    <Layout pageTitle={animalData.title} language={"french"}>
      <Flex windowSize={typeof window !== `undefined` ? window.innerWidth : 750}>
        <Panel  onClick={() => typeof window !== `undefined` && window.innerWidth < 730 ? setShowItems(true) :  null} 
                windowSize={typeof window !== `undefined` ? window.innerWidth : 750}
                showItems={showItems ? 0 : 1}>
          {showItems ? 
            <AnimalInfo animalData={animalData}/> 
          : <Annuaire data={selected}/>}
        </Panel>
        {!showItems && typeof window !== `undefined` && window.innerWidth < 730 ?
          null
        : <ContentArea windowSize={typeof window !== `undefined` ? window.innerWidth : 750}>
            {data.allDataJson.edges.sort(function (a, b) {return a.node.zoo.localeCompare(b.node.zoo)}).filter((zoo) => zoo.node.espece === animalData.jsonName).map((zoo, index) => {
              const imageAnimal = getImage(zoo.node.image)
              return (<AnimalPanel
                key={index}
                index={index}
                selected={selected}
                cursor={zoo.node.content.length}
                onClick={() => {
                  if (zoo.node.content.length !== 0){
                    if (showItems || (selected && selected.zoo !== zoo.node.zoo)){
                      setSelected(zoo.node)
                      setShowItems(false)
                    } else {
                      setSelected(null)
                      setShowItems(true)
                    }
                }}}>
                {zoo.node.zoo}
                <SmallText>
                  {zoo.node.content.filter((content) => (!(content.mort) && !(content.zoo))).length !==0 ? 
                    zoo.node.content.filter((content) => (!(content.mort) && !(content.zoo))).length + " " + espece(zoo.node.espece) + (zoo.node.content.length > 1 ? "s" : "") 
                    : "0 infos"}
                </SmallText>
                <Image
                  image={imageAnimal}
                  alt="Image d'un animal du zoo"
                />
              </AnimalPanel>)
            })}
          </ContentArea>}
      </Flex>
    </Layout>
  )
}

export default FelinopediaPost