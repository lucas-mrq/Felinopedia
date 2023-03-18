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
  width: 450px;
  height: 484.51x;
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
          {zoo.map((data, index) => {return <Zoo name={data.name} color={data.color} border={data.border} borderForm={data.borderForm} position={[data.position[0], data.position[1]]} zIndex={33-index} onClick={() => setSelectedZoo(data.name)}>.</Zoo>})}
        </MapArea>
      </Flex>
    </Layout>
  )
}

const zoo = [
  {
    "name": "Bio-Topia Fort-Mardyck",
    "color": "#FFFFFF",
    "border": "#006633",
    "position": ["-107", "3"]
  },
  {
    "name": "Zoo Amiens",
    "color": "#3e8223",
    "border": "#000000",
    "position": ["4","7"]
  },
  {
    "name": "Parc Zoologique CERZA",
    "color": "#8E7F7B",
    "border": "#714838",
    "position": ["5","-31"]
  },
  {
    "name": "Parc Zoologique Bourbansais",
    "color": "#FFFFFF",
    "border": "#3D5597",
    "position": ["5","-54"]
  },
  {
    "name": "Zoo de Vincennes",
    "color": "#5A763A",
    "border": "#69675B",
    "position": ["-25","75"]
  },
  {
    "name": "zoo de Maubeuge",
    "color": "#FFFFFF",
    "border": "#0073E6",
    "position": ["-4","22"]
  },
  {
    "name": "Zoo Amneville",
    "color": "#000000",
    "border": "#7BBEE5",
    "position": ["4", "53"]
  },
  {
    "name": "Parrot World",
    "color": "red",
    "border": "blue",
    "position": ["4", "15"],
    "borderForm": "top"
  },
  {
    "name": "Parc des Felins",
    "color": "#F67D21",
    "border": "#99A63A",
    "position": ["0","15"],
    "borderForm": "bottom"
  },
  {
    "name": "Parc animalier de Sainte-Croix",
    "color": "#FFFFFF",
    "border": "#005D2B",
    "position": ["-8", "75"],
  },
  {
    "name": "Parc de l Auxois",
    "color": "#FFFFFF",
    "border": "#E51E2A",
    "position": ["14", "35"],
  },
  {
    "name": "Zoo de la Flèche",
    "color": "#FFFFFF",
    "border": "#FFBF00",
    "position": ["-12", "-33"],
  },
  {
    "name": "Zoo de la Boissière du Doré",
    "color": "#004A9F",
    "border": "#AB3921",
    "position": ["0", "-56"],
  },
  {
    "name": "Zoo de Beauval",
    "color": "#006BB1",
    "border": "#FED30E",
    "position": ["-3", "-7"],
  },
  {
    "name": "Le Pal",
    "color": "#FFFFFF",
    "border": "#E53B8B",
    "position": ["2", "23"],
  },
  {
    "name": "Zoo de la Palmyre",
    "color": "#386D1D",
    "border": "#000000",
    "position": ["5", "-44"],
  },
  {
    "name": "Zoo de Pessac",
    "color": "#FFFFFF",
    "border": "#CA0F47",
    "position": ["2", "-38"],
  },
  {
    "name": "Zoo Arcachon",
    "color": "#FFFFFF",
    "border": "#6D4931",
    "position": ["0", "-45"],
  },
  {
    "name": "Safari de Peaugres",
    "color": "#EA5B0C",
    "border": "#7A2E12",
    "position": ["-8", "49"],
  },
  {
    "name": "Domaine des Fauves",
    "color": "#FFFFFF",
    "border": "#7BBEE5",
    "position": ["-8", "54"],
  },
  {
    "name": "Zoo African Safari",
    "color": "#FFFFFF",
    "border": "#000000",
    "position": ["17", "-11"],
  },
  {
    "name": "Zoo de Montpellier",
    "color": "#FFFFFF",
    "border": "#000000",
    "position": ["-6","30"],
  },
  {
    "name": "Parc Animalier des Pyrénées",
    "color": "#FFFFFF",
    "border": "#83B91E",
    "position": ["0", "-28"],
  },
  {
    "name": "Parc d Asson",
    "color": "#379225",
    "border": "#FEB835",
    "position": ["-5", "-35"],
  },
  {
    "name": "Zoo du Carbet",
    "color": "#E11B22",
    "border": "#B9D433",
    "position": ["8", "-60"],
  },
  {
    "name": "Zoo de Macouria",
    "color": "#FFF0D3",
    "border": "#EF8F12",
    "position": ["-5", "-30"],
  }
]

export default Liste