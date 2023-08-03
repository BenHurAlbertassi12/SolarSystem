import React from 'react';
import Missions from '../data/missions';

function App() {
  return (
    <div>
      <h1>Missions</h1>
      <ul>
        {Missions.map((mission, index) => (
          <li key={ index }>
            <strong>Name: </strong>
            {mission.name}
            <br />
            <strong>Year: </strong>
            {mission.year}
            <br />
            <strong>Country: </strong>
            {mission.country}
            <br />
            <strong>Destination: </strong>
            {mission.destination}
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
