import React, { useState, createContext } from 'react';

export const TeamsContext = createContext();

export const TeamsProvider = (props) => {
  const [teams, setTeams] = useState(['default']);
  return (
    <TeamsContext.Provider value={[teams, setTeams]}>
      {props.children}
    </TeamsContext.Provider>
  )
}