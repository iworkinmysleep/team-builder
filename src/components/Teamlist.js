import React from 'react';

const Teamlist = (props) => {

  return(
    <div className= 'team-list'>
      {props.teamList.map(member => (
        <div className= 'member' key={member.id}>
          <h2>{member.name}</h2>
          <h3>{member.email}</h3>
          <h3>{member.role}</h3>

        </div>
      ))}

    </div>
  )
}

export default Teamlist;