import * as React from "react"
import styled from "styled-components"
import "../styles.css";

const Panel = styled.div`
    height: 140px;
    width: 200px;
    color: rgb(17, 87, 78);
    font-size: 15px;
    background-color: rgb(255, 230, 181);
    border-style: solid;
    border-width: 2px;
    border-color: rgb(255, 203, 165);
    border-radius: 5px;
    margin: 10px;
    text-align: center;
`;

const Title = styled.div`
    font-size: 16px;
    margin-top: 10px;
    font-weight: bold;
`;

const Infos = styled.div`
    margin-top: 5px;
`;
const Babys = styled.div`
    display: flex;
    justify-content: space-evenly;
`;
const Baby = styled.div`
    margin: 5px;
`;

const BabyPanel = ({ data, zoo, espece }) => {
    console.log(data)
    if ((data.zoo === zoo || zoo === "Tous les zoos") && (data.espece === espece || espece === "Toutes les espèces")) {
        return (
            <Panel>
                <Title>{data.espece}</Title>
                <Infos><i>{data.zoo}</i></Infos>
                <Infos>{data.date}</Infos>
                <Infos><u>Parents</u>{" " + data.parents[0] + " & " + data.parents[1]}</Infos>
                <Babys>
                    {data.babys.map((baby) => {return(
                    <Baby>
                        <b>{baby.name}</b>
                        <div>{baby.sexe}</div>
                    </Baby>
                    );})}
                </Babys>
            </Panel>
        );
    } else return <></>;
};

export default BabyPanel;
