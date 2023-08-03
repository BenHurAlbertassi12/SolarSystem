import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import MissionCard from './components/MissionCard';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
        <MissionCard />
      </div>
    );
  }
}

export default App;
