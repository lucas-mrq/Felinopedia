import * as React from "react"
import styled from "styled-components"
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import "../styles.css";

const Window = styled.div`
  width: 300px;
  color: #000000;
  background-color: #FFFFFF;
  border-style: solid;
  border-width: 2px;
  border-color: #696969;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
`
const TextArea = styled.div`
  width: calc(100% - 20px);
  max-height: 115px;
  margin: 0 10px 10px 10px;
  font-size: 15px;
`
const ImageArea = styled(GatsbyImage)`
  width: 301px;
  height: 158px;
  margin-left: -0.5px;
`
const BottomArea = styled.div`
  width: calc(100% - 20px);
  height: 30px;
  margin: 0 10px 0 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
const Name = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  margin: 10px;
`
const Title = styled.div`
  height: 30px;
  font-size: 13px;
  display: flex;
  margin-left: 5px;
  align-content: flex-start;
  flex-direction: column;
`
const Menu = styled.div`
  width: 25px;
  margin-left: 130px;
  margin-top: 3px;
`
const SmallBottom = styled.div`
  max-width: 17px;
  margin-right: 5px;
`
const Flex = styled.div`
  display: flex;

`

const Facebook = ({data }) => {
  const iconImage = getImage(data.icon) 
  const tabTexte = data.texte.split(' ')
  let texte = ''
  for (let i = 0; i < tabTexte.length; i++) {
    if (texte.length < 300){
      texte += tabTexte[i]
    }
  }
  console.log(texte)
  return (
    <Window>
          <Name>
            <GatsbyImage
              alt={""}
              image={iconImage}
              backgroundColor={"#FFFFFF"}
            />
            <Title>
              <b>{data.title}</b>
              {data.date}
            </Title>
            <Menu>
              <StaticImage alt="..." src="../images/points.png"/>
            </Menu>
          </Name>
        <TextArea>{data.texte}</TextArea>
        <ImageArea alt={""} image={data.image} backgroundColor={"#FFE6B5"}/>
        <BottomArea>
          <Flex>
            <SmallBottom>
              <StaticImage alt="..." src="../images/like.png"/>
            </SmallBottom>
            J'aime
          </Flex>
          |
          <Flex>
            <SmallBottom>
              <StaticImage alt="..." src="../images/chat.png"/>
            </SmallBottom>
            Commenter
          </Flex>
        </BottomArea>
    </Window>
  );
};
export default Facebook;