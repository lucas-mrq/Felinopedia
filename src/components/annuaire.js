import * as React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import "../styles.css";

const Title = styled.div`
  margin-top: 20px;
  font-size: 26px;
`;
const MainPanel = styled.div`
  height: 40%;
  border-style: solid;
  border-width: 0px 0px 1px 0px;
  border-color: #2E8A56;
`
const SmallPanel = styled.div`
  height: 15%;
  border-style: solid;
  border-width: 0px 0px 1px 0px;
  border-color: #2E8A56;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.background};

`
const Image = styled(GatsbyImage)`
  margin: 1%;
  border-width: 3px;
  border-color: #FFCBA5;
  border-radius: 5px;
  width: 30%;
  height: 90%;
`
const Soulign = styled.div`
  text-decoration: underline;
  margin-right: 7px;
  margin-left: 25px;
`
const SmallContent = styled.div`
  width: 70%;
  font-size: 12px;
`
const Text = styled.div`
  display: flex;
  color: ${(props) => props.color};
  justify-content: center;
  margin-right: 25px;
  border-style: solid;
  border-width: ${(props) => props.pos === "top" ? "0" : "1px 0 0 0"};
  border-color: ${(props) => props.color};
  padding-top: ${(props) => props.windowSize < 400 ? "0%" : "1%"};
  width: 100%;
  padding-bottom: ${(props) => props.windowSize < 400 ? "0%" : "1%"};
  ${(props) => props.windowSize < 400 ? "font-size: 10px" : ""}
`

const Annuaire = ({ data, children }) => {
  const windowSize = typeof window !== `undefined` ? window.innerWidth : 750
  return (
    <>
      <Title>{data.zoo}</Title>
      <MainPanel>.</MainPanel>
      {data.content.map((animals, index) => {
        const darkColor = animals.zoo ? "#083D56" : (animals.mort ? "#5B5B5B" : "#1C6E55")
        const img = getImage(animals.animal_image)  
        return (
          <SmallPanel key={index} background={animals.zoo ? "#E3F1FF" : (animals.mort ? "#D3CCC5" : "#D9EAD3")}>
            <Image
              alt={""}
              image={img}
              backgroundColor={"#FFE6B5"}
            />
            <SmallContent>
              <Text windowSize={windowSize} pos={"top"} color={darkColor}>
                <Soulign>Nom:</Soulign>
                {animals.name}
                <Soulign>Sexe:</Soulign>
                {animals.sexe}
              </Text>
              {animals.mort ? 
                <Text windowSize={windowSize} color={darkColor}>
                  <Soulign>Vie:</Soulign>
                  {animals.naissance + " - " + animals.mort}
                </Text>
                : <Text windowSize={windowSize} color={darkColor}>
                  <Soulign>Date de naissance:</Soulign>
                  {animals.naissance}
                </Text>}
              {animals.zoo ? 
                <Text windowSize={windowSize} color={darkColor}>
                  <Soulign>Nouveau zoo:</Soulign>
                  {animals.zoo}
                  </Text>
                : (animals.petits.length > 0 ? 
                  <Text windowSize={windowSize} color={darkColor}>
                    <Soulign>Petits:</Soulign>
                    {animals.petits.join(', ')}
                  </Text> 
                  : "")}
            </SmallContent>
          </SmallPanel>
        )
      })}
    </>
  );
};
export default Annuaire;

