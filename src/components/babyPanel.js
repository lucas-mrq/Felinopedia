import * as React from "react"
import styled from "styled-components"
import "../styles.css";

const Panel = styled.div`
    height: 175px;
    width: 200px;
    color: rgb(17, 87, 78);
    font-size: 15px;
    background-color: rgb(255, 230, 181);
    border-style: solid;
    border-width: 2px;
    border-color: rgb(255, 203, 165);
    border-radius: 50px;
    margin: 10px 10px 20px;
    text-align: center;
`;

const Title = styled.div`
    font-size: 20px;
    margin-top: 10px;
    font-weight: bold;
`;

const Infos = styled.div`
    margin-top: 5px;
`;
const Babys = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-evenly;
`;
const Baby = styled.div`
    margin: 5px;
`;
const Bold = styled.div`
    font-weight: bold;
`;

const BabyPanel = ({ data }) => {
    console.log(data)
    return (
        <Panel>
            <Title>{data.espece}</Title>
            <Infos>{data.zoo}</Infos>
            <Infos>{"Parents: " + data.parents[0] + " & " + data.parents[1]}</Infos>
            <Infos>{data.date}</Infos>
            <Babys>
                {data.babys.map((baby) => {return(
                <Baby>
                    <Bold>{baby.name}</Bold>
                    <div>{baby.sexe}</div>
                </Baby>
                );})}
            </Babys>
        </Panel>
    );
};

export default BabyPanel;
