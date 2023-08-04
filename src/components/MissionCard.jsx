import React from 'react';
import Missions from '../data/missions';
import './styles.css'; // Importe o arquivo CSS que contém os estilos

function App() {
  return (
    <div>
      <div className="title">
        <h1>Missions</h1>
      </div>
      <div className="container">
        <ul className="mission-list">
          {Missions.map((mission, index) => (
            <li key={ index } className="mission-item">
              <div>
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
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
