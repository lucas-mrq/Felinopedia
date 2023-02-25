import * as React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import "../styles.css";

const Title = styled.div`
  margin-top: 20px;
  font-size: 26px;
`
const Image = styled(GatsbyImage)`
  margin: 20px;
  border-width: 3px;
  border-color: #FFCBA5;
  border-radius: 5px;
  height: 50%;
`
const TextArea = styled.div`
  height: calc(49% - 26px - 60px);
  width: 100%;
  font-size: ${(props) => props.fontSize}px;
  margin-top: ${(props) => props.marginTop}%;
`
const Text = styled.div`
  display: flex;
  justify-content: center;
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: #FFCBA5;
  padding-top: 1%;
  padding-bottom: 1%;
`
const Soulign = styled.div`
  text-decoration: underline;
  margin-right: 7px;
`

const AnimalInfo = ({animalData, image, children }) => {
  let fontSize
  const animalBaby = animalData.babys ? animalData.babys.split(", ") : ["X", "X"]
  if (typeof window !== `undefined`) {
    const widthSize = (((window.innerWidth-400)/300)*2)+12
    const heigthSize = (((window.innerHeight - 400)/300)*6)+8
    fontSize = widthSize > heigthSize ? heigthSize : widthSize
  } else {
    fontSize = 12
  }
  const img = getImage(animalData.hero_image)  
  return (
    <>
      <Title>{animalData.animal[0].toUpperCase() + animalData.animal.substr(1, animalData.animal.length)}</Title>
      <Image
        alt={""}
        image={img}
        backgroundColor={"#FFE6B5"}
      />
      <TextArea fontSize={fontSize} 
                marginTop={typeof window !== `undefined` ? (((window.innerHeight - 400)/300)*4)-4 : 0}>
        <Text><Soulign>Nom Scientifique:</Soulign>{animalData.scientific_name}</Text>
        <Text><Soulign>Durée de vie:</Soulign>{animalData.age}</Text>
        <Text><Soulign>Gestation:</Soulign>{animalData.gestation}</Text>
        <Text><Soulign>Nombre de petits:</Soulign>{`de ${animalBaby[0]} à ${animalBaby[1]} petits.`}</Text>
        <Text><Soulign>Temperament:</Soulign>{animalData.temperament}</Text>
      </TextArea>
    </>
  );
};
export default AnimalInfo;
