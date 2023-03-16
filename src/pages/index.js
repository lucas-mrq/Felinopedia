import * as React from 'react'
import Layout from '../components/layout'
import styled from "styled-components"
import { StaticImage } from 'gatsby-plugin-image'

const Image = styled.div`
  width: 50%;
  border-radius: 5px;
  background-color: #FFCBA5;
  padding: 5px;
  margin-left: 10px;
  margin-top: 10px;
  max-width: 500px;
`
const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Acceuil" language="french">
      <Main>
        <Image>
          <StaticImage alt="french flag" src="../../data/bienvenu/welcome.jpg"/>
        </Image>
      </Main>
    </Layout>
  )
}
export default IndexPage