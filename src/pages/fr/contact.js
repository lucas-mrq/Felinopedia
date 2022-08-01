import * as React from 'react'
import styled from "styled-components";
import Layout from '../../components/layout'

const About = styled.div`
  margin-left: 10px;
`

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me" language={"french"}>
      <About>En construction...</About>
    </Layout>
  )
}
export default AboutPage