import React from 'react';
import { useState } from 'react'




function Form(props) {

  const [teamMate, setTeamMate] = useState({Name: ''})
const handleChange = event => {
  setTeamMate({value: event.target.value})
  };
  return (
    <form className= 'form'>
      <label htmlFor='name'>Name</label>
      <input id='name' type= 'text' placeholder= 'Enter Name' value= {teamMate.name} name= 'name' onChange={handleChange}></input>
      <label htmlFor='email'>Email</label>
      <input id='email' type= 'text' placeholder= 'Enter Email' value= {teamMate.email} name= 'email' onChange={handleChange}></input>
      <label htmlFor='role'>Role</label>
      <input id='role' type= 'text' placeholder= 'Enter Role' value= {teamMate.role} name= 'role' onChange={handleChange}></input>
      <button type= 'submit'>Create Team</button>
  </form>
  
  );
}

    
 

export default Form;