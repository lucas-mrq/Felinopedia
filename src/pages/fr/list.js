import React, { useState } from 'react'
import Layout from '../../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import styled from "styled-components"

const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`
const MapArea = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 450px;
  height: 500px;
`
const Image = styled.div`
  position:relative;
  z-index: 1;
`
const Zoo = styled.div`
  position: relative;
  background-color: ${(props) => props.color};
  height: 10px;
  width: 10px;
  border-style: solid;
  border-width: ${(props) => props.borderForm==="top" ? "5px 5px 0 5px" : (props.borderForm==="bottom" ? "0 5px 5px 5px" : "5px")};
  border-color: ${(props) => props.border};
  border-radius: ${(props) => (props.borderForm==="top" || props.borderForm==="bottom") ? "5" : "10" }px;  
  margin-top: ${(props) => props.position[0]}%;
  margin-left: ${(props) => props.position[1]}%;
  z-index: ${(props) => props.zIndex};
  font-size: 1px;
  cursor: pointer;
  :hover:after{
    content: '${(props) => props.name}';
    width: 150px;
    position: absolute;
    bottom: -40px;
    left: -75px;
    padding: 5px;
    border: 1px solid #FFCBA5;
    border-radius: 3px;
    background: #FFF2CB;
    font-size: 14px;
    text-align: center;
  }
`

const Liste = () => {
  const [selectedZoo, setSelectedZoo] = useState(null)
  console.log(selectedZoo)
  return (
    <Layout pageTitle="Liste des Zoos" language={"french"}>
        <Flex>
          <MapArea>
            <Image>
              <StaticImage
                alt="Carte de la France"
                src="../../images/map-france.png"
              />
            </Image>
            <Zoo name="Zoo de Vincennes" color="#5A763A" border="#69675B" position={["-100","73"]} zIndex={30} onClick={() => setSelectedZoo("Vincenes")}>.</Zoo>
            <Zoo name="Zoo Amneville" color="#000000" border="#7BBEE5" position={["4","54"]} zIndex={27} onClick={() => setSelectedZoo("Amneville")}>.</Zoo>
            <Zoo name="Parrot World" color="red" border="blue" borderForm="top" position={["4","16"]} zIndex={24} onClick={() => setSelectedZoo("Lumigny")}>.</Zoo>
            <Zoo name="Parc des Felins" color="#F67D21" border="#99A63A" borderForm="bottom" position={["0","16"]} zIndex={21} onClick={() => setSelectedZoo("Lumigny")}>.</Zoo>
            <Zoo name="Zoo de Beauval" color="#006BB1" border="#FED30E" position={["9","-7"]} zIndex={18} onClick={() => setSelectedZoo("Beauval")}>.</Zoo>
            <Zoo name="Zoo de la Palmyre" color="#386D1D" border="#000000" position={["12","-44"]} zIndex={15} onClick={() => setSelectedZoo("La Palmyre")}>.</Zoo>
            <Zoo name="Zoo de Pessac" color="#FFFFFF" border="#ca0f47" position={["2","-38"]} zIndex={15} onClick={() => setSelectedZoo("Pessac")}>.</Zoo>
            <Zoo name="Domaine des Fauves" color="#FFFFFF" border="#7BBEE5" position={["-4","54"]} zIndex={12} onClick={() => setSelectedZoo("Abrets-en-Dauphiné")}>.</Zoo>
            <Zoo name="Zoo African Safari" color="#FFFFFF" border="#000000" position={["17","-11"]} zIndex={9} onClick={() => setSelectedZoo("African Safari")}>.</Zoo>
            <Zoo name="Zoo du Carbet " color="#e11b22" border="#b9d433" position={["15","-60"]} zIndex={2} onClick={() => setSelectedZoo("Carbet")}>.</Zoo>
          </MapArea>
        </Flex>
    </Layout>
  )
}
export default Liste