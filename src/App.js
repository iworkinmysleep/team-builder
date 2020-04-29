import React, { useState } from 'react';
import './App.css';
import Form from './components/Form'
import Teamlist from './components/Teamlist';

function App() {

  const [teamList, setTeamList] = useState([
    {
      id: 1,
      name: "Evan Baxtor",
      email: "ebaxtor@yahoo.com",
      role: "Weather Man"
  }
]);

const addNewTeamMate = (teamMate) => {
  const newTeamMate = {
    id: Date.now(),
    name: teamMate.name,
    email: teamMate.email,
    role: teamMate.role
  };
  setTeamList([...teamList, newTeamMate])
};
  return (
    <div className="App">
      <h1>Team Builder</h1>
      <Form addNewTeamMate={addNewTeamMate}/>
      <Teamlist teamList={teamList} />
    </div>
  );
}

export default App;
