import React, {useState} from "react";
import { Link , navigate, useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image'
import styled from "styled-components";
import "../styles.css";

const ContentArea = styled.main`
  height: 85vh;
  ::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  overflow-y: scroll;
  overflow-x: hidden;
`;
const NavLink = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  width: 100%;
`;
const Button = styled.div`
  background-color: ${(props) => (props.current===0 ? `#FFCBA5;` : "#FFE6B5;")}
  color: #11574E;
  font-size: 22px;
  font-weight: 500;
  border-style: solid;
  border-width: ${(props) => (props.border===0 ? `0` : `3`)}px;
  border-color: #FFCBA5;
  width: ${(props) => (props.flag===5 ? `40px;` : `23%;`)}
  height: 40px;
  margin-right: ${(props) => (props.flag===5 ? `10px;` : `5px;`)}
  margin-left: ${(props) => (props.rank===0 ? `10px;` : `5px;`)}
  text-align: center;
  font-style: normal;
  border-radius: 10px;
  cursor: pointer;
  transition-duration: 0.4s;
  &:hover {
    background-color: #FFCBA5;
  }
`;
const CenterText = styled.div`
  margin-top: 7px;
`;
const BottomArea = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  padding-top: 6px;
  border-style: solid;
  border-width: 1px 0 0 0;
  border-color: #2E8A56;
`;
const BottomLink = styled(Link)`
  font-size: 14px;
  color: #fff2cb;
  text-decoration: none;
  cursor: pointer;
`;
const Flag = styled.div`
  margin: 5px;
`
const PhoneLayout = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  display: flex;
  list-style: none;
  padding: 0;
  width: calc(100% - 10px);
  justify-content: space-between;
  align-items: center;
`
const PhoneMenu = styled.div`
  background-color: #FFE6B5;
  height: 50%;
  width: 100%;
  border-style: solid;
  border-width: 3px;
  border-color: #FFCBA5;
  margin-right: 10px;
  border-radius: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between
`
const Cursor = styled.div`
  cursor: pointer;
`
const PhoneItem = styled.div`
  width: 100%;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #11574E;
  font-size: 20px;
`
const PhoneLink = styled.div`
  cursor: pointer;
  padding: 10px 50px 10px 50px;
`

const Layout = ({ pageTitle, language, children }) => {
  const [showMenu, setShowMenu] = useState(false)
  const listMenu = [ ["Acceuil","/"], ["Article", "/fr/press"], ["Felinopedia","/fr/felinopedia"], ["Liste des Zoos","/fr/list"]]
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <nav>
        {typeof window !== `undefined` && window.innerWidth > 650 ?  
          <NavLink>
            {listMenu.map((item, index) => <Button key={index} current={pageTitle===item[0] ? 0 : null} rank={index} onClick={() => navigate(item[1])}><CenterText>{item[0]}</CenterText></Button>)}
            <Button title="En développement" flag={5}>
              <Flag>
                {language==="french" ? <StaticImage alt="french flag" src="../images/french.png"/> : <StaticImage  alt="english flag" src="../images/english.png"/>}
              </Flag>
            </Button>
          </NavLink>
          : <PhoneLayout>
              {showMenu ?
                <PhoneMenu>
                  <PhoneItem>
                    {listMenu.map((item) => <PhoneLink onClick={() => navigate(item[1])}>{item[0]}</PhoneLink>)}
                  </PhoneItem>
                  <Cursor onClick={() => setShowMenu(false)}>
                    <StaticImage alt="logo" src="../images/menu.png"/>
                  </Cursor>
                </PhoneMenu>
                : <><StaticImage alt="logo" src="../images/felinopedia-icon.png" width={46} height={46}/>
                    <Button flag={5} onClick={() => setShowMenu(true)}>
                    <StaticImage alt="logo" src="../images/menu.png"/>
                  </Button></>}
            </PhoneLayout>
          }
      </nav>
      <ContentArea>
        {children}
      </ContentArea>
      <BottomArea>
        <BottomLink to="/fr/contact">About</BottomLink>
      </BottomArea>
    </div>
  );
};
export default Layout;
