import * as React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby';
import "../styles.css";

const Panel = styled.div`
  height: 400px;
  width: 300px;
  color: #11574E;
  font-size: 20px;
  font-weight: bold;
  background-color: #FFE6B5;
  border-style: solid;
  border-width: 3px;
  border-color: #FFCBA5;
  border-radius: 10px;
  margin: 10px;
  margin-bottom: 20px;
  text-align: center;
  transition-duration: 0.4s;
  &:hover {
    background-color: #FFF2CB;
  }
`;
const Title = styled.div`
  margin-top: 20px;
`;
const Image = styled(GatsbyImage)`
  margin: 20px 20px 0px 20px;
  border-width: 3px;
  border-color: #FFCBA5;
  border-radius: 5px;
`
const Description = styled.div`
  height: 135px;
  font-size: 14px;
  font-weight: normal;
  margin-left: 10px;
  margin-right: 10px;
  text-align: justify;
  display: flex;
  align-items: center;
`
const Date = styled.div`
  font-size: 12px;
  font-weight: normal;
`
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
`
const ArticleLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: normal;
  text-decoration: none;
  cursor: pointer;
  color: #11574E;
`

const ArticlePanel = ({ title, date, img, link, data, children }) => {
  const image = getImage(img[0])
  return (
    <Panel>
        <Title>{title}</Title>
        <Image
          image={image}
          alt={img[1]}
          backgroundColor={"#FFE6B5"}
        />
      <Description>{img[1]}</Description>
      
      <Flex>
        <Date>{date}</Date>
        <ArticleLink to={link}>Plus...</ArticleLink>
      </Flex>
    </Panel>
  );
};
export default ArticlePanel;
