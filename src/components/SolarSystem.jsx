import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

import '../styles/SolarSystem.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="solar-system">
        <Title headline="Planetas" />
        {planets.map(({ name, image }) => (
          <div key={ name } className="planet-card">
            <PlanetCard planetImage={ image } />
            <div className="planet-name">{name}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default SolarSystem;
