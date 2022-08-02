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
`
const SmallContent = styled.div`
  width: 70%;
  font-size: 12px;
`
const Text = styled.div`
  display: flex;
  justify-content: center;
  border-style: solid;
  border-width: ${(props) => props.pos === "top" ? "0" : "1px 0 0 0"};
  border-color: #FFCBA5;
  padding-top: 1%;
  padding-bottom: 1%;
`

const Annuaire = ({ data, children }) => {
  console.log(data)
  return (
    <>
      <Title>{data.zoo}</Title>
      <MainPanel>.</MainPanel>
      {data.content.map((animals) => {
        const img = getImage(animals.animal_image)  
        return (
          <SmallPanel>
            <Image
              alt={""}
              image={img}
              backgroundColor={"#FFE6B5"}
            />
            <SmallContent>
              <Text pos={"top"}><Soulign>Nom:</Soulign>{animals.name}</Text>
              <Text><Soulign>Date de naissance:</Soulign>{animals.naissance}</Text>
              <Text><Soulign>Sexe:</Soulign>{animals.sexe}</Text>
              {animals.petits.length > 0 ? <Text><Soulign>Petits:</Soulign>{animals.petits.join(', ')}</Text> : ""}
            </SmallContent>
          </SmallPanel>
        )
      })}
    </>
  );
};
export default Annuaire;

