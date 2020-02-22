import React from 'react'
import Axios from 'axios'
import PlayersList from "./components/PlayersList";
import styled from "styled-components";
import Dashboard from "./components/Dashboard";
import "./App.css";

class App extends React.Component {
  state = {
    players: []
  };

  componentDidMount() {
    this.fetchPlayersData();
  }

  fetchPlayersData = () => {
    Axios.get("http://localhost:5000/api/players")
      .then(response => {
        this.setState({
          players: response.data
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <AppDiv>
        <Dashboard />
        <PlayersList data={this.state.players} />
      </AppDiv>
    );
  }
}

export default App;

const AppDiv = styled.div`
  font-family: "Titillium Web";
  background: #ffeadb;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12), 0 5px 2px rgba(0, 0, 0, 0.24);
  width: 100%;
  max-width: 75em;
  margin: 16px auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  h1 {
    color: #ffeadb;
  }
  p {
    color: #ffeadb;
  }
`;