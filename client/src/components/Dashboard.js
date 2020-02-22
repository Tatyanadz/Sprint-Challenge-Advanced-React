import React  from "react";
import styled from "styled-components";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useDarkMode } from "./hooks/useDarkMode";

export default function Dashboard() {
  const [newPlayer, setNewPlayer] = useLocalStorage("newPlayer", "");
  const [darkMode, setDarkMode] = useDarkMode("dark");

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <DashboardDiv>
      <h1>New Player: {newPlayer}</h1>
      <form onSubmit={e => e.preventDefault()}>
        <input
          placeholder="type new player here"
          value={newPlayer}
          onChange={e => setNewPlayer(e.target.value)}
        />
      </form>
      <button
        onClick={toggleMode}
        className={darkMode ? "toggle toggled" : "toggle"}
      >
        Dark Mode
      </button>
    </DashboardDiv>
  );
}

const DashboardDiv = styled.div`
  max-width: 25em;
  width: 100%;
  background-color: #1d4d4f;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  margin-top: 5%;
  input {
    margin-bottom: 20%;
  }
  h1 {
    color: white;
  }
  label {
    color: #cfb37b;
  }
  button {
    background-color: #2e2b29;
    width: 20%;
    padding: 1.5%;
    margin-bottom: 3%;
    border-radius: 10px;
    border: 0;
    color: white;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12), 0 5px 2px rgba(0, 0, 0, 0.24);
  }
`;