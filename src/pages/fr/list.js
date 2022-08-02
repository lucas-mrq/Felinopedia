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
  width: 450px;
  height: 500px;
`
const Image = styled.div`
  position:relative;
  z-index: 1;
`
const Zoo = styled.div`
  position:relative;
  background-color: ${(props) => props.color};
  height: 10px;
  width: 10px;
  border-style: solid;
  border-width: 5px;
  border-color: ${(props) => props.border};
  border-radius: 10px;  
  margin-top: ${(props) => props.position[0]}%;
  margin-left: ${(props) => props.position[1]}%;
  z-index: 2;
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
            <Zoo name="Zoo de Beauval" color={"#006BB1"} border={"#FED30E"} position={["-67","43"]} index={2} onClick={() => setSelectedZoo("Beauval")}>.</Zoo>
            <Zoo name="Zoo de la Palmyre" color={"#386D1D"} border={"#000000"} position={["12","26"]} index={3} onClick={() => setSelectedZoo("La Palmyre")}>.</Zoo>
          </MapArea>
        </Flex>
    </Layout>
  )
}
export default Liste