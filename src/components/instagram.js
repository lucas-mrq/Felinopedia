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
`
const TextArea = styled.div`
  width: calc(100% - 20px);
  max-height: 115px;
  margin: 10px;
  font-size: 13px;
  text-align: justify;
`
const ImageArea = styled(GatsbyImage)`
  width: 301px;
  height: 301px;
  margin-left: -0.5px;
`
const RightArea = styled.div`
  height: 30px;
  margin: 0 10px 0 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 66px;
  cursor: pointer;
`
const LeftArea = styled.div`
  height: 30px;
  margin: 5px 10px 0 10px;
  max-width: 22px;
  cursor: pointer;
`
const Icons = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const Name = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  margin: 10px;
`
const Title = styled.b`
  height: 30px;
  font-size: 13px;
  display: flex;
  margin-left: 10px;
  margin-top: 8px;
  align-content: flex-start;
  flex-direction: column;
  cursor: pointer;
`
const Menu = styled.div`
  width: 25px;
  margin-left: 130px;
  margin-top: 3px;
  
  cursor: pointer;
`
const Flex = styled.div`
  display: flex;
`
const Profil = styled(GatsbyImage)`
  cursor: pointer;
`
const Gras = styled.b`
  cursor: pointer;
`

const Insta = ({data }) => {
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
            <Profil
              alt={""}
              image={iconImage}
              backgroundColor={"#FFFFFF"}
            />
            <Title>
              <b>{data.title}</b>
            </Title>
            <Menu>
              <StaticImage alt="..." src="../images/points.png"/>
            </Menu>
          </Name>
        <ImageArea alt={""} image={data.image} backgroundColor={"#FFE6B5"}/>
        <Icons>
          <RightArea>
            <StaticImage alt="..." src="../images/like.png"/>
            <StaticImage alt="..." src="../images/chat.png"/>
            <StaticImage alt="..." src="../images/insta_share.png"/>
          </RightArea>
          <LeftArea>
            <StaticImage alt="..." src="../images/save.png"/>
          </LeftArea>
        </Icons>
        <Flex>
          <TextArea>
            <Gras>
              {data.title + " " }
            </Gras>
            {data.texte}
          </TextArea>
        </Flex>
    </Window>
  );
};
export default Insta;