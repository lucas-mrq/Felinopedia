import * as React from 'react'
import Layout from '../../../components/layout'
import BabyPanel from '../../../components/babyPanel'
import styled from "styled-components"

const data = [
  {
    "espece": "Tigre",
    "zoo": "Zoo de la Palmyre",
    "date": "18.03.2023",
    "parents": [
      "Maria",
      "Jojo"
    ],
    "babys": [
      {
        "name": "Bidule",
        "sexe": "male",
      },
      {
        "name": "Truc",
        "sexe": "femelle",
      },
      {
        "name": "Jiji",
        "sexe": "male",
      },
    ]
  },
  {
    "espece": "Jaguar",
    "zoo": "Zoo de la Flèche",
    "date": "17.03.2023",
    "parents": [
      "Lula",
      "Lolo"
    ],
    "babys": [
      {
        "name": "Heny",
        "sexe": "femelle",
      }
    ]
  }
]

const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`

const Born = ({ children }) => {

  return (
    <Layout pageTitle="Naissances" language={"french"}>
      <Flex>
        {data.map((baby) => {return(<BabyPanel data={baby}></BabyPanel>);})}
      </Flex>
    </Layout>
  );
}

export default Born