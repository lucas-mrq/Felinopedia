import * as React from "react"
import styled from "styled-components";
import { Link } from "gatsby"

// styles
const PageStyle = styled.main`
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: "#232129";
  padding: "96px";
  font-family: "-apple-system, Roboto, sans-serif, serif";
`
const Head = styled.h1`
  marginTop: 0;
  marginBottom: 64;
  maxWidth: 320;
  textDecoration: no;
`

const BottomLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #FFE6B5;
  font-size: 20px;
`;

// markup
const NotFoundPage = () => {
  return (
    <PageStyle>
      <title>Page introuvable</title>
      <Head>Page introuvable</Head>
      <BottomLink to="/">Acceuil</BottomLink>
    </PageStyle>
  )
}

export default NotFoundPage
