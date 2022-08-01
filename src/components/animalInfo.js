import * as React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import "../styles.css";

const Title = styled.div`
  margin-top: 20px;
  font-size: 26px;
`;
const Image = styled(GatsbyImage)`
  margin: 20px;
  border-width: 3px;
  border-color: #FFCBA5;
  border-radius: 5px;
  height: 50%;
`
const TextArea = styled.div`
  height: 35%;
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

const AnimalInfo = ({image, image_ref, animal, scientific_name, map_image, statut, age, gestation, babys, nouriture, ennemis, temperament, children }) => {
  const img = getImage(image)  
  return (
    <>
      <Title>{animal[0].toUpperCase() + animal.substr(1, animal.length)}</Title>
      <Image
        alt={image_ref}
        image={img}
        backgroundColor={"#FFE6B5"}
      />
      <TextArea fontSize={typeof window !== `undefined` ? (((window.innerHeight - 400)/300)*6)+8 : 12} 
                marginTop={typeof window !== `undefined` ? (((window.innerHeight - 400)/300)*4)-4 : 0}>
        <Text><Soulign>Nom Scientifique:</Soulign>{scientific_name}</Text>
        <Text><Soulign>Durée de vie:</Soulign>{age}</Text>
        <Text><Soulign>Gestation:</Soulign>{gestation}</Text>
        <Text><Soulign>Nombre de petits:</Soulign>{`de ${babys[0]} à ${babys[1]} petits.`}</Text>
        <Text><Soulign>Temperament:</Soulign>{temperament}</Text>
      </TextArea>
    </>
  );
};
export default AnimalInfo;
