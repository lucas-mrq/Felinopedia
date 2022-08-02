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

const IndexPage = () => {
  return (
    <Layout pageTitle="Acceuil" language="french">
      <Image>
        <StaticImage alt="french flag" src="../../data/bienvenu/welcome.jpg"/>
      </Image>
    </Layout>
  )
}
export default IndexPage