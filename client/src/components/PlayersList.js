import React, { useEffect } from "react";
import styled from "styled-components";

function PlayersList({ data }) {
  return (
    <PlayerListDiv className="playerListContainer">
      <h1>Players:</h1>
      {data.map(data => (
        <PlayerCard key={data.id} className="playerCard">
          <h2>Name: {data.name}</h2>
          <p>Country: {data.country}</p>
          <p>Searches: {data.searches}</p>
        </PlayerCard>
      ))}
    </PlayerListDiv>
  );
}

export default PlayersList;

const PlayerListDiv = styled.div`
  background: #6ba8a9;
  width: 100%;
  max-width: 25em;
  margin: 16px auto;
  text-align: center;
  border-radius: 5px;
  h2 {
    color: white;
  }
`;

const PlayerCard = styled.div`
  background: #1d4d4f;
  width: 75%;
  max-width: 25em;
  padding: 1%;
  margin: 16px auto;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12), 0 5px 2px rgba(0, 0, 0, 0.24);
`;