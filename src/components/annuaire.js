import * as React from "react"
import styled from "styled-components"
import "../styles.css";

const Title = styled.div`
  margin-top: 20px;
`;

const Annuaire = ({name, children }) => {
  return (
    <Title>{name}</Title>
  );
};
export default Annuaire;
